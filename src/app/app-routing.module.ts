import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentNavigatorPage } from './student/student-navigator.component';


const routes: Routes = [
  { path: "student-nav", component: StudentNavigatorPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
