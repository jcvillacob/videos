import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Video, VideoDTO} from '../models/video'

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private readonly baseUrl = environment.URL;

  constructor(private http: HttpClient) {}

  uploadVideo(form: any, videoFile: File, imgFile: File): Observable<any> {
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    formData.append('videoFile', videoFile, videoFile.name);
    formData.append('imgFile', imgFile, imgFile.name);

    return this.http.post<Video>(this.baseUrl, formData);
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl);
  }

  getVideo(id: string): Observable<Video> {
    return this.http.get<Video>(this.baseUrl+ '/' + id);
  }
}
