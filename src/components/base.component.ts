import {Injectable} from "@angular/core";
import {ComopnentService} from "./service";

@Injectable()
export class BaseComponent {
  constructor(
    public comopnentService: ComopnentService,
  ) {
  }
}
