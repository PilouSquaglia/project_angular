import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import HugeUploader from 'huge-uploader';


@Injectable({
	providedIn: 'root'
})
export class FileUploadService {

	// API url
	baseApiUrl = "http://localhost:3000/upload-media"

	constructor(private http: HttpClient) { }

	// Returns an observable
	upload(file: File) {

		const uploader = new HugeUploader({
			endpoint: this.baseApiUrl,
			file: file,
			postParams: { filename: file.name },
		});
		// subscribe to events
		uploader.on('error', (err: { detail: any; }) => {
			console.error('Something bad happened', err.detail);
		});

		uploader.on('progress', (progress: { detail: any; }) => {
			console.log(`The upload is at ${progress.detail}%`);
		});

		uploader.on('finish', (body: { detail: any; }) => {
			console.log('yeahhh - last response body:', body.detail);
		});

		console.log(uploader);
		return uploader;
	}
	// upload(file: File): Observable<any> {

	// 	// Create form data
	// 	const formData = new FormData();

	// 	// Store form name as "file" with file data
	// 	formData.append("file", file, file.name);

	// 	// Make http post request over api
	// 	// with formData as req
	// 	return this.http.post(this.baseApiUrl, formData)
	// }
}
