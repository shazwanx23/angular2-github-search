import { Injectable } from '@angular/core';
import { Http, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class GithubService {
	private username: string;
	private client_id = 'a325af071b5e825405b4';
	private client_secret = 'f016d2d97c0b31f3abcd527610f562e5c59b1729';

	constructor(private _http: Http) {
		console.log('Github service Ready ...');
		this.username = 'shazwanx23';
	}

	getUser() {
		return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id+ '&client_secret=' + this.client_secret)
			.map(res => res.json());
	}

	getRepos() {
		return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id+ '&client_secret=' + this.client_secret)
			.map(res => res.json());
	}

	updateUser(username: string) {
		this.username = username;
	}
}