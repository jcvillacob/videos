import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  formulario: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    group: ['Todos', Validators.required],
    test: ['', Validators.required]
  });

  videoFile: File | null = null;
  imgFile: File | null = null;

  constructor(private fb: FormBuilder, private videosService: VideosService) { }

  onVideoSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.videoFile = inputElement.files[0];
    }
  }

  onImgSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.imgFile = inputElement.files[0];
    }
  }

  onSubmit() {
    if (this.videoFile && this.imgFile && this.formulario.valid) {
      this.videosService.uploadVideo(this.formulario.value, this.videoFile, this.imgFile)
        .subscribe(response => {
          console.log('Video uploaded successfully:', response);
        }, error => {
          console.error('An error occurred while uploading the video:', error);
        });
    }
  }
}
