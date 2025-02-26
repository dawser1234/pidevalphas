import { Component } from '@angular/core';
import { UserService } from '../ServiceUser/user.service'; // Importez le service
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailU: string = ''; // Champ pour l'email
  motdepasseU: string = ''; // Champ pour le mot de passe

  constructor(private userService: UserService, private router: Router) { }

  // Méthode pour gérer la connexion
  /*login(): void {
    const user = { emailU: this.emailU, motdepasseU: this.motdepasseU };
    
    this.userService.login(user).subscribe(
      response => {
        console.log('Login successful', response);
        // Stockez le token ou l'information nécessaire
        localStorage.setItem('token', response.token); // Assurez-vous que le backend retourne un token
        this.router.navigate(['/home']); // Redirigez vers la page d'accueil
      },
      error => {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    );
  }*/
    /*login(): void {
      const user = { emailU: this.emailU, motdepasseU: this.motdepasseU };
  
      this.userService.login(user).subscribe(
          response => {
              console.log('Login successful', response);
              // Stockez le token ou l'information nécessaire
              localStorage.setItem('jwtToken', response.token); // Assurez-vous que le backend retourne un token
              this.router.navigate(['/home']); // Redirigez vers la page d'accueil
          },
          error => {
              console.error('Login failed', error);
              alert('Invalid credentials');
          }
      );
  }*/
      login(): void {
        const user = { emailU: this.emailU, motdepasseU: this.motdepasseU };
      
        this.userService.login(user).subscribe(
          response => {
            console.log('Réponse du backend:', response); // Log de la réponse
            if (response.token) {
              localStorage.setItem('jwtToken', response.token);
              console.log("✅ Token stocké:", localStorage.getItem('jwtToken')); // Vérifier le stockage
              this.router.navigate(['/home']); // Redirection après connexion
            } else {
              console.error("❌ Aucun token reçu !");
            }
          },
          error => {
            console.error('❌ Login failed', error);
            alert('Invalid credentials');
          }
        );
      }
      

}
