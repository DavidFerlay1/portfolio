import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/services/file.service';
import { take } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-file-admin',
  templateUrl: './file-admin.component.html',
  styleUrls: ['./file-admin.component.scss']
})
export class FileAdminComponent implements OnInit {

  @ViewChild('cvBrowser') cvBrowser!: ElementRef<HTMLInputElement>;

  cvForm = new FormGroup({
    cv: new FormControl(null, Validators.required)
  });

  constructor(private fileService: FileService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onChoseCVClick() {
    this.cvBrowser.nativeElement.click();
  }

  onCVChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const cv = target.files

    this.cvForm.patchValue({
      cv: target.files?.length ? target.files[0] as File : null
    })
  }

  onCVSubmit() {
    this.fileService.uploadCV(this.cvForm.value.cv).pipe(take(1)).subscribe(() => {
      this.toastService.success('C.V. mis à jour')
    })
  }

}
