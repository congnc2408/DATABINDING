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

  ];

  public districts: string[]=['Quận huyện'];

  public vietnamData = [
    {city: 'Chọn thành phố', district:['Quận huyện']},
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },

  ];



  public resetName():void {
    this.name= '';

  }

  public onChangeCity(event:any){
    const city = event.target.value;
    if (!city) {
      return;
    }

    //cách 1
    // console.log('event',city);
    // const search = this.vietnamData.filter(data => data.city === city);
    // console.log('event',search);

    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }
    //cách 2

    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }

}
