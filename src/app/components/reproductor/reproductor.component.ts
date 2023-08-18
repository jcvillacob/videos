import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {  
  leyendo: boolean = false;
  video: any = {}

  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute // Inyecta ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.videosService.getVideo(id).subscribe(data => {
        this.video = data;
      })
    }
  }

  changeLeyendo() {
    this.leyendo = !this.leyendo;
  }

  realizarPrueba() {
    const url = this.video.test;
    window.open(url, '_blank');
  }
}
