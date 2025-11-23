import {Component, OnInit} from '@angular/core';
import {Service} from '../../models/service';

@Component({
  selector: 'app-servicios',
  standalone: false,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios implements OnInit {

  public servicios: Service[] = [];

  ngOnInit(): void {

    let servicio: Service = new Service("Paquete Básico", "€49 / mes", "Acceso limitado a recursos \nSoporte por email \n1 proyecto incluido");
    this.servicios.push(servicio);

  }

}
