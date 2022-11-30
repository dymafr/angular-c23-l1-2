import { Component, NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "my-app",
  template: `
    <mat-slide-toggle>Cliquez !</mat-slide-toggle>
  `
})
export class AppComponent {}

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatSlideToggleModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
