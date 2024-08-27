import { Injectable } from '@angular/core'; // esta viene cuando se crea el servicio
import { HttpClient } from '@angular/common/http' // este se importa desde @angular common y se coloca el http
import { Observable } from 'rxjs'; // esre se importa desde rxjs

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = '';  // colocar la ruta de la api

  constructor(private http: HttpClient) { }  // se coloca dentro del constructor el private http: httpclient


  // logica del login necesitamos usermane y password
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post('${this.apiUrl}/login', loginData)
  }
}


