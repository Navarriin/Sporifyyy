import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, PagesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
