import { Injectable } from '@angular/core';
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

  
}
