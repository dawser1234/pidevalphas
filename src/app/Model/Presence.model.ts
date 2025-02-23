import { User } from '../Model/User.model';

export interface Presence {
  idP?: number;                // Identifiant de la présence
  dateP: Date;                // Date de la présence
  heureentre: string;         // Heure d'entrée au format string
  heuresortie: string;        // Heure de sortie au format string
  user: User;                 // Utilisateur associé, de type User
}