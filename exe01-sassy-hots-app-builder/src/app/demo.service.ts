import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    getHeroez() {
        return this.http.get('https://hotsapi.net/api/v1/heroes');
    }
}
