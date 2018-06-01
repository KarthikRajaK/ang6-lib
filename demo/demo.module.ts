import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ang6LibModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, Ang6LibModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
