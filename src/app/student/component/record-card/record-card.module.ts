import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EasyContainerModule } from "src/app/common/container/easy-container.module";
import { EasyInputModule } from "src/app/common/input/easy-input.module";
import { UsefulPipes } from "src/app/pipe/useful-pipes.module";
import { FullRecordCard } from "./record-card-full.component";
import { HorizontalRecordCard } from "./record-card-h.component";
import { VerticalRecordCard } from "./record-card-v.component";

@NgModule({
  declarations: [
    VerticalRecordCard,
    HorizontalRecordCard,
    FullRecordCard
  ],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    UsefulPipes,
    EasyInputModule,
    EasyContainerModule
  ],
  exports: [
    VerticalRecordCard,
    HorizontalRecordCard,
    FullRecordCard
  ]
})
export class RecordCardModule {}
