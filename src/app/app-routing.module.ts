import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
