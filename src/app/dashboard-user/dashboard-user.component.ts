import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAdminADDComponent } from '../user-admin-add/user-admin-add.component';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {
  constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(UserAdminADDComponent, {
            width: '400px' // Ajustez la largeur selon vos besoins
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Le modal a été fermé');
        });
    }

}
