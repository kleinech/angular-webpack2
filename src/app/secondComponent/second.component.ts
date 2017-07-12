import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'example-second',
    templateUrl: 'second.component.html'
})

export class SecondComponent implements OnInit {

    someMoreDynamicText: string;

    ngOnInit() {
        this.someMoreDynamicText = 'Debug me!';
    }
}
