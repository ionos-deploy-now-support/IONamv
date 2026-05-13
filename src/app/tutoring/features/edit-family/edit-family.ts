import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Family } from '../../models/family';
import { MemberStore } from '../../stores/member-store';

@Component({
  selector: 'amv-edit-family',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-family.html',
})
export class EditFamily {
  private readonly router = inject(Router);
  private readonly memberStore = inject(MemberStore);
  private readonly route = inject(ActivatedRoute);

  protected readonly family = computed(() =>
    this.memberStore.families().find((f) => f.id === this.route.snapshot.paramMap.get('id')),
  );

  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly nameCtrl = this.fb.control(this.family()?.name || '', Validators.required);

  protected readonly familyForm = this.fb.group({
    name: this.nameCtrl,
  });

  register(): void {
    if (this.familyForm.valid) {
      let current = this.family();
      if (!!current) {
        current = { ...current, name: this.nameCtrl.value };
        this.memberStore.updateFamily(current);
      } else {
        current = new Family(this.nameCtrl.value);
        this.memberStore.addFamily(current);
      }
      this.memberStore.setSelectedFamily(current);
      this.router.navigate(['tutoring', 'family', current.id]);
    }
  }
}
