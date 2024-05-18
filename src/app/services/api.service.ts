import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public accessToken='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';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`,{
      headers:{'Authorization': 'Bearer ' + this.accessToken}
    });
  }
  getRepos(repoUrl:string, p:number, itemsPerPage:number){
    return this.httpClient.get(repoUrl + `?page=${p}&per_page=${itemsPerPage}`,{
      headers:{'Authorization': 'Bearer ' + this.accessToken}
    });
  }

  getLanguages(languageUrl:string){
    return this.httpClient.get(languageUrl,{
      headers:{'Authorization': 'Bearer ' + this.accessToken}
    });
  }

}
