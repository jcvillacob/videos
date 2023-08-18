import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'home' },
  { path:'home', component: TodosComponent },
  { path:'video', component: ReproductorComponent },
  { path: 'video/:id', component: ReproductorComponent },
  { path:'pendientes', component: PendientesComponent},
  { path:'upload', component: UploadComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
