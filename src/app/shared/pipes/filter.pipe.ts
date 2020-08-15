import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByPropertyAndValue' })
export class FilterByPropertyAndValuePipe implements PipeTransform {
  /**
   * Filters data with provided field and value
   *
   * @param items{any[]} array of items to be filtered
   * @param searchField{string} property of the item to filter with
   * @param searchText{string} value of the filter to apply to the selected property
   * @returns {any[]} array of items filtered by field/value
   */
  transform(items: any[], searchField: string, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      return it[searchField].toString().toLocaleLowerCase().includes(searchText);
    });
  }
}