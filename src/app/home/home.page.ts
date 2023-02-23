import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public homee = [
    {
      id: '1',
      title: 'Alarma',
      imageURL: 'https://e7.pngegg.com/pngimages/499/729/png-clipart-clock-face-computer-icons-clock-scale-angle-computer-thumbnail.png'
    }
    ]

  public homee2 = [
    {
      id: '2',
      title: 'Sincronización',
      imageURL: 'https://cdn-icons-png.flaticon.com/512/6811/6811839.png'
    }
  ]
  public homee3 = [
    {
      id: '3',
      title: 'Incursiones',
      imageURL: 'https://png.pngtree.com/png-vector/20191023/ourlarge/pngtree-army-soldier-icon-flat-style-png-image_1846702.jpg'
    }
  ]

  constructor() {}

}
