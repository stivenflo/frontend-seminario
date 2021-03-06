import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { AppService } from './app.services';
import { TareasComponent } from './views/tareas/tareas.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
