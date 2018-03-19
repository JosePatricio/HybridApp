import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Api } from '../api/api';
/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UsuarioProvider {
 
  



  constructor( public api: Api) {
 
  }





  public login(user: string, password: string): Observable<any> {

    return this.api.get('usuariosService/login/' + user + '/' + password);
  }



  
/*
 login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }

*/

}