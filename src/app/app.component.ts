import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
      // slideInAnimation
    ]
})
export class AppComponent {
    public title = 'News';
    public article = false;

    constructor(router: Router) {
        router.events.subscribe(() => {
            if (router.url.startsWith('/article')) {
                this.article = true;
            } else {
                this.article = false;
            }
        });
    }

    public prepareRoute(outlet: RouterOutlet): any {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }

    public goBack(): void {
        window.history.back();
    }
}
