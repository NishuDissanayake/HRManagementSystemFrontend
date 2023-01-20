import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeScreenComponent } from './Components/Screens/home-screen/home-screen.component';
import { EmpLoginScreenComponent } from './Components/Screens/emp-login-screen/emp-login-screen.component';
import { HRLoginScreenComponent } from './Components/Screens/hrlogin-screen/hrlogin-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeScreenComponent,
    EmpLoginScreenComponent,
    HRLoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
