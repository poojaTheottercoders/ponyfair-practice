import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {GalleryComponent} from './gallery/gallery.component';
import {InquiryComponent} from './inquiry/inquiry.component';
import {PartyComponent} from './party/party.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'inquiry',
    component: InquiryComponent
  },
  {
    path: 'party',
    component: PartyComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
