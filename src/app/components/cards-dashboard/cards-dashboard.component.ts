import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsService } from './../../core/services/cards.service';
import { Card } from '../../models/element.model';
import { KeyValue } from '../../models/key-value.model';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.scss']
})
export class CardsDashboardComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  // Vble to store cards data
  cards: Card[];

  // Options for ComboBox
  searchFields: KeyValue[] = [
    { key: 'id', value: 'ID' },
    { key: 'text', value: 'Description' }
  ];

  // Vbles to store filter data
  searchText = '';
  searchField = '';

  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.cardsService.getData().subscribe(
      (cards) => {
        this.cards = cards;
      }
    )
  }

  // Sets data for the filter
  handleFilter(filterParams: any) {
    // this.virtualScroll.scrollToIndex(0);
    this.searchField = filterParams.field;
    this.searchText = filterParams.text;
  }
}
