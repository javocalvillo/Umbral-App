import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home/home.component';
import { FormuEntidadComponent } from './cnt/caratula/formu-entidad/formu-entidad.component';
import { InformacionGeneralComponent } from './cnt/caratula/informacion-general/informacion-general.component';
import { AvanceObraComponent } from './cnt/caratula/avance-obra/avance-obra.component';
import { TerrenoComponent } from './cnt/caratula/terreno/terreno.component';
import { EmplazamientoComponent } from './cnt/caratula/emplazamiento/emplazamiento.component';
import { IasistenciaTecnicaComponent } from './cnt/caratula/iasistencia-tecnica/iasistencia-tecnica.component';
import { HabilitacionExcepComponent } from './cnt/caratula/habilitacion-excep/habilitacion-excep.component';
import { ViviendaComponent } from './cnt/caratula/vivienda/vivienda.component';
import { TerrnoAccionesComponent } from './cnt/caratula/terrno-acciones/terrno-acciones.component';
import { ExencionesComponent } from './cnt/viviendaPanel/exenciones/exenciones.component';
import { DatosGeneralesComponent } from './cnt/viviendaPanel/datos-generales/datos-generales.component';
import { DatosTipoComponent } from './cnt/viviendaPanel/datos-tipo/datos-tipo.component';
import { DetalleViviendaComponent } from './cnt/viviendaPanel/detalle-vivienda/detalle-vivienda.component';
import { EstandarArquitectonicoComponent } from './cnt/viviendaPanel/estandar-arquitectonico/estandar-arquitectonico.component';
import { IngresoViviendaComponent } from './cnt/viviendaPanel/ingreso-vivienda/ingreso-vivienda.component';
import { TipoVieviendaComponent } from './cnt/viviendaPanel/tipo-vievienda/tipo-vievienda.component';
import { PanelVDComponent } from './cnt/viviendaPanel/panel-vd/panel-vd.component';
import { FinanciamientoComponent } from './cnt/viviendaPanel/financiamiento/financiamiento.component';
import { SubsidioComponent } from './cnt/viviendaPanel/subsidio/subsidio.component';
import { AportesAdicionalesComponent } from './cnt/viviendaPanel/aportes-adicionales/aportes-adicionales.component';
import { CntComponent } from './cnt/caratula/cnt/cnt.component';
import { Familia1Component } from './cnt/listado/familia1/familia1.component';
import { DatosInteresadoComponent } from './cnt//listado/datosInteresadoFPS/datos-interesado/datos-interesado.component';
import { DatosConyugeConvivienteComponent } from './cnt/listado/datosInteresadoFPS/datos-conyuge-conviviente/datos-conyuge-conviviente.component';
import { InformacionContactoComponent } from './cnt/listado/datosInteresadoFPS/informacion-contacto/informacion-contacto.component';
import { GrupoFamiliarComponent } from './cnt/listado/datosInteresadoFPS/grupo-familiar/grupo-familiar.component';
import { VulnerabilidadComponent } from './cnt/listado/datosInteresadoFPS/vulnerabilidad/vulnerabilidad.component';
import { ObservacionesComponent } from './cnt//listado/datosInteresadoFPS/observaciones/observaciones.component';
import { PropiedadesNucleoFamiliarComponent } from './cnt/listado/propiedades/propiedades-nucleo-familiar/propiedades-nucleo-familiar.component';
import { TipoViviendaComponent } from './cnt/listado/postulacionAhorro/tipo-vivienda/tipo-vivienda.component';
import { AhorroComponent } from './cnt/listado/postulacionAhorro/ahorro/ahorro.component';
import { ExencionResolusionComponent } from './cnt/listado/postulacionAhorro/exencion-resolusion/exencion-resolusion.component';
import { InformacionPostulacionComponent } from './cnt/listado/postulacionAhorro/informacion-postulacion/informacion-postulacion.component';
import { UnipersonalidadComponent } from './cnt/listado/postulacionAhorro/unipersonalidad/unipersonalidad.component';
import { TipoPostulacionComponent } from './cnt/listado/postulacionAhorro/tipo-postulacion/tipo-postulacion.component';
import { PropiedadesComponent } from './cnt/listado/propiedades/propiedades/propiedades.component';
import { PostulacionAhorroComponent } from './cnt/listado/postulacionAhorro/postulacion-ahorro/postulacion-ahorro.component';
import { ModalComponent } from './cnt/listado/postulacionAhorro/modal/modal.component';
import { ModalViviendaComponent } from './cnt/listado/postulacionAhorro/modal-vivienda/modal-vivienda.component';
import { FamiliaComponent } from './cnt/familia/familia/familia.component';
import { GeneralComponent } from './cnt/familia/general/general.component';
import { EvaluacionComponent } from './cnt/caratula/evaluacion/evaluacion.component';





@NgModule({
    declarations: [
    	HomeComponent,
    	FormuEntidadComponent,
    	InformacionGeneralComponent,
    	AvanceObraComponent,
    	TerrenoComponent,
    	EmplazamientoComponent,
    	IasistenciaTecnicaComponent,
    	HabilitacionExcepComponent,
    	ViviendaComponent,
    	TerrnoAccionesComponent,
    	ExencionesComponent,
    	DatosGeneralesComponent,
    	DatosTipoComponent,
    	DetalleViviendaComponent,
    	EstandarArquitectonicoComponent,
    	IngresoViviendaComponent,
    	TipoVieviendaComponent,
    	PanelVDComponent,
    	FinanciamientoComponent,
    	SubsidioComponent,
    	AportesAdicionalesComponent,
    	CntComponent,
    	Familia1Component,
    	DatosInteresadoComponent,
    	DatosConyugeConvivienteComponent,
    	InformacionContactoComponent,
    	GrupoFamiliarComponent,
    	VulnerabilidadComponent,
    	ObservacionesComponent,
    	PropiedadesNucleoFamiliarComponent,
    	TipoViviendaComponent,
    	AhorroComponent,
    	ExencionResolusionComponent,
    	InformacionPostulacionComponent,
    	UnipersonalidadComponent,
    	TipoPostulacionComponent,
    	PropiedadesComponent,
    	PostulacionAhorroComponent,
    	ModalComponent,
    	ModalViviendaComponent,
    	FamiliaComponent,
    	GeneralComponent,
    	EvaluacionComponent
    ],
    exports: [
      
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        RouterModule

    ]
})
export class PagesModule { }