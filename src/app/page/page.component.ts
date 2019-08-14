import { Component, OnInit } from '@angular/core';

import { CacheService } from '../cache.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private cache: CacheService) { }

  ngOnInit() {
    this.cache.register();
  }

}