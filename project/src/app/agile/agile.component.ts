import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { myservice } from '../service/infoservice';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  title="agile"

    funclick()
  {
    const service=new myservice();
    service.onclick(this.title)
  }


}
