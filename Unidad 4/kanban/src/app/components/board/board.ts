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

  public tableros: Tablero[] = [];

  constructor(private tableroService: TableroService) { }

  ngOnInit(): void {
    this.tableroService.getTableros().subscribe(data => {
      this.tableros = data;
    });
  }

}
