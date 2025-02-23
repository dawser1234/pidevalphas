/*import { Component } from '@angular/core';
import { UserService } from '../ServiceUser/user.service'; // Assurez-vous que le chemin est correct
import { User,Role } from '../Model/User.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    const newUser: User = {
      emailU: form.value.emailu,
      motdepasseU: form.value.motdepasseu,
      nomU: form.value.nom,
      prenomU: form.value.prenom,
      role: Role.USER, // Exemple de rôle
      salaireU: 0   // Exemple de salaire
    };

    this.userService.addUser(newUser).subscribe(
      response => {
        console.log('Utilisateur ajouté:', response);
        alert('Utilisateur ajouté avec succès !'); // Alerte de succès
        form.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
        alert('Erreur lors de l\'ajout de l\'utilisateur.'); // Alerte d'erreur
      }
    );
  }
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
validatePassword(password: string): boolean {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordPattern.test(password);
}

}*/
import { Component } from '@angular/core';
import { UserService } from '../ServiceUser/user.service'; // Assurez-vous que le chemin est correct
import { User, Role } from '../Model/User.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  errorMessages: string[] = []; // Pour stocker les messages d'erreur

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    this.errorMessages = []; // Réinitialiser les messages d'erreur

    // Vérification des champs
    if (!form.value.prenom) {
      this.errorMessages.push('Le prénom est requis.');
    }

    if (!form.value.nom) {
      this.errorMessages.push('Le nom est requis.');
    }

    if (!form.value.emailu) {
      this.errorMessages.push('L\'email est requis.');
    } else if (!this.validateEmail(form.value.emailu)) {
      this.errorMessages.push('Veuillez entrer un email valide.');
    }

    if (!form.value.motdepasseu) {
      this.errorMessages.push('Le mot de passe est requis.');
    } else if (form.value.motdepasseu.length < 6) {
      this.errorMessages.push('Le mot de passe doit contenir au moins 6 caractères.');
    } else if (!this.validatePassword(form.value.motdepasseu)) {
      this.errorMessages.push('Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre.');
    }

    if (form.value.motdepasseu !== form.value.confirmPassword) {
      this.errorMessages.push('Les mots de passe ne correspondent pas.');
    }

    // Si des erreurs sont présentes, ne pas soumettre
    if (this.errorMessages.length > 0) {
      alert(this.errorMessages.join('\n')); // Afficher les messages d'erreur
      return; // Sortir de la fonction si des erreurs existent
    }

    // Si aucune erreur, créer un nouvel utilisateur
    const newUser: User = {
      emailU: form.value.emailu,
      motdepasseU: form.value.motdepasseu,
      nomU: form.value.nom,
      prenomU: form.value.prenom,
      role: Role.USER, // Exemple de rôle
      salaireU: 0   // Exemple de salaire
    };

    // Appel au service pour ajouter l'utilisateur
    this.userService.addUser(newUser).subscribe(
      response => {
        console.log('Utilisateur ajouté:', response);
        alert('Utilisateur ajouté avec succès !'); // Alerte de succès
        form.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
        alert('Erreur lors de l\'ajout de l\'utilisateur.'); // Alerte d'erreur
      }
    );
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordPattern.test(password);
  }
}