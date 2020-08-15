// Angular Core
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Angular Material
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

// Components
import { CardComponent } from "./components/card/card.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { InputSelectComponent } from "./components/input-select/input-select.component";
import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";

// Pipes
import { FilterByPropertyAndValuePipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [
    CardComponent,
    InputTextComponent,
    InputSelectComponent,
    FilterBarComponent,
    FilterByPropertyAndValuePipe
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    CardComponent,
    InputTextComponent,
    InputSelectComponent,
    FilterBarComponent,
    FilterByPropertyAndValuePipe
  ]
})
export class SharedModule {}
