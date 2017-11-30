import { Component } from '@angular/core';

import { CrearPage } from '../crear/crear';
import { ListaPage } from '../lista/lista';
import { ProfesionesPage } from '../profesiones/profesiones';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfesionesPage;
  tab2Root = CrearPage;
  tab3Root = ListaPage;

  constructor() {

  }
}
