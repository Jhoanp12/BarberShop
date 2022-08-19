import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/guard/auth.guard';
import { LocationMapComponent } from './ui/location-map/location-map.component';

const routes: Routes = [
  {
    path: '',
    component: LocationMapComponent,
    canActivate: [AuthGuard],
    data: ['USER', 'ADMIN']
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
