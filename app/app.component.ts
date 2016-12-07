import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';


@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>Welcome to Our App!</h1>
        </div>

        <div *ngIf="users">
            <div *ngFor="let user of users">
                <h2>{{ user.first_name }}</h2>
            </div>
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
