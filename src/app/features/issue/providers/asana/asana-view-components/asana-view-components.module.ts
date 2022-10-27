import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../../../../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { DialogAsanaInitialSetupComponent } from './asana-initial-setup/dialog-asana-initial-setup.component';

@NgModule({
  imports: [CommonModule, UiModule, FormsModule],
  declarations: [DialogAsanaInitialSetupComponent],
  exports: [],
})
export class AsanaViewComponentsModule {}
