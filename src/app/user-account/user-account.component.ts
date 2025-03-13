import { Component, OnInit } from '@angular/core';
import { UserService } from '../ServiceUser/user.service';
import { User } from '../Model/User.model';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userId = this.getCurrentUserId();
    console.log('ID de l\'utilisateur récupéré:', userId);
  
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        data => {
          this.user = data;
          console.log('Données de l\'utilisateur récupérées:', this.user);
        },
        error => {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur', error);
        }
      );
    } else {
      console.error('Aucun ID d\'utilisateur trouvé.');
    }
  }

  updateUser(): void {
    if (this.user && this.user.idU !== undefined) { // Vérifiez que idU est défini
      this.userService.updateUser(this.user.idU, this.user).subscribe(
        () => {
          alert('Profil mis à jour avec succès!');
        },
        error => {
          console.error('Erreur lors de la mise à jour du profil', error);
        }
      );
    } else {
      console.error('L\'utilisateur n\'est pas défini ou l\'ID est manquant');
    }
  }
  getCurrentUserId(): number | null {
    const token = localStorage.getItem('jwtToken');
    console.log('Token récupéré:', token); // Ajoutez ce log
  
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log('Token décodé:', decoded); // Ajoutez ce log
      return decoded.id; // Vérifiez que 'id' existe dans le token décodé
    }
    
    return null;
  }
}