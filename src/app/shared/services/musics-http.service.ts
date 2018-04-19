import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Http, Response} from '@angular/http';
import {Music} from '../model/music.model';

@Injectable()
export class MusicsHttpService {
    constructor(private http: Http) {
    }

    public fetchMusics(): Observable<Array<Music>> {
        return this.http
            .get(environment.apiGateway)
            .map((response: Response) => {
                return response.json() as Array<Music>;
            });
    }

}
