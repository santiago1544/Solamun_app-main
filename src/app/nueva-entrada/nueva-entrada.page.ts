import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.page.html',
  styleUrls: ['./nueva-entrada.page.scss'],
})
export class NuevaEntradaPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
