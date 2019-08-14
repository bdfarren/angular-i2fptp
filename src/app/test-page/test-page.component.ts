import { Component, OnInit } from '@angular/core';

import { CacheService } from '../cache.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor(private cache: CacheService) { }

  ngOnInit() {
    this.cache.register();
  }
}