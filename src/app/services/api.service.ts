import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public accessToken='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'

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    //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
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`,{
      headers:{'Authorization': 'Bearer ' + this.accessToken}
    });
  }
 // ?page=1&per_page=5
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

  


  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
