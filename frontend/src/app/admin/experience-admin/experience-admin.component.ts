import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ExperienceDetailFormComponent } from 'src/app/components/forms/experience-detail-form/experience-detail-form.component';
import { ItemListComponent } from 'src/app/components/misc/item-list/item-list.component';
import { Experience } from 'src/app/models/experience';
import { AppDialogService } from 'src/app/services/app-dialog.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-experience-admin',
  templateUrl: './experience-admin.component.html',
  styleUrls: ['./experience-admin.component.scss']
})
export class ExperienceAdminComponent implements OnInit {

  selectedExperience: Experience | undefined = undefined;
  editMod: boolean = true;

  @ViewChild('items') itemList!: ItemListComponent;

  formGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    post: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    beginDate: new FormControl('', Validators.required),
    endDate: new FormControl(''),
    detail: new FormControl('')
  })

  constructor(public experienceService: ExperienceService, private dialogService: AppDialogService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSelection(target: Experience) {
    if(target) {
      this.formGroup.patchValue({
        id: target.id,
        title: target.title,
        post: target.post,
        company: target.company,
        beginDate: target.beginDate,
        detail: target.detail
      })
    } else {
      this.formGroup.reset();
    }
  }

  onSave() {

    const experience = this.formGroup.value;

    this.experienceService.put(experience).pipe(take(1)).subscribe(experienceId => {
      if(this.editMod) {
        this.experienceService.update(experience);
      }
      else {
        experience.id = experienceId;
        this.experienceService.add(experience);
        this.editMod = true;
        this.itemList.selectItem(experience);
      }

      this.toastService.success(this.editMod ? "Mise à jour terminée" : "Création terminée");
    })
  }

  onDelete() {
    this.dialogService.confirmDialog({
      message: `Êtes-vous sûr de supprimer "${this.selectedExperience?.title}" ?`,
      disableYes: true,
      afterYes: () => {
        this.experienceService.delete(this.selectedExperience!).pipe(take(1)).subscribe(() => {
          this.toastService.success("Suppression terminée");
          this.experienceService.splice(this.selectedExperience!)
          this.itemList.avoidSelection();
          this.dialogService.close();
        })
      }
    })
  }

  onCreate() {
    this.editMod = false;
    this.itemList.avoidSelection();
    this.selectedExperience = {id: '', title: '', post: '', company: '', beginDate: '', endDate: undefined, detail: ''};
    this.formGroup.patchValue(this.selectedExperience);
    console.log(this.selectedExperience);
  }

  onCancelCreationMod() {
    this.dialogService.confirmDialog({
      message:  "L'expérience en cours de création ne sera pas sauvegardée. Continuer ?",
      disableYes: true,
      afterYes: () => {this.formGroup.reset(); this.selectedExperience = undefined; this.editMod = true; this.dialogService.close()}
    })
  }

  onDetailClick() {
    console.log(this.formGroup)
    this.dialogService.open(ExperienceDetailFormComponent, "Détail de l'expérience", {detail: this.selectedExperience?.detail, onValidate: this.onDetailValidateClick.bind(this)});
  }

  onDetailValidateClick(experienceDetail: string) {

    this.formGroup.patchValue({
      detail: experienceDetail
    });

    this.selectedExperience!.detail = experienceDetail;

  }

}
