import { Component } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-form',
    template: `
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" name="name" required />
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Username" name="username" required />
            </div>

            <button type="submit" class="btn btn-block btn-primary">Create User</button>
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

export class UserFormComponent {}
