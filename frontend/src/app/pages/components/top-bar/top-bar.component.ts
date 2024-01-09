import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  searchQuery = '';

  constructor(private router: Router) {}

  onSearch(): void {
    this.router.navigate(['/search_result'], { queryParams: { query: this.searchQuery } });
  }
}
