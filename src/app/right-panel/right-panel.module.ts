import {NgModule} from '@angular/core';
import {RightPanelComponent} from "./right-panel.component";
import {SearchBarModule} from "./search-bar/search-bar.module";

@NgModule({
    imports: [SearchBarModule],
    exports: [RightPanelComponent],
    declarations: [RightPanelComponent],
    providers: [],
})
export class RightPanelModule {
}
