import { Component } from '@angular/core';

import { CrearPage } from '../crear/crear';
import { ListaPage } from '../lista/lista';
import { ProfesionesPage } from '../profesiones/profesiones';
//import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
  //templateUrl: 'login.html'
})
export class TabsPage {

  //tab0Root = LoginPage;
  tab1Root = ProfesionesPage;
  tab2Root = CrearPage;
  tab3Root = ListaPage;

  constructor() {

  }
}
