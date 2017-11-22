import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 	

	nombres: any = [];
	apellidos: any = [];





	//items: Observable<any[]>;
	//nombre: any;
	//mensajeValor: string = '';

  constructor(public navCtrl: NavController,
  	//public db: AngularFireDatabase
  	) {

  	//this.items = db.list('/clasificados').valueChanges();






  		this.nombres = [
  		{
        'nombre': 'Armando',         
      	},
      	{
        'nombre': 'José',         
      	},
      	{
        'nombre': 'Luis',         
      	},
      	{
        'nombre': 'Carlos',         
      	},
      	{
        'nombre': 'Juan',         
      	},
      	{
        'nombre': 'Jorge',         
      	},
      	{
        'nombre': 'Pedro',         
      	},
      	{
        'nombre': 'Jesús',         
      	},
      	{
        'nombre': 'Manuel',         
      	},
      	{
        'nombre': 'Oscar',         
      	},
      	{
        'nombre': 'Miguel',         
      	},
      	{
        'nombre': 'Mauricio',         
      	},
      	{
        'nombre': 'Juan Carlos',         
      	},
      	{
        'nombre': 'Luis Alberto',         
      	},
      	{
        'nombre': 'Carlos Alberto',         
      	},
      	{
        'nombre': 'Luis Eduardo',         
      	},
      	{
        'nombre': 'Luis Fernando',         
      	},
      	{
        'nombre': 'Julio Cesar',         
      	},
      	{
        'nombre': 'Miguel Angel',         
      	},
      	{
        'nombre': 'Luis Carlos',         
      	},
      	{
        'nombre': 'Jose Antonio',         
      	},
      	{
        'nombre': 'Carlos Arturo',         
      	},
      	{
        'nombre': 'Santiago',         
      	},
      	{
        'nombre': 'Sebastian',         
      	},
      	{
        'nombre': 'Alejandro',         
      	},
      	{
        'nombre': 'Nicolás',         
      	},
      	{
        'nombre': 'Samuel',         
      	},
      	{
        'nombre': 'Daniel',         
      	},
      	{
        'nombre': 'Mateo',         
      	},
      	{
        'nombre': 'Alexander',         
      	},
      	{
        'nombre': 'Esteban',         
      	},
      	{
        'nombre': 'David',         
      	},
      	{
        'nombre': 'Simon',         
      	},
      	{
        'nombre': 'Tomas',         
      	},
      	{
        'nombre': 'Felipe',         
      	},
      	{
        'nombre': 'Andrés Felipe',         
      	},
      	{
        'nombre': 'Andrés',         
      	},
      	{
        'nombre': 'Juan Pablo',         
      	},
      	{
        'nombre': 'Juan Esteban',         
      	},
      	{
        'nombre': 'Camilo',         
      	},
      	{
        'nombre': 'Juan Camilo',         
      	},
      	{
        'nombre': 'Juan Diego',         
      	},

     	
	]

		this.apellidos = [
		{
			'apellido': 'Álvarez',
		},
		{
			'apellido': 'Arango',
		},
		{
			'apellido': 'Acevedo',
		},
		{
			'apellido': 'Castro',
		},
		{
			'apellido': 'Rodríguez',
		},
		{
			'apellido': 'García',
		},
		{
			'apellido': 'Gómez',
		},
		{
			'apellido': 'González',
		},
		{
			'apellido': 'Martínez',
		},
		{
			'apellido': 'Montoya',
		},
		{
			'apellido': 'García',
		},
		{
			'apellido': 'López',
		},
		{
			'apellido': 'Hernández',
		},
		{
			'apellido': 'Sánchez',
		},
		{
			'apellido': 'Ramírez',
		},
		{
			'apellido': 'Restrepo',
		},
		{
			'apellido': 'Pérez',
		},
		{
			'apellido': 'Díaz',
		},
		{
			'apellido': 'Muñoz',
		},
		{
			'apellido': 'Rojas',
		},
		{
			'apellido': 'Moreno',
		},
		{
			'apellido': 'Jiménez',
		},
		{
			'apellido': 'Orozco',
		},
		{
			'apellido': 'Velásquez',
		},
		{
			'apellido': 'Zapata',
		},
		{
			'apellido': 'Zuluaga',
		},
		{
			'apellido': 'Zuleta',
		},
		{
			'apellido': 'Obando',
		},
		{
			'apellido': 'Silva',
		},
		{
			'apellido': 'Valencia',
		},

	]

  	};

  	//Despues del constructor

	//addItem(desc: string) {
	//this.items.push({ message: desc});
	//this.mensajeValor = '';
	//console.log(desc);
	//	}


}


