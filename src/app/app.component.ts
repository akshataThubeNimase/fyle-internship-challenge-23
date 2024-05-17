import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userName: string = '';
  userDetails: any = {};
  repoData: any[] = [];
  langData: any[] = [];
  title = 'Repo App';
  showError: boolean = false;
  p: number = 1;
  itemsPerPage: number = 10;
  totalItems: any;
  dropDownData: any[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  isLoading: boolean = false;
  skeletonLoaders: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  handlePageChange(event: any) {
    this.p = event;
    this.isLoading = true;
    this.apiService
      .getRepos(this.userDetails.repos_url, this.p, this.itemsPerPage)
      .subscribe((data: any) => {
        console.log('getRepos response:=>', data);
        this.repoData = data;
        this.fetchLanguages();
      });
  }

  setPageSize(event: any) {
    let val = event.target.value;
    if ((val = 'ignore')) {
      return;
    }
    this.itemsPerPage = event.target.value;
  }

  onChangeInput(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
    console.log('Input value changed:', this.userName);
  }

  searchUser = () => {
    if (!this.userName.length) {
      return;
    }
    this.showError = false;
    this.userDetails = null;
    this.repoData = [];
    this.isLoading = true;
    this.apiService.getUser(this.userName).subscribe(
      (data: any) => {
        console.log('getUser response=>', data);
        this.userDetails = data;
        this.p = 1;
        //api call to fetch repos
        if (this.userDetails) {
          this.totalItems = this.userDetails.public_repos;
          this.apiService
            .getRepos(this.userDetails.repos_url, this.p, this.itemsPerPage)
            .subscribe((data: any) => {
              this.repoData = data;
              if (!this.repoData.length) {
                this.isLoading = false;
                this.showError = true;
              }
              this.fetchLanguages();
            });
        }
      },
      (error) => {
        console.log('User Not Found!', error);
        this.isLoading = false;
        this.showError = true;
      }
    );
  };

  fetchLanguages() {
    this.langData = [];
    this.repoData.forEach((repo) => {
      this.apiService.getLanguages(repo?.languages_url).subscribe((data) => {
        this.isLoading = false;

        this.langData.push({
          id: repo.id,
          languages: data || {},
        });
      });
    });
  }

  languages(id: number) {
    if (!this.langData?.length) {
      return [];
    }
    let langObject = this.langData.find((item) => item.id === id);
    return langObject ? Object.keys(langObject.languages) : [];
  }
}
