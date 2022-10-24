import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CART_FEATURE_KEY, reducer } from './reducer';
import { CartEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatSnackBarModule,
    StoreModule.forFeature(CART_FEATURE_KEY, reducer),
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CartModule {}
