import { Component, OnInit } from '@angular/core';
import { Tablero } from '../../models/tablero';
import { TableroService } from '../../services/tablero-service';

@Component({
  selector: 'app-board',
  imports: [],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board implements OnInit {

  // Databinding a través de esta variable
  public tableros?: Tablero[];

  constructor(private tableroService: TableroService) { }

  ngOnInit(): void {
    this.tableros = this.tableroService.findAll();
  }

}
