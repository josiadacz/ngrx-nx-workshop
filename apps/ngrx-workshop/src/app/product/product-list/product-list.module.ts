import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { SpinnerModule } from '../../common/spinner/spinner.module';
import { StarsModule } from '../../common/stars/stars.module';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    StarsModule,
    RouterModule,
    SpinnerModule,
    MatProgressBarModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListModule {}
