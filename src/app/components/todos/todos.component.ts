import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  videos: any[] = [];

  constructor(private videosService: VideosService, private router: Router ) {}

  ngOnInit(): void {
      this.videosService.getVideos().subscribe(data => {
        this.videos = data;
        console.log(data);
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
