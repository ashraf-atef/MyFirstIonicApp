import { Component } from '@angular/core';
import { GitHubService } from '../../services/GithubService';

/*
  Generated class for the Github page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-github',
  templateUrl: 'github.html',
  providers: [GitHubService]
})
export class Github {

    public foundRepos;
    public username;

  constructor(private github: GitHubService) {

  }

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Github');
  }

}
