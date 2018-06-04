import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    apiUrl = environment.apiUrl;

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get(this.apiUrl+'/rest/userservice/getUserBasedID/' + id);
    }

    create(user: User) {
        return this.http.post(this.apiUrl+'/rest/userservice/create', user);
    }

    update(user: User) {
        return this.http.put(this.apiUrl+'/rest/userservice/update' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl+'/rest/userservice/delete' + id);
    }
}