import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.uri + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        localStorage.setItem('auth_token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user)); // Almacena la información del usuario
        console.log('tu token', resp.token);
        this.router.navigate(['ultimos5anos']); // Navega al componente protegido
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']); 
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  public get user(): any {
    return JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit() { }
}
