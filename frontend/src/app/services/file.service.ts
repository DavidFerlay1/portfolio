import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = 'file/';

  constructor(private http: HttpClient) { }

  downloadCV() {
    this.downloadFile('cv', 'CV-David-Ferlay.pdf');
  }

  private downloadFile(route: string, filename: string) {
    this.http.get(`${this.baseUrl}${route}`, {responseType: 'blob' as 'json'}).pipe(take(1)).subscribe((response: any) => {
      const binaryData = [];

      binaryData.push(response);
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: response.type}));
      downloadLink.setAttribute('download', filename);
      document.body.append(downloadLink);
      downloadLink.click();
    })
  }

  uploadCV(file: File) {
    const formData = new FormData();
    formData.append('cv', file);
    return this.http.post(`${this.baseUrl}cv`, formData);
  }
}
