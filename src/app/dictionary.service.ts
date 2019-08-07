import {Injectable, NgModule} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'book', meaning: 'sách'},
    {key: 'key', meaning: 'chìa khóa'},
    {key: 'bottle plastic', meaning: 'chai nhựa'},
    {key: 'wall', meaning: 'bức tường'}
  ];

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }

  constructor() {
  }
}

export interface IWord {
  key: string;
  meaning: string;
}

