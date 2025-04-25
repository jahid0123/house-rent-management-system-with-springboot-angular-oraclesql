import { Routes } from '@angular/router';
import { HeaderComponent } from './page/section/header/header.component';
import { FooterComponent } from './page/section/footer/footer.component';
import { LoginComponent } from './page/form/login/login.component';
import { SingupComponent } from './page/form/singup/singup.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { AddPropertyComponent } from './page/form/add-property/add-property.component';
import { ViewDetailsComponent } from './page/view/view-details/view-details.component';
import { ContactUsComponent } from './page/section/footer-content/contact-us/contact-us.component';
import { AboutUsComponent } from './page/section/footer-content/about-us/about-us.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SingupComponent},
    {path: 'about', component: AboutComponent},
    {path: 'add-property', component: AddPropertyComponent},
    {path: 'view-details', component: ViewDetailsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: '**', redirectTo: 'home'}
];
