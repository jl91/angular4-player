import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ControlsComponent} from './controls/controls.component';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import {SharedModule} from './shared/shared.module';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        ControlsComponent,
        LeftPanelComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
