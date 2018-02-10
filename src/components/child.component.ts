import {Component} from "@angular/core";
import {BaseComponent} from "./base.component";

@Component({
  selector: "app-child-component",
  template: `
    <h1>{{ comopnentService.hello() }}11</h1>
  `,
})
export class ChildComponent extends BaseComponent {
}
