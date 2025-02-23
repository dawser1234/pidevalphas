import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8089/pidev/api/users'; // URL de base

  constructor(private http: HttpClient) { }

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
}