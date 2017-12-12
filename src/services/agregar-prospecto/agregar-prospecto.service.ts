import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()

export class AgregarProspectoService {
    //Validar tipos de datos con el item.module.ts
    private apListRef = this.afd.list('/listaprospectos/',
        ref => ref.orderByChild('uid').equalTo("mnBZK5589qN5PlrTbsB4R1WaV5k1") );

    constructor(
        private afd:AngularFireDatabase ) {
		// code...
	}

    getContactList (sUserID) {
        //return this.apListRef;
        return this.afd.list('/listaprospectos/',
            ref => ref.orderByChild('uid').equalTo(sUserID) );
    }

    addContactToList (nuevoProspecto) {
        //return this.apListRef.push(nuevoProspecto);
        return this.afd.list('/listaprospectos/').push(nuevoProspecto);
    }
}
