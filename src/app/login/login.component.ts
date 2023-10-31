import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public account = "";
  public password = "";

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
  }

  /**
   * 確認輸入帳密是否在api/資料庫中
   */
  public LoginCheck(){
    if(this.account=="123"&&this.password=="123"){
       localStorage.setItem('account',this.account);
       localStorage.setItem('password',this.password);
       localStorage.setItem('loginTime', new Date().toISOString());
       this.router.navigateByUrl('/');
    }else{
      alert("帳密錯誤");

    }


  }


}
