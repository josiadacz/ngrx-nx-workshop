import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

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
import * as actions from './actions';
>>>>>>> bf5c9ab (m8: Combining selectors)

@Component({
  selector: 'ngrx-nx-workshop-home',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
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
