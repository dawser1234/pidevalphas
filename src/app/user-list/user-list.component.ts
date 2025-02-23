import { Component, OnInit } from '@angular/core';
import { UserService } from '../ServiceUser/user.service';
import { User } from '../Model/User.model';
import { PresenceModalComponent } from '../presence-modal/presence-modal.component';
import { UserAdminUpdateComponent } from '../user-admin-update/user-admin-update.component'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit  {
  users: User[] = [];

  constructor(private userService: UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  openPresenceModal(userId: number): void {
    const dialogRef = this.dialog.open(PresenceModalComponent, {
      data: { userId: userId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Logique après l'ajout d'une présence, comme recharger la liste
        console.log('Présence ajoutée avec succès');
        this.loadUsers(); // Rechargez les utilisateurs ou les présences si nécessaire
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data; // Met à jour la liste des utilisateurs
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  /*deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Recharge la liste après suppression
    });
  }*/
    getUsers(): void {
      this.userService.getUsers().subscribe(
          (data) => {
              this.users = data;
          },
          (error) => {
              console.error('Erreur lors de la récupération des utilisateurs', error);
          }
      );
  }
    deleteUser(userId: number | undefined) {
      if (userId !== undefined) {
          this.userService.deleteUser(userId).subscribe(() => {
              this.getUsers(); // Rafraîchir la liste après la suppression
          }, error => {
              console.error('Erreur lors de la suppression de l\'utilisateur', error);
          });
      } else {
          console.error("ID de l'utilisateur non défini");
      }
  }

  openUpdateDialog(user: User): void {
    const dialogRef = this.dialog.open(UserAdminUpdateComponent, {
      width: '400px',
      data: user // Passer l'utilisateur à mettre à jour
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUsers(); // Rafraîchir la liste après mise à jour
    });
  }

}
