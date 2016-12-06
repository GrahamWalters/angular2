import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent {
    users: User[] = [
        { id: 1, name: 'Tyrion Lannister', username: 'TyrionLannister' },
        { id: 2, name: 'Jon Snow', username: 'JonSnow' },
        { id: 3, name: 'Arya Stark', username: 'AryaStark' }
    ];

    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}
