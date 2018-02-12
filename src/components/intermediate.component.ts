import { Component, Inject } from '@angular/core';
import {BaseComponent} from "./base.component";
import {ComopnentService} from "./service";

export enum TypesEnum {
  One,
  Two,
}

export class IntermediateComponent extends BaseComponent {
  constructor(
    @Inject(TypesEnum) protected type: TypesEnum,
    @Inject(ComopnentService) comopnentService: ComopnentService
  ) {
    super(comopnentService);
    console.log(type);
  }
}
