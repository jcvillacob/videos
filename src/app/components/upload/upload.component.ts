import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideosService } from 'src/app/services/videos.service';
import { ToastrService } from 'ngx-toastr';

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
    type: ['Video', Validators.required],
    test: ['', Validators.required]
  });

  videoFile: File | null = null;
  imgFile: File | null = null;

  constructor(private fb: FormBuilder, private videosService: VideosService, private toastr: ToastrService) { }

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

  resetVideoFile() {
    this.videoFile = null;
    const inputElement = document.getElementById('video') as HTMLInputElement; // Asume que tienes un id='video-input' en tu elemento de entrada
    inputElement.value = ''; // Esto resetea la selección de archivo en el elemento de entrada
  }

  resetImgFile() {
    this.imgFile = null;
    const inputElement = document.getElementById('image') as HTMLInputElement; // Asume que tienes un id='video-input' en tu elemento de entrada
    inputElement.value = ''; // Esto resetea la selección de archivo en el elemento de entrada
  }


  onSubmit() {
    if (!this.videoFile || !this.imgFile || !this.formulario.valid) {
      this.toastr.error('Debes Ingresar todos los datos', 'Error');
    } else if (this.videoFile && this.imgFile && this.formulario.valid) {
      this.videosService.uploadVideo(this.formulario.value, this.videoFile, this.imgFile)
        .subscribe(response => {
          console.log('Video uploaded successfully:', response);
          this.toastr.success('Creado correctamente', 'Éxito');
          this.formulario.reset(); // Reinicias el formulario
          this.resetVideoFile(); // Reinicia la selección de archivos de video
          this.resetImgFile(); // Reinicia la selección de archivos de imagen
        }, error => {
          console.error('An error occurred while uploading the video:', error);
          this.toastr.error('Ha ocurrido un error durante la carga', 'Error');
        });
    }
  }
}
