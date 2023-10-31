import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TreeNode} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sideBarList !:TreeNode[];
  selectSidebar :TreeNode = {
    "label":"",
    "data":"",
    "icon": ""
  };
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSidebarList();
  }
  public getSidebarList(){
    return this.http.get<TreeNode[]>('assets/address.json').subscribe({
      next: (res) =>{
        this.sideBarList = res;
      }
    })
  }

  public getTabUrl(item:TreeNode){
    this.router.navigate(['/',item.data], {relativeTo: this.route})
    .then(nav =>{
      console.log(nav);
    }, err =>{
      console.log(err);
    }
    );

  }

}
