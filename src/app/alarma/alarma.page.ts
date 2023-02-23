import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.page.html',
  styleUrls: ['./alarma.page.scss'],
})
export class AlarmaPage implements OnInit {

  public alarmlist = [
    {
      id: '1',
      title: 'Alarmas',
      imageURL: 'https://cdn-icons-png.flaticon.com/512/2014/2014825.png'
    }
     ]

    public crearalarm = [
      {
        id: '1',
        title: 'Crear lista de alarmas',
        imageURL: 'https://cdn-icons-png.flaticon.com/512/4659/4659027.png'
      }
    ]
  constructor() { }

  ngOnInit() {
  }

}
