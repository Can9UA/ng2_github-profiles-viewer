import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private userName: string;
  private client_id = '60db556dc61dcd253546';
  private client_secret = 'df33c4e878532d5ec2f51ed1148e6e59e6b0ebf6';

  constructor(private _http: Http) {
    this.userName = 'Can9UA';
  }

  getUser() {
    return this._http.get(`http://api.github.com/users/${this.userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get(`http://api.github.com/users/${this.userName}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  updateUser(userName: string) {
    this.userName = userName;
  }
}
