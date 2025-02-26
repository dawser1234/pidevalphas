/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8089/pidev/api/users'; // URL de base

  constructor(private http: HttpClient) { }
  private getToken(): string | null {
    return localStorage.getItem('jwtToken'); // Récupérer le token depuis le stockage local
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAll`); // Endpoint pour récupérer tous les utilisateurs
  }

  getUserById(id: number): Observable<User> { 
    return this.http.get<User>(`${this.baseUrl}/get/${id}`); // Endpoint pour récupérer un utilisateur par ID
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, user); // Endpoint pour ajouter un utilisateur
  }

  updateUser(idU: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update/user/${idU}`, user); // Endpoint pour mettre à jour un utilisateur
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`); // Endpoint pour supprimer un utilisateur
  }
  // Nouvelle méthode pour le login
  login(user: { emailU: string; motdepasseU: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user); // Endpoint pour le login
  }
}*/
/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8089/pidev/api/users'; // URL de base

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer le token JWT
  private getToken(): string | null {
    return localStorage.getItem('jwtToken'); // Récupérer le token depuis le stockage local
  }

  // Méthode pour créer les en-têtes d'autorisation
  private createHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAll`, { headers: this.createHeaders() });
  }
  

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/get/${id}`, { headers: this.createHeaders() }); // Endpoint pour récupérer un utilisateur par ID
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, user, { headers: this.createHeaders() }); // Endpoint pour ajouter un utilisateur
  }

  updateUser(idU: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update/user/${idU}`, user, { headers: this.createHeaders() }); // Endpoint pour mettre à jour un utilisateur
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, { headers: this.createHeaders() }); // Endpoint pour supprimer un utilisateur
  }

  // Nouvelle méthode pour le login
  login(user: { emailU: string; motdepasseU: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user); // Endpoint pour le login
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8089/pidev/api/users'; 

  constructor(private http: HttpClient) { }

  
  private getToken(): string | null {
    return localStorage.getItem('jwtToken'); 
  }

  
  private createHeaders(): HttpHeaders {
    const token = this.getToken();
    console.log('JWT Token:', token);
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAll`, { headers: this.createHeaders() });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/get/${id}`, { headers: this.createHeaders() });
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, user, { headers: this.createHeaders() });
  }

  updateUser(idU: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update/user/${idU}`, user, { headers: this.createHeaders() });
  }

  /*deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, { headers: this.createHeaders() });
  }*/
    deleteUser(userId: number, headers: HttpHeaders): Observable<any> {
      console.log('En-têtes de suppression:', headers);
      return this.http.delete<any>(`${this.baseUrl}/delete/${userId}`, { headers });
  }

  
  login(user: { emailU: string; motdepasseU: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user).pipe(
      tap(response => {
        if (response.token) { 
          localStorage.setItem('jwtToken', response.token); 
        }
      })
    );
  }
  logout(): void {
    localStorage.removeItem('jwtToken'); // Supprime le token du stockage local
    console.log('Utilisateur déconnecté');
  }
  
}