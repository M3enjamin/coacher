import { Router } from '@angular/router';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['sessions']);
    }
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(res => {
        this.router.navigate(['sessions']);
      })
      .catch(err => console.log(err));
  }
  ngOnInit() {}
}
