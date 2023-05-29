import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    MatToolbarModule,
    MatCardModule ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})

export class MaterialModule { }
