import { Component, OnInit } from '@angular/core';

/**
 * Example class which can be debugged using the setup described in the README.md
 */
@Component({
    /*
     the moduleÌd is not needed when using webpack -> delete it in new components.
     */
    selector: 'example-app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    /**
     * The greeting to show the guest visiting the website.
     */
    greeting: string;
    /**
     * Shows or hides the embedded {@link SecondComponent} component.
     * @type {boolean}
     */
    showMore = false;

    /**
     * overrides the ngOnInit method of the OnInit interface provided by angular.
     */
    ngOnInit() {
        this.greeting = 'App works!';
    }

    /**
     * Event handler for the click on the 'click-me' button.
     *
     * @param event The event which is fired when clicking the button.
     */
    onClick(event: Event) {
        console.log(event);
        this.greeting = 'Hello guest!';
        this.showMore = true;
    }

}
