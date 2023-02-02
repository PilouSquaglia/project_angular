import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users$: Observable<any> | undefined;
  // public event: InputEvent;


  constructor(private homeService: HomeService,
    private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.users$ = this.homeService.getUsers();
  }

  // uploadFile(file: File) {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');

  //   this.httpClient.post<any>('http://localhost:3000/upload-media', formData, { headers: headers, reportProgress: true, observe: 'events' })
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress && event.total !== undefined && event.total > 0) {
  //         console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
  //       } else if (event.type === HttpEventType.Response) {
  //         console.log(event);
  //       }
  //     });
  // }

  // uploadFile(event: InputEvent) {
  //   console.log("###1111");
  //   if (event && event.target && event.target.files && event.target.files[0]) {
  //       const formData = new FormData();
  //       formData.append('file', event.target.files[0]);

  //       const headers = new HttpHeaders();
  //       headers.append('Content-Type', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');

  //       this.httpClient.post<any>('http://localhost:3001/upload-media', formData, { headers: headers, reportProgress: true, observe: 'events' })
  //         .subscribe(event => {
  //           if (event.type === HttpEventType.UploadProgress && event.total !== undefined && event.total > 0) {
  //             console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
  //           } else if (event.type === HttpEventType.Response) {
  //             console.log(event);
  //           }
  //         });
  //   }
  // }

}
