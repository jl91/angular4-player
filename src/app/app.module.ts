import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpModule} from '@angular/http';
import {LeftPanelModule} from "./left-panel/left-panel.module";
import {ControlsModule} from "./controls/controls.module";
import {RightPanelModule} from "./right-panel/right-panel.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        LeftPanelModule,
        RightPanelModule,
        ControlsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
