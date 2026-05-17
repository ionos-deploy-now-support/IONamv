import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Family } from '../../models/family';
import { MemberStore } from '../../stores/member-store';

@Component({
  selector: 'amv-family-list',
  imports: [RouterLink],
  templateUrl: './family-list.html',
})
export class FamilyList {
  private readonly router = inject(Router);

  protected readonly memberStore = inject(MemberStore);

  protected readonly families = this.memberStore.families;

  public displayFamily(family: Family) {
    this.router.navigate(['tutoring', 'family', family.id]);
  }
}
