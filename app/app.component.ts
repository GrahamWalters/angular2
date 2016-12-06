import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">My Angular 2 App!</a>
                </div>
            </nav>
        </header>

        <main>
            <div class="row">
                <div class="col-sm-4">
                    <ul class="list-group users-group">
                        <li class="list-group-item" *ngFor="let user of users">
                            {{ user.name }} ({{ user.username }})
                        </li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <div class="jumbotron">
                        <h1>Welcome to Our App!</h1>
                    </div>
                </div>
            </div>
        </main>

        <footer class="text-center">
            Copyright &copy; 2016
        </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgb(0, 0, 0, 0.2); }
    `]
})

export class AppComponent {
    message = 'Hello';
    users = [
        { id: 1, name: 'Tyrion Lannister', username: 'TyrionLannister' },
        { id: 2, name: 'Jon Snow', username: 'JonSnow' },
        { id: 3, name: 'Arya Stark', username: 'AryaStark' }
    ];
}
