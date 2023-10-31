
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('account') == null){
      console.log('AuthGuard#canActivate 被觸發了');

      this.router.navigateByUrl('/login');
      return true;
    }else{
      this.router.navigateByUrl('/');
      console.log(localStorage.getItem('account'));
      return false;
    }



  }



}
