import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-left-panel',
    templateUrl: './left-panel.component.html',
    styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

    public musics: any = [];

    constructor() {
    }

    ngOnInit() {
        this.musics = [
            {
                'artist': 'The beatles',
                'music': 'Helter Skelter',
                'duration': '3:12 m'
            }
        ];
    }

}
