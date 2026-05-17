import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MemberStore } from '../stores/member-store';

export const familyMemberResolver: ResolveFn<boolean> = (route) => {
  const id = route.paramMap.get('memberId')!;
  const memberStore = inject(MemberStore);
  const family = memberStore.selectedFamily();
  if (!!family && memberStore.selectedFamilyMember()?.id !== id) {
    memberStore.setSelectedFamilyMember(family.members.find((m) => m.id === id));
  } else if (!family || !id) {
    memberStore.setSelectedFamilyMember(undefined);
  }
  return true;
};
