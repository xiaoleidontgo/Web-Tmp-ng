import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
class AppServices {
    constructor(private httpClient: HttpClient) { }

    get(url: string, params: HttpParams) {
        // const params = new HttpParams()
        //     .append('page', '')
        //     .append('results', '');
        return this.httpClient.get(`${url}`, {
            params: params
        });
    }

}
