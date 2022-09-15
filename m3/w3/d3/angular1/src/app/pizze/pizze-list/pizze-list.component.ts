import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizze-list',
  templateUrl: './pizze-list.component.html',
  styleUrls: ['./pizze-list.component.scss']
})
export class PizzeListComponent implements OnInit {

  constructor() { }

  pizze: string[] = [
    "Margherita",
    "diavola",
    "capricciosa"
  ]

  ngOnInit(): void {
  }

}
