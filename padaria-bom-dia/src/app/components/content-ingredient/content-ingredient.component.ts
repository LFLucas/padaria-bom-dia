import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-ingredient',
  templateUrl: './content-ingredient.component.html',
  styleUrls: ['./content-ingredient.component.css']
})
export class ContentIngredientComponent {
  @Input() obj:any 
}
