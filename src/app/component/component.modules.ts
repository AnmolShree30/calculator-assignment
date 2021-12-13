import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentRoutingModule } from "./component-routing.module";
import { ComponentComponent } from "./component.component";
import { HistoryComponent } from "./history/history.component";
import { MainComponent } from "./main/main.component";

@NgModule({
    declarations: [HistoryComponent,
        MainComponent, ComponentComponent],
    imports: [ComponentRoutingModule,FlexModule,MatIconModule,CommonModule,],
})
export class ComponentModule {

}