import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Info } from './info/info';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'info', component: Info },
  {
    path: 'tutoring',
    loadChildren: () => import('./tutoring/tutoring.routes').then((m) => m.tutoringRoutes),
  },
];
