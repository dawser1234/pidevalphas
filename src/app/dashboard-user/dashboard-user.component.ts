import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAdminADDComponent } from '../user-admin-add/user-admin-add.component';
import { UserService } from '../ServiceUser/user.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {
  pendingAttempts: any[] = [];
  constructor(public dialog: MatDialog , private userService: UserService) {}
  ngOnInit(): void {
    this.loadPendingLoginAttempts();
  }

    openDialog(): void {
        const dialogRef = this.dialog.open(UserAdminADDComponent, {
            width: '400px'        
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Le modal a été fermé');
        });
    }
    loadPendingLoginAttempts(): void {
      this.userService.getPendingLoginAttempts().subscribe(
          attempts => {
              this.pendingAttempts = attempts;
          },
          error => {
              console.error('Erreur lors de la récupération des tentatives de connexion :', error);
          }
      );
  }
  
    acceptLogin(email: string): void {
      this.userService.acceptLogin(email).subscribe(() => {
        this.loadPendingLoginAttempts(); // Recharger les tentatives après acceptation
      });
    }
  
    blockLogin(email: string): void {
      this.userService.blockLogin(email).subscribe(() => {
        this.loadPendingLoginAttempts(); // Recharger les tentatives après blocage
      });
    }

}
