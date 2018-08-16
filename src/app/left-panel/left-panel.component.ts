import {Component, OnInit} from '@angular/core';
import {MusicsHttpService} from '../shared/services/musics-http.service';
import {Music} from '../shared/model/music.model';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-left-panel',
    templateUrl: './left-panel.component.html',
    styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

    public musics: Array<Music>;

    constructor(private musicsHttpService: MusicsHttpService) {
    }

    ngOnInit() {
        this.musicsHttpService
            .fetchMusics()
            .subscribe((musics: Array<Music>) => {
                this.musics = musics;
            });
    }

}
