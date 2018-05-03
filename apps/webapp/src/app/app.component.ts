import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LayoutStoreService } from '@core/store/layout/layout-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['sessions'])
    }
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['sessions'])
      })
      .catch((err) => console.log(err));
  }
  ngOnInit() {
  }

 }
