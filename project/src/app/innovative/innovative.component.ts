import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/infoservice';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="innovative"

  funclick()
  {
    const service=new myservice();
    service.onclick(this.title)
  }


}
