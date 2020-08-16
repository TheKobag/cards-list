import { Component, OnInit, ViewChild } from "@angular/core";
import { Card } from "../../models/element.model";
import { Texts } from "../../../assets/data/text.enum";
import { KeyValue } from "../../models/key-value.model";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: "app-cards-dashboard",
  templateUrl: "./cards-dashboard.component.html",
  styleUrls: ["./cards-dashboard.component.scss"]
})
export class CardsDashboardComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  // Vble to store cards data
  cards: Card[];

  // Options for ComboBox
  searchFields: KeyValue[] = [
    { key: "id", value: "ID" },
    { key: "text", value: "Description" }
  ];

  // Vbles to store filter data
  searchText: string = '';
  searchField: string = '';

  constructor() {
  }

  ngOnInit() {
    this.cards = this._generateData();
  }

  // Sets data for the filter
  handleFilter(filterParams: any) {
    // this.virtualScroll.scrollToIndex(0);
    this.searchField = filterParams.field;
    this.searchText = filterParams.text;
  }

  // Generates hardcoded data, should call a service and fetch data from an API endpoint
  private _generateData() {
    const elements = [];
    for (var id = 1; id <= 4000; id++) {
      const card = {
        id: id,
        photoUrl: this._generateImage(id),
        text: this._generateParagraph()
      };
      elements.push(card);
    }
    return elements;
  }

  // Generates image url
  private _generateImage(id) {
    return "https://picsum.photos/id/" + id + "/500/500.jpg";
  }

  // Generates random paragraphs with 1-10 lines and random content fron an ENUM
  private _generateParagraph() {
    let text = "";
    for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
      text += Texts[Math.floor(Math.random() * 20)] + ". ";
    }

    return text;
  }
}
