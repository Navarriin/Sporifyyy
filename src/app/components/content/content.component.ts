import { Musics } from './../../models/musics.models';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiMusicService } from '../../service/api-music.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  protected musics$ = new Observable<Musics[]>();

  protected author: string = '';
  protected music: string = '';

  protected button: string = 'Enviar';

  constructor(private apiMusic: ApiMusicService) {}

  ngOnInit(): void {
    this.getAllMusics();
  }

  getAllMusics(): void {
    this.musics$ = this.apiMusic.getAllMusics();

    this.button = 'Enviar';
    this.author = '';
    this.music = '';
  }

  registerMusic(): void {
    if (!this.music || !this.author) return;

    if (this.button === 'Salvar') {
      this.updateMusic();
      return;
    }

    this.apiMusic
      .postMusic({ author: this.author, nameMusic: this.music })
      .subscribe(() => this.getAllMusics());
  }

  updateMusic(): void {
    this.apiMusic
      .updateMusic({ author: this.author, nameMusic: this.music })
      .subscribe(() => this.getAllMusics());
  }

  fillFields(music: Musics): void {
    this.button = 'Salvar';
    this.author = music.author;
    this.music = music.nameMusic;
  }
}
