import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent implements OnInit {
  user: any;
  repos: any[];
  userName: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.updateData();
  }

  searchUser() {
    if (!this.userName.trim().length) {
      this.resetProfile();

      return false;
    }

    this.updateData(this.userName);
  }

  private updateData(userName?: string) {
    if (userName) {
      this._githubService.updateUser(userName);
    }

    this._githubService.getUser()
      .subscribe(user => {
        this.user = user;
      });

    this._githubService.getRepos()
      .subscribe(repos => {
        this.repos = repos;
      });
  }

  private resetProfile() {
    this.user = null;
    this.repos = null;
  }
}
