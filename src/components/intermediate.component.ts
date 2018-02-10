import {BaseComponent} from "./base.component";
import {ComopnentService} from "./service";

export enum TypesEnum {
  One,
  Two,
}

export class IntermediateComponent extends BaseComponent {
  constructor(
    protected type: TypesEnum,
    comopnentService: ComopnentService,
  ) {
    super(comopnentService);
  }
}
