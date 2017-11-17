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
            },
            {
                'artist': 'Metallica',
                'music': 'The Unforgiven',
                'duration': '6:12m'
            },
            {
                'artist': 'Judas Priest',
                'music': 'Angel',
                'duration': '4:30m'
            },
            {
                'artist': 'Megadeth',
                'music': 'Trust',
                'duration': '5:30m'
            },
            {
                'artist': 'Megadeth',
                'music': 'Tornado of souls',
                'duration': '6:30m'
            },
            {
                'artist': 'A perfect circle',
                'music': 'Passive',
                'duration': '4:30m'
            },
            {
                'artist': 'Pantera',
                'music': 'Cowboys From Hell',
                'duration': '4:30m'
            },
        ];
    }

}
