import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployService } from 'src/app/services/employ.service';
import { CredentialEmploy } from 'src/app/modules/classes';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form create
  // @ts-ignore
  public formLogin: FormGroup;
  public messageError: Boolean = false;

  private subscribeEmployLogin: Subscription;

  employName: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employSerivce: EmployService,
    private cookieService: CookieService) {
    this.subscribeEmployLogin = Subscription.EMPTY;
  }

  ngOnInit(): void {

    this.formLogin = new FormGroup({
      user: new FormControl(),
      password: new FormControl()
    })

    if(this.cookieService.get('User')){
      this.router.navigate(['/home']);
    }
  }

  OnDestroy(): void {
    this.subscribeEmployLogin.unsubscribe();
  }

  onSubmit(): void {
    console.log(this.formLogin.value)
    let credential: CredentialEmploy = {
      user: this.formLogin.value["user"],
      password: this.formLogin.value["password"],
    }
    this.subscribeEmployLogin = this.employSerivce.loginEmploy(credential).subscribe((data: any) => {
      console.log(data);
      if (data.connect != false) {
        this.cookieService.set('User', credential.user);
        this.router.navigate(['/home']);
      } else {
        this.messageError = true;
      }
    })

  }

}
