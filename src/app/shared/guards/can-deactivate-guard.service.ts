import { Injectable } from '@angular/core';
import { canDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
