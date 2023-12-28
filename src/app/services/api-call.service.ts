import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  loginWithGoogle(user: SocialUser) {
    return this.http.post(`http://localhost:9090/auth/google`, user);
  }

  getUsers(token: any) {

    return this.http.get(`http://localhost:9090/users`, {
      headers: { Authorization: "Bearer " + token }
    });

  }
  getProducts(token: any) {

    return this.http.get(`http://localhost:9090/products`, {
      headers: { Authorization: "Bearer " + token }
    });

  }
}
