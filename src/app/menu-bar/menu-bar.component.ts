import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private http: HttpClient) { }
  items!: MenuItem[];

  ngOnInit(){
    this.http.get<MenuItem[]>('assets/menuList.json').subscribe({
      next: (res) =>{
        this.items = res;
      }
    })

  }

}
