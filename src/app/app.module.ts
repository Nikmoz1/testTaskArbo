import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { InputComponent } from './shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './shared/button/button.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Authenticated } from './services/guard';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    InputComponent,
    ButtonComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [Authenticated],
  bootstrap: [AppComponent],
})
export class AppModule {}
