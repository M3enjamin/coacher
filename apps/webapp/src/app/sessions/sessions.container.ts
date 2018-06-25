import { AuthService } from '@app/core/services/auth.service';
import { User } from './../shared/model/user';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cchr-sessions',
  template: `{{(user | async)?.displayName}}`
})
export class SessionsContainer implements OnInit {
  user: Observable<User>;

  constructor(private _auth: AuthService) {
    this.user = this._auth.user;
  }

  ngOnInit() {}
}
