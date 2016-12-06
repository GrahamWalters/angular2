import { Component } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-form',
    template: `
        <form #form="ngForm" >
            <div class="form-group" [ngClass]="{'has-error': name.invalid && name.touched}">
                <input type="text" class="form-control" placeholder="Name" name="name" required
                [(ngModel)]="newUser.name" #name="ngModel" />

                <span class="help-block" *ngIf="name.invalid && name.touched">Name is required.</span>
            </div>

            <div class="form-group" [ngClass]="{'has-error': username.invalid && username.touched}">
                <input type="text" class="form-control" placeholder="Username" name="username" required
                [(ngModel)]="newUser.username" #username="ngModel" />

                <span class="help-block" *ngIf="username.invalid && username.touched">Username is required.</span>
            </div>

            <button type="submit" class="btn btn-block btn-primary"
            [disabled]="form.invalid">Create User</button>
        </form>
    `,
    styles: [`
        form {
            padding: 10px;
            background: #ECF0F1;
            border-radius: 3px;
        }
    `]
})

export class UserFormComponent {
    newUser: User = new User();
}
