import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {





  url: string = 'http://192.168.80.12:8080/connector-1.0/rest';
  // url: string = 'http://lolo-serv.7e14.starter-us-west-2.openshiftapps.com/rest';




  constructor(public httpClient: HttpClient, public http: Http) {
  }



  public urlServices() {
    return this.url;
  }

  public downloadPdfFile(urlService: string, fileName: string) {
    var req = new XMLHttpRequest();
    req.open("GET", this.url + "/" + urlService, true);
    req.responseType = "blob";

    req.onload = function (event) {
      var blob = req.response;
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName + ".pdf";
      link.click();
    };

    req.send();

  }




  getPdf(service: string): any {

    return this.httpClient.get(this.url + service, {
      responseType: "blob"
    }).map(
      (res) => {
        return new Blob([res], { type: 'application/pdf' })
      });
  }



  consola(texto: string) {

    return this.httpClient.get('https://serviciosnode.herokuapp.com/api/consola/' + texto);

  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.httpClient.get(this.url + '/' + endpoint, reqOpts);
  }






  get_pipe(endpoint: string, params?: any, reqOpts?: any): Observable<string[]> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }



    return this.httpClient.get<string[]>(this.url + '/' + endpoint, reqOpts)
      .pipe(
        map(customers => {

          return customers;
        }),
        catchError(this.handleError)
      );
  }




  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }







  get_type<T>(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }
    return this.httpClient.get<T>(this.url + '/' + endpoint, reqOpts);
  }

  post_type<T>(endpoint: string, body: any, reqOpts?: any) {
    console.log('URL COMPLETA   ' + this.url + '/' + endpoint);
    return this.httpClient.post<T>(this.url + '/' + endpoint, body, reqOpts);
  }





  postHttp(service: string, item: any) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    return this.http.post(this.url + '/' + service, JSON.stringify(item), options).toPromise();
  }




  putHttp(service: string, item: any) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    return this.http.put(this.url + '/' + service, JSON.stringify(item), options).toPromise();

  }



  getHttp(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  public putHttpClient<T>(endpoint: string, obj: any) {


    // const params = new HttpParams().set('id', obj.reporte.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');

    headers.set('responseType', 'text');

    console.log('ENLACE CLIENT  ' + this.url + '/' + endpoint);

    return this.httpClient.put<T>(this.url + '/' + endpoint, obj, {
      headers
      // ,params
    })
  }





  post(endpoint: string, body: any, reqOpts?: any) {
    return this.httpClient.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.httpClient.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.httpClient.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.httpClient.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
