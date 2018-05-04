import { Router } from '@angular/router';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cchr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  signInWithGoogle() {
    this._authService
      .signInWithGoogle()
      .then(res => {
        this._router.navigate(['/']);
      })
      .catch(err => console.log(err));
  }
  ngOnInit() {}
}
