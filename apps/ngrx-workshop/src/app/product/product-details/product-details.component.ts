import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

<<<<<<< HEAD
import { Store } from '@ngrx/store';

import * as actions from './actions';
import * as selectors from '../selectors';
import { Rating } from '@ngrx-nx-workshop/api-interfaces';
=======
import { selectCurrentProduct } from '../product.selectors';
import { RatingService } from '../rating.service';
>>>>>>> bf5c9ab (m8: Combining selectors)

import * as actions from './actions';

@Component({
  selector: 'ngrx-nx-workshop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product$ = this.store.select(selectors.getCurrentProduct);

<<<<<<< HEAD
  customerRating$: Observable<number | undefined> = this.store.select(
    selectors.getCurrentProductRating
  );

  constructor(
=======
  product$ = this.store.select(selectCurrentProduct);

  readonly reviewsRefresh$ = new BehaviorSubject<void>(undefined);

  readonly reviews$ = combineLatest([
    this.productId$,
    this.reviewsRefresh$,
  ]).pipe(switchMap(([id]) => this.ratingService.getReviews(id)));

  protected customerRating$ = new BehaviorSubject<number | undefined>(
    undefined
  );

  constructor(
    private readonly router: ActivatedRoute,
    private readonly ratingService: RatingService,
>>>>>>> bf5c9ab (m8: Combining selectors)
    private readonly location: Location,
    private readonly store: Store
  ) {
    this.store.dispatch(actions.productDetailsOpened());
<<<<<<< HEAD
=======

    this.productId$
      .pipe(switchMap((id) => this.ratingService.getRating(id)))
      .subscribe((productRating) =>
        this.customerRating$.next(productRating && productRating.rating)
      );
>>>>>>> bf5c9ab (m8: Combining selectors)
  }

  setRating(id: string, rating: Rating) {
    this.store.dispatch(actions.rateProduct({ productId: id, rating }));
  }

  addToCart(productId: string) {
    this.store.dispatch(actions.addToCart({ productId }));
  }

  back() {
    this.location.back();
  }

  submit(review: { reviewer: string; reviewText: string }) {
    this.productId$
      .pipe(
        take(1),
        concatMap((productId) =>
          this.ratingService.postReview({
            productId,
            ...review,
          })
        )
      )
      .subscribe(() => {
        this.reviewsRefresh$.next();
      });
  }
}
