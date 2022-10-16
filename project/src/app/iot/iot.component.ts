import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/infoservice';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="IOT"

  funclick()
  {
    const service=new myservice();
    service.onclick(this.title)
  }


}
