import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgregarProspectoService } from '../../services/agregar-prospecto/agregar-prospecto.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  listaContactos$: Observable<any>;

  constructor(
      public navCtrl: NavController,
      private aps: AgregarProspectoService ) {

      this.listaContactos$ = this.aps.getContactList() //DB List
                              .snapshotChanges()    // Key and Value
                              .map(
                                  changes => {
                                      return changes.map(c => ({
                                          key : c.payload.key,
                                          ...c.payload.val()
                                      }));
                                  });
  }

}
