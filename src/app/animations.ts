import { animate, group, query, style, transition, trigger } from '@angular/animations';

const animation = '0.5s ease-in-out';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('NewsDetailComponent => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate(animation,
            style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate(animation,
            style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ]),
    ]),
    transition('NewsComponent => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate(animation,
            style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate(animation,
            style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ]),
    ]),
  ]);
