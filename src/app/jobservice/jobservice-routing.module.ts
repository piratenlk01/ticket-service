import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobserviceComponent } from './jobservice.component'
import { JobserviceListComponent } from './jobservice-list/jobservice-list.component'
import { JobserviceEntryComponent } from './jobservice-entry/jobservice-entry.component'

const routes: Routes = [
    {
        path: '',
        component: JobserviceComponent,
        children: [
            { path: '',component: JobserviceListComponent},
            { path: 'entry',component: JobserviceEntryComponent},
            { path: 'entry/:Id',component: JobserviceEntryComponent}
        ]
    }
        
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobServiceRoutingModule { }
