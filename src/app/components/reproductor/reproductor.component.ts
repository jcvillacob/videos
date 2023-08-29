import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from '../../models/video'

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {  
  leyendo: boolean = false;
  video!: Video;
  descriptions: string[] = [];

  constructor(private videosService: VideosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadVideo(id);
      }
    });
  }

  private loadVideo(id: string): void {
    this.videosService.getVideo(id).subscribe(data => {
      this.video = data;
      this.descriptions = data.description.split('\r\n\r\n');
      console.log(this.descriptions);
    });
  }

  changeLeyendo() {
    this.leyendo = !this.leyendo;
  }

  realizarPrueba() {
    const url = this.video.test;
    window.open(url, '_blank');
  }
}
