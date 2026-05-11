import * as uuid from 'uuid';

export class Family {
  public id: string;

  constructor(public name: string) {
    this.id = uuid.v4();
  }
}
