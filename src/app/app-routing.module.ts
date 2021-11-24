import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {FrontComponent} from "./pages/front/front.component";

const routes: Routes = [
  {path: "homepage", component: HomeComponent,
    children: [
      {path:"home",component:FrontComponent},
      {path:"profile",component:ProfileComponent},
      {path:"contact",component:ContactComponent},
      {path: "gallery", component: GalleryComponent},
    ]
  },
  {path: "**", redirectTo: "homepage"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
