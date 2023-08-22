import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { TodosComponent } from './components/todos/todos.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { UploadComponent } from './components/upload/upload.component';
import { PdfsComponent } from './components/pdfs/pdfs.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReproductorComponent,
    TodosComponent,
    PendientesComponent,
    UploadComponent,
    PdfsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
