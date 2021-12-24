import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignComponent } from './assign.component'
import { AssignListComponent } from './assign-list/assign-list.component'
import { AssignEntryComponent } from './assign-entry/assign-entry.component'

const routes: Routes = [
    {
        path: '',
        component: AssignComponent,
        children: [
            { path: '',component: AssignListComponent},
            { path: 'entry',component: AssignEntryComponent},
            { path: 'entry/:Id',component: AssignEntryComponent}
        ]
    }
        
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRoutingModule { }
