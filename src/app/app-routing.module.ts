import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy-and-cookies', component: CookiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
