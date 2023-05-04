import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpComponent } from './pages/http/http.component';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'http', component: HttpComponent },
  { path: 'progres', component:ProgressbarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
