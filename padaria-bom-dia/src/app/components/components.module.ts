import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { ContentDatepickerComponent } from './content-datepicker/content-datepicker.component';
import { ContentIngredientComponent } from './content-ingredient/content-ingredient.component';

@NgModule({
  declarations: [ 
    HeaderToolbarComponent, 
    ContentIngredientComponent ],
  imports: [ 
    CommonModule,
    MaterialModule, 
    ContentDatepickerComponent ],
  exports: [ 
    HeaderToolbarComponent,
    ContentDatepickerComponent,
    ContentIngredientComponent ],
  })

export class ComponentsModule { }
