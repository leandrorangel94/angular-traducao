import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traduzindo-angular';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('pt');
  }

  traduzirSite(language: string): void {
    this.translateService.use(language);
  }


}
