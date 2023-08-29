import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-otros-videos',
  templateUrl: './otros-videos.component.html',
  styleUrls: ['./otros-videos.component.css']
})
export class OtrosVideosComponent implements OnInit {
  videos: any[] = [];

  constructor (private videosService: VideosService, private router: Router) {}

  ngOnInit(): void {
      this.videosService.getVideos().subscribe(data => {
        this.videos = data;
      })
  }

  verDocument(video: any) {
    const type = video.type;
    const id = video._id;
    if(type === 'PDF') {
      this.router.navigate(['/pdf', id]);
    } else {
      this.router.navigate(['/video', id]);
    }
  }
}
