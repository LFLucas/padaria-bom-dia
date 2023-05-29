import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentDatepickerComponent } from 'src/app/components/content-datepicker/content-datepicker.component';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit, AfterViewInit {
  
  @ViewChild('dateInterval', { read: ContentDatepickerComponent })
  dateInterval!: ContentDatepickerComponent
  dateChange!: Observable<any>

  @Output() ingredients: any

  constructor(private requestData: RequestDataService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dateChange = this.dateInterval.dateChange.asObservable()
    this.dateChange.subscribe((date) => {
      if (date[0] && date[1]) {
        console.log("Request Sent") 
        this.requestData.getPeriod(date[0], date[1]).subscribe( (data) => { 
            this.ingredients = data
            console.log("Response Received") }) } })
  }
}
