import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeRegistationService {

    constructor(private readonly httpClient: HttpClient) {

    }

    saveEmployeeDatails(postData: any): Observable<any> {
        return this.httpClient.post<any>('/api/save-employee-details',
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
