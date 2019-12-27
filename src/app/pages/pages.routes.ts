import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component'; 
import { HomeComponent } from './home/home/home.component';
import { CntComponent } from './cnt/caratula/cnt/cnt.component';
 
import { TerrnoAccionesComponent } from './cnt/caratula/terrno-acciones/terrno-acciones.component';
import { DetalleViviendaComponent } from './cnt/viviendaPanel/detalle-vivienda/detalle-vivienda.component';
import { PanelVDComponent } from './cnt/viviendaPanel/panel-vd/panel-vd.component';


import { FamiliaComponent } from './cnt/familia/familia/familia.component';
import { Familia1Component } from './cnt/listado/familia1/familia1.component';
import { PropiedadesComponent } from './cnt/listado/propiedades/propiedades/propiedades.component';
import { PostulacionAhorroComponent } from './cnt/listado/postulacionAhorro/postulacion-ahorro/postulacion-ahorro.component';


 


const pagesRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'cnt', component: CntComponent },
    { path: 'terreno', component: TerrnoAccionesComponent },
    { path: 'detalle-vivienda', component: DetalleViviendaComponent },
    { path: 'vivienda-panel', component: PanelVDComponent },
    { path: 'familia', component: FamiliaComponent },
    { path: 'familia1', component: Familia1Component },
    { path: 'propiedades', component: PropiedadesComponent },
    { path: 'postulacion', component: PostulacionAhorroComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
