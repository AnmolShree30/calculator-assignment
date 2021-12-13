import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentComponent } from "./component.component";
import { HistoryComponent } from "./history/history.component";
import { MainComponent } from "./main/main.component";


const routes:Routes=[
    {
        path:'',
        component:ComponentComponent,
        children:[
            {
                path:'',
                component:MainComponent,
                data:{title:'Calculator'}
            },
            {
                path:'history',
                component:HistoryComponent
            }

        ]
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ComponentRoutingModule{}