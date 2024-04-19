import { Routes } from '@angular/router';
import { ViewALLComponent } from './components/view-all/view-all.component';
import { CreateOneComponent } from './components/create-one/create-one.component';
import { UpdateOneComponent } from './components/update-one/update-one.component';
import { DeleteOneComponent } from './components/delete-one/delete-one.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: ViewALLComponent
    },
    {
        path: 'create',
        component: CreateOneComponent
    },
    {
        path: 'update',
        component: UpdateOneComponent
    },
    {
        path: 'delete',
        component: DeleteOneComponent
    }
];
