import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PartyComponent } from './party/party.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    FeedbackComponent,
    InquiryComponent,
    GalleryComponent,
    PartyComponent,
    ErrorPageComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MatRadioModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
