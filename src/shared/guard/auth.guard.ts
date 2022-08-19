import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

interface StringArray {
  [index: number]: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * NOTE: on this video are two example for activate, and for deActivate
   * this was implementes on app-routing.module.ts, and user.routing.module.ts
   * @link https://www.youtube.com/watch?v=6umBWrG2uqY&ab_channel=Saikat
   */

  user = {
    role: 'USER'
  };
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(state);

    const dataFromRoute = route.data;
    if (this.roleHaveAccess(dataFromRoute, this.user.role)) {
      return true;
    } else {
      return false;
    }
  }

  roleHaveAccess(routeData: StringArray, actualUserRole: string): boolean {
    if (
      routeData[0] === actualUserRole ||
      routeData[1] === actualUserRole ||
      routeData[2] === actualUserRole
    ) {
      return true;
    } else {
      return false;
    }
  }
}
