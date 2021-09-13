import { Routes } from "@angular/router";

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ExistingComponent } from '../existing/existing.component';

export const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "existing", component: ExistingComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];