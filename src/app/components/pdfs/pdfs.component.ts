import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { PdfViewerComponent as Viewer } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit, AfterViewInit {
  @ViewChild('pdfContainer') pdfContainer!: ElementRef;
  leyendo: boolean = false;
  video: any = {};
  pdfSrc!: string;
  descriptions: [] = [];
  zoom: number = 1;

  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute // Inyecta ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.videosService.getVideo(id).subscribe(data => {
        this.video = data;
        this.descriptions = data.description.split('\r\n\r\n');
        this.pdfSrc = data.videoUrl;
        console.log(this.descriptions);
      })
    }
  }

  ngAfterViewInit(): void {
    const pdfWidth = 595;
    const containerWidth = this.pdfContainer.nativeElement.offsetWidth;
    const zoom = containerWidth / (1.7 * pdfWidth);
    Promise.resolve().then(() => {
      this.zoom = zoom;
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
