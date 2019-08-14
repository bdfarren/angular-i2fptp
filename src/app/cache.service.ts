import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CacheItem } from './cache-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private _cache: Map<string, CacheItem>;
  private _items: Array<CacheItem>;
  //items: BehaviorSubject<Array<CacheItem>>; // A Subject is an Observable that multicasts to multiple subscribers. BehaviorSubject maintains the most recent value.

  constructor(private router: Router) {
    this._cache = new Map<string, CacheItem>();
    this._items = new Array<CacheItem>();
    //this.items = new BehaviorSubject<Array<CacheItem>>(this.getItemsCopy()); 
  }

  register() {
    // Items are cached based on the current Angular route.
     var id = this.router.url.toUpperCase();
    id = id.replace(/\//g, "");
    var item: CacheItem = null;
    if (this._cache.has(id)) {
      item = this._cache.get(id);
    }
    else {
      item = new CacheItem();
      item.id = id;
      item.url = this.router.url;
      this._cache.set(id, item);
      this._items.push(item);
      //this.emitItems();
    }
  }

  /**
   * Get a copy array of the current items in the cache.
   */
//  private getItemsCopy(): Array<CacheItem> {
//    var copy = new Array<CacheItem>();
//    this._items.forEach((item) => {
//      copy.push(item);
//    })
//    return copy;
//  }

  /**
   * Send a copy of the latest items array to the subscribers.
   */
//  private emitItems() {
//    this.items.next(this.getItemsCopy());
//  }

  get items(): Array<CacheItem> {
    return this._items;
  }
}
