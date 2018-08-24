import { Component } from '@angular/core';

import {
  AccessibilityConfig,
  Action,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig,
  BreakConfig
} from '@ks89/angular-modal-gallery';
import { LoadingConfig } from '@ks89/angular-modal-gallery/src/model/loading-config.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Festbuch2018';

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '160px' }, { length: 4, wrap: false })
  };


  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '160px' }, { length: 100, wrap: true }, 'flex-start'),
  };

  myDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN
  };

  images: Image[] = [  ];

  constructor() {
    for (let _i = 0; _i < 317; _i++) {

        const imgTemp = new Image(
          _i,
          {
            img: 'http://www.monarch.de/joomla/images/schuetzenjahr/2018/Festbuch/Eustachius_FestBuch_2018_' + (_i + 1) + '.jpg',
            description: ''
          }
        );
        this.images.push(imgTemp);
    }
  }
}
