import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Musics } from '../models/musics.models';

@Injectable({
  providedIn: 'root',
})
export class ApiMusicService {
  private url: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getAllMusics(): Observable<Musics[]> {
    return this.http.get<Musics[]>(`${this.url}/musics`);
  }
}
