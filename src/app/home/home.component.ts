import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Công';
  public age = 15;
  public traiCay = [
    {ten: 'Táo',gia: 12 ,haGia: true},
    {ten: 'Nho',gia: 15,haGia: false},
    {ten: 'Cam',gia: 30,haGia: true},
    {ten: 'Quýt',gia: 15,haGia: false}

  ]


  public resetName():void {
    this.name= '';

  }

}
