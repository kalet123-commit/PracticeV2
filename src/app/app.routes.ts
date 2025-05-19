import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {ColectionCardComponent} from './nursing/pages/colection-card/colection-card.component';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'nursing/mental-state-exams',             component: ColectionCardComponent },
  { path: '',                 redirectTo: 'home', pathMatch: 'full' },
  { path: '**',               component: PageNotFoundComponent }
];
