import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestAccount = new RequestAccount();
  public requestAccountBuff = new RequestAccount();
  public accountList = Array<ResponseAccount>();
  public loginMember = Array<ResponseAccount>();
  public loginIndex = -1;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
  }

  /**
   * 確認輸入帳密是否在api/資料庫中
   */
  public LoginCheck(){
    this.requestAccount.account  = this.requestAccountBuff.account;
    this.requestAccount.password = this.requestAccountBuff.password;
    /**
   *api版帳密驗證
   *
   * @return {*}回傳結果
   * @memberof LoginComponent
   */

  //   return this.http.post<RequestAccount>('assets/accountList.json',this.requestAccount).subscribe({
  //     next: (res) =>{
  //       return res;
  //     }
  //   })
    this.http.get<ResponseAccount>('assets/accountList.json').subscribe(
      {
        next: (res) =>{
          this.accountList.push(res);
          this.loginMember = this.accountList.filter((item)=>item.account = this.requestAccount.account)
          if(this.loginMember.length == 0){
            console.log("查無此障密");
          }else{
            console.log("this.loginMember"+this.loginMember);
            localStorage.setItem('account',this.loginMember[0].account);
            localStorage.setItem('password',this.loginMember[0].password);
            localStorage.setItem('name',this.loginMember[0].name);
            localStorage.setItem('loginTime', new Date().toISOString());
            this.router.navigateByUrl('/');
          }
        }, error: (err) => {
          switch (err.status) {
            case 400:
              alert("errorMessage.parameterError");
              break;
            case 401:
            case 402:
              alert("errorMessage.accountPasswordError");
              break;
            case 403:
              alert("errorMessage.unauthorizedOperation")
              break
            case 452:
              alert("errorMessage.platformDisabled");
              break;
            case 453:
              alert("errorMessage.accountDeactivation");
              break;
            default:
              alert("errorMessage.serverError");
              break;
          }
        }
      }
    )



  }


}

/**
 * 輸入帳號密碼的型態
 */
export class RequestAccount{
  "account"  : "";
  "password" : "";
}

/**
 * 取得帳號密碼的型態
 */
export class ResponseAccount{
  "name"     : "";
  "account"  : "";
  "password" : "";
}
