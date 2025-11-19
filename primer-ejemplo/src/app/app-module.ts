import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {Header} from "../components/header/header";
import {Footer} from '../components/footer/footer';
import {Home} from '../components/home/home';
import {Servicios} from '../components/servicios/servicios';
import {Contacto} from '../components/contacto/contacto';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Servicios,
    Contacto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
