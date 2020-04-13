import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/user';
import { Repos } from 'src/app/repos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class UserService {
  user:User;
  private username: string;
  private url = 'https://api.github.com/users/';
  private clientid = '728eb7d221de469a432b435a9883a695087618fa';



  constructor(private http: HttpClient) {
    this.username = 'michayla';
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.url + this.username + "?client_id=" + this.clientid).pipe(map(res => res));
  }
  getRepos(): Observable<Repos[]> {
    return this.http.get<Repos[]>(this.url + this.username + "/repos?client_id=" + this.clientid).pipe(map(res => res));
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

