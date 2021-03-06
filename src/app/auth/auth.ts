import { Injectable, Inject }    from '@angular/core';
import { Http, Headers }         from '@angular/http';
import { Router }                from '@angular/router';
import { Location }              from '@angular/common';
import { Subject }               from 'rxjs/Subject';
import { APP_CONFIG, AppConfig } from '../app.config';


@Injectable()
export class AuthService {
  public accessToken: string;
  public isLoggedIn: Subject<boolean> = new Subject<boolean>();

  private tokenUrl: string;
  private baseUrl: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  private _isLoggedIn: boolean;

  constructor(
    private http: Http,
    private router: Router,
    private location: Location,
    // private _flash: SimpleNotificationsModule,
    @Inject(APP_CONFIG) config: AppConfig
  ) {
    this.baseUrl = config.serverUrl;
    this.tokenUrl = `${config.serverUrl}/oauth/token?client_id=${config.clientId}&grant_type=password`;
  }

  login(user) {
    let body = JSON.stringify(user);
    return this.http.post(this.tokenUrl, body, {headers: this.headers})
      .subscribe(res => {
        if (res.status == 200) {
          this.setAccessToken(res.json().access_token);
          this.setLogIn(true);
          this.router.navigate(['/admin']);
        }
      }, error => {
        this.handleError(error.text(), 'Login failed!')
      });
  }

  logout() {
    this.removeAccessToken();
    this.setLogIn(false);
    this.router.navigate(['/login']);
  }

  registration(user) {
    const url = `${this.baseUrl}/api/users`;
    let body = JSON.stringify({user: user});
    this.http.post(url, body, { headers: this.headers })
      .subscribe(res => {
        if (res.status == 200) {
          this.router.navigate(['/login']);
        }
      }, error => {
        this.handleError(error.text(), 'Registration failed!')
      });
  }

  checkConfirmationToken(confirmation_token: string): Promise<Object> {
    const url = `${this.baseUrl}/api/users/${confirmation_token}/confirm_email`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(error => {
        this.router.navigate(['/login']);
        this.handleError(error, 'Could not confirm email address!');
      });

  }

  private setAccessToken(token: string) {
    localStorage.setItem('token', token);
  }

  private setLogIn(value: boolean) {
    this._isLoggedIn = value;
    this.isLoggedIn.next(this._isLoggedIn);
  }

  private removeAccessToken() {
    localStorage.removeItem('token');
  }

  private handleError(error: any, flash: any = null): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
