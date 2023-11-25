import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ContentComponent } from '../components/content/content.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, ContentComponent],
  exports: [HeaderComponent, ContentComponent],
})
export class PagesModule {}
