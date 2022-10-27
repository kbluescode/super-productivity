import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { T } from 'src/app/t.const';
import { DEFAULT_ASANA_CFG, ASANA_CONFIG_FORM } from '../../asana.const';
import { AsanaCfg } from '../../asana.model';

@Component({
  selector: 'dialog-asana-initial-setup',
  templateUrl: './dialog-asana-initial-setup.component.html',
  styleUrls: ['./dialog-asana-initial-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAsanaInitialSetupComponent {
  T: typeof T = T;
  asanaCfg: AsanaCfg;
  formGroup: FormGroup = new FormGroup({});
  formConfig: FormlyFieldConfig[] = ASANA_CONFIG_FORM;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _matDialogRed: MatDialogRef<DialogAsanaInitialSetupComponent>,
  ) {
    this.asanaCfg = this.data.asanaCfg || DEFAULT_ASANA_CFG;
  }

  saveAsanaCfg(asanaCfg: AsanaCfg): void {
    this._matDialogRed.close(asanaCfg);
  }

  close(): void {
    this._matDialogRed.close();
  }
}
