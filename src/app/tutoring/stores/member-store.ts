import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { LocalStorageService } from '../../shared/local-storage-service';
import { Family } from '../models/family';
import { Member } from '../models/member';
import { RecipientMember } from '../models/recipient-member';

@Injectable({
  providedIn: 'root',
})
export class MemberStore {
  private readonly localStorage = inject(LocalStorageService);

  members: WritableSignal<Member[]>;
  families: WritableSignal<Family[]>;

  selectedFamily: WritableSignal<Family | undefined> = signal<Family | undefined>(undefined);

  constructor() {
    this.members = signal<Member[]>(this.localStorage.getItem<Member[]>('members') || []);
    this.families = signal<Family[]>(this.localStorage.getItem<Family[]>('families') || []);

    effect(() => {
      this.localStorage.setItem('members', this.members());
    });

    effect(() => {
      this.localStorage.setItem('families', this.families());
    });
  }

  addFamily(family: Family) {
    this.families.update((families) => [...families, family]);
  }

  updateFamily(family: Family) {
    this.families.update((families) => {
      let index = families.findIndex((f) => f.id === family.id);
      if (index >= 0) {
        families.splice(index, 1, family);
      }
      return [...families];
    });
  }

  addMember(member: Member) {
    this.members.update((members) => [...members, member]);
  }

  updateMember(member: Member) {
    this.members.update((members) => {
      let index = members.findIndex((m) => m.id === member.id);
      if (index >= 0) {
        members.splice(index, 1, member);
      }
      return [...members];
    });
  }

  removeMember(member: Member) {
    this.members.update((members) => {
      let index = members.indexOf(member);
      if (index >= 0) {
        members.splice(index, 1);
      }
      return [...members];
    });
  }

  setSelectedFamily(family: Family | undefined) {
    this.selectedFamily.set(family);
  }

  addMemberToSelectedFamily(member: RecipientMember) {
    const family = this.selectedFamily();
    if (!!family) {
      family?.members.push(member);
      this.updateFamily(family);
      this.setSelectedFamily(family);
    }
  }
}
