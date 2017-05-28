import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  userName: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.user = null;
  }

  searchUser() {
    if (!this.userName.trim().length) {
      this.user = null;
      this.repos = null;

      return false;
    }

    this._githubService.updateUser(this.userName);

    this._githubService.getUser()
      .subscribe(user => {
        this.user = user;
      });

    this._githubService.getRepos()
      .subscribe(repos => {
        this.repos = repos;
      });
  }
}
