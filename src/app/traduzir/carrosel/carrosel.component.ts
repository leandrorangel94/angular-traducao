import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.setDefaultLang('pt');
  }

}
