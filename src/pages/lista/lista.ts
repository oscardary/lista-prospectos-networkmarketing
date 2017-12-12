import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgregarProspectoService } from '../../services/agregar-prospecto/agregar-prospecto.service';
import { Autenticacion } from '../../services/autenticacion/autenticacion.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  listaContactos$: Observable<any>;

  constructor(
      public navCtrl: NavController,
      private aps: AgregarProspectoService,
      private auth: Autenticacion ) {

      this.listaContactos$ = this.aps.getContactList("mnBZK5589qN5PlrTbsB4R1WaV5k1") //DB List
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
