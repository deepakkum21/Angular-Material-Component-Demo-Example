import { Component } from "@angular/core";

/**
 * @title Basic chips
 */
@Component({
  selector: "chips-overview-example",
  templateUrl: "chips-overview-example.html",
})
export class ChipsOverviewExample {
  isSelected: string;
  public matClick(value: string) {
    if (value === "oneFish") this.isSelected = "one";
    if (value === "twoFish") this.isSelected = "two";
    if (value === "Primary Fish") this.isSelected = "primary";
    if (value === "Accent Fish") this.isSelected = "accent";
    console.log(value);
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
