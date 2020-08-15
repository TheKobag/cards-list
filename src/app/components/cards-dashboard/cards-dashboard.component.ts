import { Component, OnInit } from "@angular/core";
import { Card } from "../../models/element.model";
import { Texts } from "../../../assets/data/text.enum";
import { KeyValue } from "../../models/key-value.model";

@Component({
  selector: "app-cards-dashboard",
  templateUrl: "./cards-dashboard.component.html",
  styleUrls: ["./cards-dashboard.component.scss"]
})
export class CardsDashboardComponent implements OnInit {
  // Vble to store cards data
  cards: Card[];

  // Options for ComboBox
  searchFields: KeyValue[] = [
    { key: "id", value: "ID" },
    { key: "text", value: "Description" }
  ];

  // Vbles to store filter data
  searchText: string;
  searchField: string;

  constructor() {
  }

  ngOnInit() {
    this.cards = this.generateData();
  }

  // Sets data for the filter
  handleFilter(filterParams) {
    this.searchField = filterParams.field;
    this.searchText = filterParams.text;
  }

  // Generates hardcoded data, should call a service and fetch data from an API endpoint
  generateData() {
    const elements = [];
    for (var id = 1; id <= 4000; id++) {
      const card = {
        id: id,
        photo: this.generateImage(id),
        text: this.generateParagraph()
      };
      elements.push(card);
    }
    return elements;
  }

  // Generates image url
  generateImage(id) {
    return "https://picsum.photos/id/" + id + "/500/500.jpg";
  }

  // Generates random paragraphs with 1-10 lines and random content fron an ENUM
  generateParagraph() {
    let text = "";
    for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
      text += Texts[Math.floor(Math.random() * 20)] + ". ";
    }

    return text;
  }
}
