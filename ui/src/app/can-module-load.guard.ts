import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class CanModuleLoadGuard implements CanLoad {
  constructor(private configService: ConfigService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.path) {
      const canLoad = this.configService.config.modules?.includes(route.path);
      if (canLoad) {
        return true;
      }
      alert('NOT AUTHORIZED');
      return false;
    }
    return false;
  }
}
