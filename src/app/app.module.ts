import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Test1Module } from 'projects/test1/src/public-api';
import { Test2Module } from 'projects/test2/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, Test1Module, Test2Module],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
