import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';


@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a routerLink="/" class="navbar-brand">My HTTP App</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a routerLink="/users">Users</a></li>
                    </ul>
                </div>
            </div>

            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgb(0, 0, 0, 0.2); }
    `]
})

export class AppComponent implements OnInit {
    users: User[];

    constructor(private service: UserService) {}

    ngOnInit() {
        this.service.getUsers()
            .subscribe(users => this.users = users);
    }
}
