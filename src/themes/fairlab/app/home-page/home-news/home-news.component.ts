import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Required for | translate pipe

import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';
import { SearchFormComponent } from '../../shared/search-form/search-form.component'; // import search component

@Component({
  selector: 'ds-themed-home-news',
  styleUrls: ['./home-news.component.scss'],
  //styleUrls: ['../../../../../app/home-page/home-news/home-news.component.scss'],
  templateUrl: './home-news.component.html',
  //templateUrl: '../../../../../app/home-page/home-news/home-news.component.html',
    // REGISTER DEPENDENCIES HERE:
  imports: [
    SearchFormComponent, // Allows usage of <ds-themed-search-form>
    TranslateModule,      // Allows usage of the 'translate' pipe
  ],
})
export class HomeNewsComponent extends BaseComponent {
}
