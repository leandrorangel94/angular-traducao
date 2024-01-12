import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.setDefaultLang('pt');
  }

}
