import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private readonly httpClient: HttpClient) {

    }

    sendMessage(postData: any): Observable<any> {
        return this.httpClient.post<any>('/api/post-message',
            postData,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                observe: 'response',
                responseType: 'json'
            });
    }
}
