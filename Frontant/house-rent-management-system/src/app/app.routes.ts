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
import { BuyPackagesComponent } from './page/profile/buy-packages/buy-packages.component';
import { SavedPropertyComponent } from './page/profile/saved-property/saved-property.component';
import { MyPropertyComponent } from './page/profile/my-property/my-property.component';
import { UnlockedPropertyComponent } from './page/profile/unlocked-property/unlocked-property.component';
import { PurchaseHistoryComponent } from './page/profile/purchase-history/purchase-history.component';
import { ChangePasswordComponent } from './page/profile/change-password/change-password.component';

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
    {path: 'buy-package', component: BuyPackagesComponent},
    {path: 'saved-property', component: SavedPropertyComponent},
    {path: 'my-property', component: MyPropertyComponent},
    {path: 'unlocked-property', component: UnlockedPropertyComponent},
    {path: 'purchase-history', component: PurchaseHistoryComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: '**', redirectTo: 'home'}
];
