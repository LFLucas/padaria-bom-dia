import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {
  
  private url: string = "http://localhost:5050/period"

  constructor(private httpClient: HttpClient) { }

  convertDate(dateTime:Date) {
    return dateTime.toISOString().slice(0, 19).replace('T', ' ')
  }

  getPeriod(dateStart:Date, dateEnd:Date){
    return this.httpClient.get(`${this.url}?start=${this.convertDate(dateStart)}&end=${this.convertDate(dateEnd)}`)
  }
}
