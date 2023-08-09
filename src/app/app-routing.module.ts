import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'home'},
  { path:'home', component: TodosComponent},
  { path:'video', component: ReproductorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
