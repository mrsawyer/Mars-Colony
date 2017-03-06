import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Colonist, NewColonist } from '../models';
import { COLONISTS_URL } from '../models/API';

interface colonistPostRequest {
    colonist: NewColonist;
}

@Injectable()

export class ColonistAPIService{
    constructor( private http: Http ){}

    getMarsColonists() : Observable<Colonist[]> {
        return this.http.get(COLONISTS_URL)
                        .map((res: Response) => res.json().colonists);
    }

    saveColonist( newColonist : colonistPostRequest ) : Observable<Colonist> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(COLONISTS_URL, newColonist, { headers })
                        .map((res: Response) => res.json().colonist);
    }
}