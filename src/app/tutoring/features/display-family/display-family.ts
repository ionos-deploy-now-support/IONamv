import { Component, inject, signal } from '@angular/core';
import { MemberStore } from '../../stores/member-store';
import { AddFamilyMember } from '../add-family-member/add-family-member';

@Component({
  selector: 'amv-display-family',
  imports: [AddFamilyMember],
  templateUrl: './display-family.html',
})
export class DisplayFamily {
  private readonly memberStore = inject(MemberStore);

  protected readonly family = this.memberStore.selectedFamily;

  protected readonly addMemberDisplayed = signal(false);

  public showAddMember(toShow: boolean) {
    this.addMemberDisplayed.set(toShow);
  }
}
