import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  videos: any[] = [];

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
      this.videosService.getVideos().subscribe(data => {
        this.videos = data;
        console.log(data);
      })
  }

}
