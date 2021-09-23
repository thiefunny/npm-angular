import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrabantComponent } from './trabant/trabant.component';
import { WheelComponent } from './trabant/wheel/wheel.component';
import { SteeringWheelComponent } from './trabant/steering-wheel/steering-wheel.component';
import { RootComponent } from './tree/root/root.component';
import { BranchComponent } from './tree/branch/branch.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabantComponent,
    WheelComponent,
    SteeringWheelComponent,
    RootComponent,
    BranchComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
