import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipientMember } from '../../models/recipient-member';
import { MemberStore } from '../../stores/member-store';

@Component({
  selector: 'amv-display-family',
  imports: [RouterLink],
  templateUrl: './display-family.html',
})
export class DisplayFamily {
  private readonly memberStore = inject(MemberStore);

  protected readonly family = this.memberStore.selectedFamily;

  public removeFamilyMember(member: RecipientMember) {
    this.memberStore.removeFamilyMember(this.family()!, member);
  }
}
