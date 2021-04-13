import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentNavigatorPage } from './student/student-navigator.component';
import { WelcomePage } from './welcome/welcome-page.component';


const routes: Routes = [
  { path: "" , component: WelcomePage },
  { path: "student-nav", component: StudentNavigatorPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
