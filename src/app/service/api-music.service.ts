import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Musics } from '../models/musics.models';

@Injectable({
  providedIn: 'root',
})
export class ApiMusicService {
  private url: string = 'http://localhost:8080/musics';
  constructor(private http: HttpClient) {}

  getAllMusics(): Observable<Musics[]> {
    return this.http.get<Musics[]>(this.url);
  }

  postMusic(music: Musics): Observable<Musics> {
    return this.http.post<Musics>(this.url, music);
  }

  updateMusic(music: Musics): Observable<Musics> {
    return this.http.put<Musics>(`${this.url}/${music.id}`, music);
  }
}
