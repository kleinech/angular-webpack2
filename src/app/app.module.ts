import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './secondComponent/second.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [AppComponent, SecondComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
