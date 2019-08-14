import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

import { CacheService } from '../cache.service';
import { CacheItem } from '../cache-item';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, OnDestroy {
  private _itemsSubscription: Subscription;
  items: Array<CacheItem>;

  constructor(private cache: CacheService) {
  }

  ngOnInit() {
    this._itemsSubscription = this.cache.items.subscribe(items => {
      this.items = items
    });
  }

  ngOnDestroy() {
    this._itemsSubscription.unsubscribe();
  }
}