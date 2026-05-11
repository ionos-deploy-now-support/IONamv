import * as uuid from 'uuid';
import { Address } from './address';
import { Family } from './family';

export class Member {
  public id: string;

  constructor(
    public type: 'RECIPIENT' | 'TUTOR' | 'VOLUNTEER',
    public firstName: string,
    public lastName: string,
    public family: Family,
    public address: Address | undefined,
    public phoneNumbers: string[],
    public email: string | undefined,
    public languages: string[],
  ) {
    this.id = uuid.v4();
  }
}
