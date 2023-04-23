import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ProjectPreviewFormComponent } from 'src/app/components/forms/project-preview-form/project-preview-form.component';
import { ItemListComponent } from 'src/app/components/misc/item-list/item-list.component';
import { Project } from 'src/app/models/project';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { AppDialogService } from 'src/app/services/app-dialog.service';
import { ProjectService } from 'src/app/services/project.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.scss']
})
export class ProjectAdminComponent implements OnInit {

  selectedProject: Project | undefined;
  editMod = true;
  fileList?: FileList;

  @ViewChild('itemList') itemList!: ItemListComponent;
  @ViewChild("file") fileInput!: ElementRef<HTMLInputElement>;

  formGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    githubUrl: new FormControl(''),
    websiteUrl: new FormControl(''),
    vip: new FormControl(false),
  })

  constructor(public projectService: ProjectService, private dialogService: AppDialogService, private toastService: ToastService, private safePipe: SafePipe) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.editMod = false;
    this.itemList.avoidSelection();
    this.formGroup.reset();
    this.selectedProject = {vip: false};
    this.formGroup.patchValue(this.selectedProject);
  }

  onCancelCreationMod() {
    this.dialogService.confirmDialog({
      message:  "Le projet en cours de création ne sera pas sauvegardée. Continuer ?",
      disableYes: true,
      afterYes: () => {this.formGroup.reset(); this.selectedProject = undefined; this.editMod = true; this.dialogService.close()}
    })
  }

  inputChange(event: any) {
    this.formGroup.patchValue({
      previewFile: {id: null, file: event.target.files[0]},
    })
  }

  onProjectSelection(project: Project) {
    this.formGroup.patchValue({
      id: project.id,
      title: project.title,
      description: project.description,
      githubUrl: project.githubUrl,
      websiteUrl: project.websiteUrl,
      vip: project.vip
    })
  }

  onDeleteClick() {

    this.dialogService.confirmDialog({
      message: `Êtes-vous sûr de vouloir supprimer "${this.selectedProject?.title}"?`,
      disableYes: true,
      afterYes: () => {
        this.projectService.delete(this.selectedProject!).pipe(take(1)).subscribe(() => {
          this.toastService.success("Suppression terminée");
          this.projectService.splice(this.selectedProject!);
          this.itemList.avoidSelection();
          this.dialogService.close();
        })
      }
    })


  }

  onImageClick() {
    this.dialogService.open(ProjectPreviewFormComponent, "Ajouter une image", {
      file: this.fileInput.nativeElement.files ? this.fileInput.nativeElement.files[0] : null,
      imgUrl: this.selectedProject?.previewFile ? this.safePipe.transform(this.selectedProject.previewFile.url, 'resourceUrl') : null,
      onSave: this.onSaveImageClick.bind(this)
    })
  }

  onSaveImageClick(newFile: FileList) {
    this.fileInput.nativeElement.files = newFile;
  }

  onSaveProjectClick() {
    const body = {
      project: {...this.formGroup.value, id: this.selectedProject?.id || undefined},
      file: this.fileInput.nativeElement.files && this.fileInput.nativeElement.files.length ? this.fileInput.nativeElement.files[0] : null
    }

    this.projectService.post(body).pipe(take(1)).subscribe((project) => {
      if(this.editMod) {
        this.projectService.put(project);
      }
      else {
        this.projectService.add(project);
        this.editMod = true;
      }
      this.toastService.success(this.editMod ? "Mise à jour terminée" : "Création terminée")
    })
  }

}
