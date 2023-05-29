import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [ LandingPageComponent ]
})
export class PagesModule { }
