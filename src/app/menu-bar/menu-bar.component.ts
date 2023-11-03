import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private ms:CommonService) { }
  items!: MenuItem[];
  clickSideCount = 0;

  ngOnInit() {
    this.http.get<MenuItem[]>('assets/menuList.json').subscribe({
      next: (res) => {
        this.items = res;
      }
    })
  }

  public login() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  public closeSideBar() {
    this.clickSideCount += 1;
    if (this.clickSideCount % 2 == 1) {
      this.ms.sidebarSwitch = true;
    } else {
      this.ms.sidebarSwitch = false;
    }

  }

}
