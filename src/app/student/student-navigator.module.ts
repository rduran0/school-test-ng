import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EasyContainerModule } from "../common/container/easy-container.module";
import { RecordCardModule } from "./component/record-card/record-card.module";
import { StudentNavigatorPage } from "./student-navigator.component";

@NgModule({
  declarations: [
    StudentNavigatorPage
  ],
  imports: [
    FormsModule,
    CommonModule,
    RecordCardModule,
    EasyContainerModule
  ],
  exports: [StudentNavigatorPage]
})
export class StudentModule {}
