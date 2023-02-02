import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file!: File; // Variable to store file

	// Inject service
	constructor(private fileUploadService: FileUploadService) { }

	ngOnInit(): void {
	}

	// On file Select
	onChange(e: File[]) {
    this.file= e[0];
	console.log(this.file + "###########1");
	}
	// onChange(event: Event) {
  //   if(event && event.target){
  //     this.file = event.target.files[0] as File;
  //   }
	// }

	// OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file + "###########2");
		this.fileUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;

					this.loading = false; // Flag variable
				}
			}
		);
	}
}
