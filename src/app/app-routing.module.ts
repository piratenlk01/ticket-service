import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path:'ticket', loadChildren: () => import('src/app/ticket/ticket.module').then(m => m.TicketModule) },
    {path:'dashboard',component:DashboardComponent},
    {path:'assign', loadChildren: () => import('src/app/assign/assign.module').then(m => m.AssignModule) },
    {path:'jobservice', loadChildren: () => import('src/app/jobservice/jobservice.module').then(m => m.JobServiceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
