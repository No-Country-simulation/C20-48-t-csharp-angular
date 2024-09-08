import { Injectable } from '@angular/core'; // esta viene cuando se crea el servicio
import { HttpClient, HttpHeaders } from '@angular/common/http' // este se importa desde @angular common y se coloca el http
import { Observable } from 'rxjs'; // esre se importa desde rxjs
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInVar: boolean = false;
  private apiUrl = "http://localhost:8080";
  private token = localStorage.getItem('accessToken'); // Obtener el token JWT almacenado en localStorage

  constructor(private http: HttpClient) { }  // se coloca dentro del constructor el private http: httpclient


  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  set setIsLoggedInVar(value: boolean) {

    this.isLoggedInVar = value;
  }

  login(email: string, password: string): Observable<any> {

    // const loginData = { username, password };
    // return this.http.post('${this.apiUrl}/login', loginData)
  // }
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  logout(): void {
    this.isLoggedInVar = false;
  }

  //cambio de role
  getUserRole(): string {
    const userRole = localStorage.getItem('userRole');
    return userRole || 'usuario';
  }













  // // logica del login necesitamos usermane y password
  // login(username: string, password: string): Observable<any> {
  //   const loginData = { username, password };
  //   return this.http.post('${this.apiUrl}/login', loginData)
  // }
}


