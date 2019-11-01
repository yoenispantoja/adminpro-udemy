import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(public settingServices: SettingsService) {}

  ngOnInit() {}

  cambiarColor(tema: string, link: any) {
    this.activarCheck(link);
    this.settingServices.aplicarTema(tema);
  }

  activarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
