import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../../../shared/navigation-service';
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
  private readonly navigationService = inject(NavigationService);

  protected readonly family = this.memberStore.selectedFamily;

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
        this.navigationService.back(['tutoring', 'family', current.id]);
      } else {
        current = new Family(this.nameCtrl.value);
        this.memberStore.addFamily(current);
        this.router.navigate(['tutoring', 'family', current.id]);
      }
    }
  }

  cancel() {
    this.navigationService.back(['tutoring', 'family', this.family()?.id ?? 'list']);
  }
}
