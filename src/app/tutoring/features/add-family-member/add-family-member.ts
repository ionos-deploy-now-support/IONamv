import { Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipientMember } from '../../models/recipient-member';
import { MemberStore } from '../../stores/member-store';

@Component({
  selector: 'amv-add-family-member',
  imports: [ReactiveFormsModule],
  templateUrl: './add-family-member.html',
})
export class AddFamilyMember {
  readonly close = output<void>();

  private readonly memberStore = inject(MemberStore);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly family = this.memberStore.selectedFamily;

  protected readonly firstNameCtrl = this.fb.control('', Validators.required);
  protected readonly lastNameCtrl = this.fb.control(this.family()?.name || '', Validators.required);
  protected readonly emailCtrl = this.fb.control(undefined, Validators.email);

  protected readonly memberForm = this.fb.group({
    firstName: this.firstNameCtrl,
    lastName: this.lastNameCtrl,
    email: this.emailCtrl,
  });

  register(): void {
    if (this.memberForm.valid) {
      this.memberStore.addMemberToSelectedFamily(
        new RecipientMember(
          true,
          this.firstNameCtrl.value,
          this.lastNameCtrl.value,
          [],
          this.emailCtrl.value,
          [],
          undefined,
        ),
      );

      this.close.emit();
    }
  }

  cancel() {
    this.close.emit();
  }
}
