import {Inject} from '@angular/core';
import {IntermediateComponent, TypesEnum} from "./intermediate.component";

import {Component} from "@angular/core";
import {ComopnentService} from "./service";

@Component({
  selector: "app-child-one-component",
  template: `
    <h1>Hello1</h1>
  `,
})
export class ChildOneComponent extends IntermediateComponent {
  get type() {
    return TypesEnum.One;
  }
  constructor(
    comopnentService: ComopnentService,
  ) {
    super(TypesEnum.One, comopnentService);
  }
}
