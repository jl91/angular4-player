import {NgModule} from '@angular/core';

import {LeftPanelComponent} from './left-panel.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [LeftPanelComponent],
    declarations: [LeftPanelComponent],
    providers: [],
})
export class LeftPanelModule {
}
