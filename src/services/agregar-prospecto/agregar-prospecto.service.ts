import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

//import { CrearPage } from '../../pages/crear/crear';


@Injectable()

export class AgregarProspectoService {
    //Validar tipos de datos con el item.module.ts
    private apListRef = this.afd.list('usuarios/mauroarangoc');

    constructor(
        private afd:AngularFireDatabase ) {
		// code...
	}

    getContactList () {
        return this.apListRef;
    }

    addContactToList (nuevoProspecto) {
        return this.apListRef.push(nuevoProspecto);
    }
}
