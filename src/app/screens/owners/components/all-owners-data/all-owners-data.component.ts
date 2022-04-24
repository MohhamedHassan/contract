import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-owners-data',
  templateUrl: './all-owners-data.component.html',
  styleUrls: ['./all-owners-data.component.scss']
})
export class AllOwnersDataComponent implements OnInit {
 page=4
  constructor() { }

  ngOnInit(): void {
  }

}
