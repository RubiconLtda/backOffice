import { Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UnionListComponent } from './components/union-list/union-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component:SideNavComponent,
        children: [
            {path:'home', component: UnionListComponent}
        ]
    },
];
