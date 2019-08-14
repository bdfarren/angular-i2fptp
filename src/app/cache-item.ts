export class CacheItem {
  id: string;
  url: string;

  get title(): string {
    if (this.url) {
      return this.url;
    }
    return 'unknown';
  }
}