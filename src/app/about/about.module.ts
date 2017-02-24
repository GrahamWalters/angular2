import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section.component';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from '../about-user/about-user.component';
import { UserService } from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutUsersResolve } from './about-users-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
    AboutSectionComponent,
    AboutComponent,
    AboutUserComponent
  ],
  providers: [
    UserService,
    AboutUserResolve,
    AboutUsersResolve
  ]
})
export class AboutModule { }
