// src/app/Model/User.model.ts
import { Presence } from '../Model/Presence.model'; // Assurez-vous que le chemin est correct

export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST',
    RESPONSABLELOG = 'RESPONSABLELOG',
    INSPECTER = 'INSPECTER',
    RH = 'RH',
    PROJECTMANAGER = 'PROJECTMANAGER',
    EMPLOYE = 'EMPLOYE',
    // Ajoutez d'autres rôles si nécessaire
}

export interface User {
    idU?: number;
    nomU: string;
    prenomU: string;
    emailU: string;
    motdepasseU: string;
    salaireU: number;
    role?: Role;
    presences?: Presence[]; // Utilisation de l'énumération pour le rôle
}