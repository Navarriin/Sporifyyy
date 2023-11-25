import { Routes } from '@angular/router';

//Meu component da pagina inicial
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
