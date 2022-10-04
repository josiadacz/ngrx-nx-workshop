import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

<<<<<<< HEAD
import { BasicProduct, ProductRating } from '@ngrx-nx-workshop/api-interfaces';
import { Store } from '@ngrx/store';
<<<<<<< HEAD
import { productsOpened } from './actions';

import * as selectors from '../selectors';
import { CallState, LoadingState } from '../../shared/call_state';
import { Dictionary } from '@ngrx/entity';
=======
import { ProductModel } from '../../model/product';
import { selectProducts } from '../product.selectors';
=======
import { Rating } from '@ngrx-nx-workshop/api-interfaces';
import { RatingService } from '../rating.service';

import { createSelector, Store } from '@ngrx/store';
import { LoadingState } from '../../shared/call-state';
import { selectProducts, selectProductsCallState } from '../product.selectors';
>>>>>>> 6006bb3 (m11: Call state)
import * as actions from './actions';
>>>>>>> bf5c9ab (m8: Combining selectors)

const productListVm = createSelector(
  selectProducts,
  selectProductsCallState,
  (products, productsCallState) => ({ products, productsCallState })
);

@Component({
  selector: 'ngrx-nx-workshop-home',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
<<<<<<< HEAD
export class ProductListComponent {
  products$: Observable<BasicProduct[] | undefined> = this.store.select(
    selectors.getProducts
  );
  productsCallState$: Observable<CallState> = this.store.select(
    selectors.getProductsCallState
  );

<<<<<<< HEAD
  // Make LoadingState be available in the template.
  readonly LoadingState = LoadingState;
=======
=======
export class ProductListComponent implements OnInit {
  productListVm$ = this.store.select(productListVm);

  customerRatings$?: Observable<{ [productId: string]: Rating }>;

  // Make LoadingState be available in the template.
  readonly LoadingState = LoadingState;

>>>>>>> 6006bb3 (m11: Call state)
  constructor(
    private readonly store: Store,
    private readonly ratingService: RatingService
  ) {
    this.store.dispatch(actions.productsOpened());
  }
>>>>>>> bf5c9ab (m8: Combining selectors)

  customerRatings$: Observable<Dictionary<ProductRating>> = this.store.select(
    selectors.getRatingsEntities
  );

  constructor(private readonly store: Store) {
    this.store.dispatch(productsOpened());
  }
}
