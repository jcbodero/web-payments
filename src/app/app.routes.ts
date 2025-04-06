import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListPersonsComponent } from './list-persons//list-persons.component';
export const routes: Routes = [
    { path: '', component: FormularioComponent },
    { path: 'personas', component: ListPersonsComponent }
];

