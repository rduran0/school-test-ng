import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePage {
  title = 'school-test';

  constructor(private router: Router) {}

  goToStudentNav(): void {
    this.router.navigate([ "student-nav" ])
  }
}
