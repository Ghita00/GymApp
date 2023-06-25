import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployService } from 'src/app/services/employ.service';
import { CredentialEmploy } from 'src/app/modules/classes';

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
    private employSerivce: EmployService) {
    this.subscribeEmployLogin = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.employName = params["user"]
      }
      );

    this.formLogin = new FormGroup({
      user: new FormControl(),
      password: new FormControl()
    })
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
        this.router.navigate(['/']);
      } else {
        this.messageError = true;
      }
    })

  }

}
