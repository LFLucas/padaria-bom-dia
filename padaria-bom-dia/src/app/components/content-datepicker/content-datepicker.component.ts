
import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

/** @title Date range picker comparison ranges */
@Component({
  selector: 'content-datepicker',
  templateUrl: 'content-datepicker.component.html',
  styleUrls: ['content-datepicker.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})

export class ContentDatepickerComponent {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });

  
  @Output() dateChange: EventEmitter<MatDatepickerInputEvent<any, any>> = new EventEmitter<MatDatepickerInputEvent<any, any>>()

  onDateChange(event: MatDatepickerInputEvent<any,any>){
    event.value = [ this.campaignOne.value.start, 
                    this.campaignOne.value.end] 
    this.dateChange.emit(event.value)
  }
  
  
  
}
 