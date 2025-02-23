import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Nécessaire pour ngModel
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { RHComponent } from './rh/rh.component';
import { FinanceComponent } from './finance/finance.component';
import { InspectionComponent } from './inspection/inspection.component';
import { MatDialogModule } from '@angular/material/dialog'; // Assurez-vous d'importer cela

import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ServiceComponent } from './service/service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackMenuAdminComponent } from './back-menu-admin/back-menu-admin.component';
import { BackHeaderComponent } from './back-header/back-header.component';
import { UserListComponent } from '../app/user-list/user-list.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { UserAdminADDComponent } from './user-admin-add/user-admin-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAdminUpdateComponent } from './user-admin-update/user-admin-update.component';
import { PresenceModalComponent } from './presence-modal/presence-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent,
    LogistiqueComponent,
    RHComponent,
    FinanceComponent,
    InspectionComponent,
 
    ContactComponent,
      InscriptionComponent,
      ServiceComponent,
      DashboardComponent,
      BackMenuAdminComponent,
      BackHeaderComponent,
      UserListComponent,
      DashboardUserComponent,
      UserAdminADDComponent,
      UserAdminUpdateComponent,
      PresenceModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
