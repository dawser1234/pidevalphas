/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Presence } from '../Model/Presence.model';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  private apiUrl = 'http://localhost:8089/pidev/api/users';
  constructor(private http: HttpClient) {}

  // Ajouter une présence pour un utilisateur spécifique
  addPresence(userId: number, presence: Presence): Observable<Presence> {
    return this.http.post<Presence>(`${this.apiUrl}/${userId}/presences/add`, presence);
  }

  // Mettre à jour une présence
  updatePresence(id: number, presence: Presence): Observable<Presence> {
    return this.http.put<Presence>(`${this.apiUrl}/update/presences/${id}`, presence);
  }

  // Supprimer une présence
  deletePresence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/presences/delete/${id}`);
  }

  // Obtenir une présence par ID
  getPresenceById(id: number): Observable<Presence> {
    return this.http.get<Presence>(`${this.apiUrl}/presences/get/${id}`);
  }
  getPresencesByUserId(userId: number): Observable<Presence[]> {
    return this.http.get<Presence[]>(`${this.apiUrl}/${userId}/presences`);
  }

  
}*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Presence } from '../Model/Presence.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  private apiUrl = 'http://localhost:8089/pidev/api/users';

  constructor(private http: HttpClient) {}

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

  // Ajouter une présence pour un utilisateur spécifique
  addPresence(userId: number, presence: Presence): Observable<Presence> {
    return this.http.post<Presence>(`${this.apiUrl}/${userId}/presences/add`, presence, { headers: this.createHeaders() });
  }

  // Mettre à jour une présence
  updatePresence(id: number, presence: Presence): Observable<Presence> {
    return this.http.put<Presence>(`${this.apiUrl}/update/presences/${id}`, presence, { headers: this.createHeaders() });
  }

  // Supprimer une présence
  deletePresence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/presences/delete/${id}`, { headers: this.createHeaders() });
  }

  // Obtenir une présence par ID
  getPresenceById(id: number): Observable<Presence> {
    return this.http.get<Presence>(`${this.apiUrl}/presences/get/${id}`, { headers: this.createHeaders() });
  }

  // Obtenir toutes les présences d'un utilisateur par ID
  getPresencesByUserId(userId: number): Observable<Presence[]> {
    return this.http.get<Presence[]>(`${this.apiUrl}/${userId}/presences`, { headers: this.createHeaders() });
  }
}
