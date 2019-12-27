import { RouterModule, Routes } from '@angular/router';

import { NotpageComponent } from './shared/notpage/notpage.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },

    { path: '**', component: NotpageComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
