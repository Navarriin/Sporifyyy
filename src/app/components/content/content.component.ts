import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiMusicService } from '../../service/api-music.service';
import { Musics } from '../../models/musics.models';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  musics$ = new Observable<Musics[]>();

  constructor(private apiMusic: ApiMusicService) {}

  ngOnInit(): void {
    this.getAllMusics();
  }

  getAllMusics() {
    this.musics$ = this.apiMusic.getAllMusics();
  }
}
