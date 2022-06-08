import { Component, ElementRef, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-project-preview-form',
  templateUrl: './project-preview-form.component.html',
  styleUrls: ['./project-preview-form.component.scss']
})
export class ProjectPreviewFormComponent {

  imgUrl?: string | ArrayBuffer | null | SafeUrl;
  notSavedChanges: boolean = false;
  file?: File;
  onSave?: Function;

  @ViewChild("fileInput") fileInput!: ElementRef<HTMLInputElement>;

  constructor(private config: DynamicDialogConfig,  private ref: DynamicDialogRef, private sanitizer: DomSanitizer) {
    // this.imgUrl = this.config.data.imgUrl && this.sanitizer.bypassSecurityTrustUrl(`C:/files/images/` + this.config.data.imgUrl);
    this.imgUrl = this.config.data.imgUrl;
    this.onSave = this.config.data.onSave;
    this.file = this.config.data.file;

    if(this.file)
      this.readFile(this.file);

  }

  onSelectedFileChange(event: any) {
    console.log(event, event.target.files)
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.readFile(file);
    }
  }

  onSaveClick() {
    if(this.onSave)
      this.onSave(this.fileInput.nativeElement.files);
    this.ref.close();
  }

  private readFile(file: File) {
    const reader = new FileReader();
    reader.onload = e => this.imgUrl = reader.result;

    reader.readAsDataURL(file);
    this.notSavedChanges = true;
  }
}
