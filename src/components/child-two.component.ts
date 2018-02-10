import {Component} from "@angular/core";
import {BaseComponent} from "./base.component";

@Component({
  selector: "app-child-two-component",
  template: `
    <h1>{{ comopnentService.hello() }}11</h1>
  `,
})
export class ChildTwoComponent extends BaseComponent {
}
