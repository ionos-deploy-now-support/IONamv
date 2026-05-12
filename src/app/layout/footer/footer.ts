import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { version } from 'packageJson';

@Component({
  selector: 'amv-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly appVersion = signal(version);
}
