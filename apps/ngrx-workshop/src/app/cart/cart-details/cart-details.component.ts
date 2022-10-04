import { Component } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD

import { CartProduct } from '../../model/product';
import { Store } from '@ngrx/store';

=======

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { createSelector, Store } from '@ngrx/store';

import { CartProduct } from '../../model/product';
import { selectCartProducts, selectCartTotal } from '../cart.selectors';
import { CartService } from '../cart.service';
>>>>>>> 52c6685 (m9: View Model)
import * as actions from './actions';
import * as selectors from '../selectors';

export const cartDetailsVm = createSelector(
  selectCartProducts,
  selectCartTotal,
  (products, total) => ({ products, total })
);

@Component({
  selector: 'ngrx-nx-workshop-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent {
<<<<<<< HEAD
  cartDetailsVm$ = this.store.select(selectors.cartDetailsVm);

  constructor(private readonly store: Store) {
=======
  cartDetailsVm$: Observable<{
    products?: CartProduct[];
    total?: number;
  }> = this.store.select(cartDetailsVm);

  constructor(
    private readonly cartService: CartService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
    private readonly store: Store
  ) {
>>>>>>> 52c6685 (m9: View Model)
    this.store.dispatch(actions.pageOpened());
  }

  removeOne(productId: string) {
    this.store.dispatch(actions.removeProductClicked({ productId }));
  }

  removeAll() {
    this.store.dispatch(actions.removeAllProductsClicked());
  }

  purchase(cartProducts: CartProduct[]) {
    this.store.dispatch(actions.purchaseClicked({ cartProducts }));
  }
}
