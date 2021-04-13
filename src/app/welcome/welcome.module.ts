import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomePage } from "./welcome-page.component"

@NgModule({
  declarations: [WelcomePage],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WelcomePage]
})
export class WelcomePageModule {}
