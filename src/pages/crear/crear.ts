import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html'
})
export class CrearPage {

 	

	nombres: any = [];
	apellidos: any = [];
  profesiones: any = [];


  
  nuevoProspecto = {
    nombre: '',
    apellido: '',
    profesion: '',
    telefono:'',
  }

	//items: Observable<any[]>;
	//nombre: any;
	//mensajeValor: string = '';

  constructor(public navCtrl: NavController,
  	//public db: AngularFireDatabase
  	) {

  	//this.items = db.list('/lista').valueChanges();






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


    this.profesiones = [
    {
        'profesion': 'Maneja Uber',
        'icon': 'car',
        'description': 'Alguien que sepas que maneje Uber, o tenga algo que ver con Uber',
      
      },
      {
        'profesion': 'Analiza Datos',
        'icon': 'analytics',
        'description': 'Analice Datos en una Empresa',
       
      },
      {
        'profesion': 'Disfruta Picnic',
        'icon': 'basket',
        'description': 'Alguien que recuerdes en un picnic',
        
      },
      {
        'profesion': 'Toma Cerveza',
        'icon': 'beer',
        'description': 'Alguien que recuerdes tomando mucha cerveza',
        
      },
      {
        'profesion': 'Monta Bicicleta',
        'icon': 'bicycle',
        'description': 'Vaya a la ciclovia o monte mucho e bicicleta',
        
      },
      {
        'profesion': 'Lee Libros',
        'icon': 'book',
        'description': 'Alguien a quien le guste leer mucho',
        
      },
      {
        'profesion': 'Maquilladora Profesional',
        'icon': 'brush',
        'description': 'Le Guste maquillar por profesion o hobby',
       
      },
      {
        'profesion': 'Sabe Mecanica',
        'icon': 'build',
        'description': 'Que sepa mecanica, tenga taller o con familiar mecanico',
        
      },
      {
        'profesion': 'Monta Bus',
        'icon': 'bus',
        'description': 'Que lo recuerdes montado en un bus',
        
      },
      {
        'profesion': 'Toma Tinto',
        'icon': 'cafe',
        'description': 'Alguien que le guste mucho el tinto',
        
      },
      {
        'profesion': 'Call Center',
        'icon': 'call',
        'description': 'Trabaje en un Call Center o reciba muchas llamadas',
        
      },
      {
        'profesion': 'Sabe Fotografía',
        'icon': 'camera',
        'description': 'Sepa de Fotografia, sea profesional tomando fotos',
        
      },
      {
        'profesion': 'Super Mercado',
        'icon': 'cart',
        'description': 'Trabaje para un SuperMercado en cualquier area',
        
      },
      {
        'profesion': 'Trabaja Valores',
        'icon': 'cash',
        'description': 'Tenga o Trabaje en Casa de Cambio',
        
      },
      {
        'profesion': 'Pinta Cuadros',
        'icon': 'color-palette',
        'description': 'Sepa Pintar Cuadros',
        
      },
      {
        'profesion': 'Obras Construccion',
        'icon': 'construct',
        'description': 'Trabe en Obras de Construcción',
        
      },
      {
        'profesion': 'Peluquera Estilista',
        'icon': 'cut',
        'description': 'Tenga o Trabaje en peluquería',
        
      },
      {
        'profesion': 'Optómetra Optica',
        'icon': 'eye',
        'description': 'Trabaje con los ojos con gafas y más',
        
      },
      {
        'profesion': 'Community Manager',
        'icon': 'logo-facebook',
        'description': 'Maneje Redes Sociales como profesión',
        
      },
      {
        'profesion': 'Bombero Socorrista',
        'icon': 'flame',
        'description': 'Sepa Pintar Cuadros',
        
      },
      {
        'profesion': 'Ingenieria Electrica',
        'icon': 'flash',
        'description': 'Sepa de Voltajes y cosas electricas',
        
      },
      {
        'profesion': 'Químico Laboratorio',
        'icon': 'flask',
        'description': 'Sea Quimico de algun tipo',
        
      },
      {
        'profesion': 'Jardinería Plantas',
        'icon': 'flower',
        'description': 'Venda plantas o flores para vivir, sea Jardinero',
        
      },
      {
        'profesion': 'Futbol Microfutbol',
        'icon': 'football',
        'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
        
      },
       {
        'profesion': 'Madera Carpintero',
        'icon': 'hammer',
        'description': 'Trabaje con Madera',
        
      },
       {
        'profesion': 'Futbol Microfutbol',
        'icon': 'football',
        'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
        
      },
       {
        'profesion': 'Amor Pasado',
        'icon': 'heart',
        'description': 'Algun Exnovio(a) o amor del pasado',
        
      },
       {
        'profesion': 'Bienes Raices',
        'icon': 'home',
        'description': 'Trabaje comprando o vendiendo bienes raices',
        
      },
       {
        'profesion': 'Llaves Cerraduras',
        'icon': 'key',
        'description': 'Trabaje con Cerraduras y Llaves',
        
      },
       {
        'profesion': 'Tecnología Sistemas',
        'icon': 'laptop',
        'description': 'Sabe de sistemas y tecnología, programacion, software',
        
      },
      {
        'profesion': 'Soldado Militar',
        'icon': 'medal',
        'description': 'Alguien que haya o este en el ejercito',
        
      },
      {
        'profesion': 'Medico Especialista',
        'icon': 'medkit',
        'description': 'Tiene alguna especialidad en medicina o simplemente es médico',
        
      },
      {
        'profesion': 'Cantante Musico',
        'icon': 'microphone',
        'description': 'Hayas visto cantar en algun lado',
        
      },
      {
        'profesion': 'Toca Instrumentos',
        'icon': 'musical-notes',
        'description': 'Toca algun instrumento y sabe de musica',
        
      },
      {
        'profesion': 'Vegetariano Verduras',
        'icon': 'nutrition',
        'description': 'Es vegetariano, Vegano o solo come verduras',
        
      },
      {
        'profesion': 'Ayuda Mascotas',
        'icon': 'paw',
        'description': 'Cuida los animalitos o tiene muchas mascotas',
        
      },
      {
        'profesion': 'Vende Celulares',
        'icon': 'phone-portrait',
        'description': 'Vende Celulares, Accesorios o todo con telefonos inteligentes',
        
      },
      {
        'profesion': 'Pizzero Pizzeria',
        'icon': 'pizza',
        'description': 'Tiene que ver con la industria de la pizza',
        
      },
      {
        'profesion': 'Azafata Piloto',
        'icon': 'plane',
        'description': 'Tiene que ver con la industria de la aviacion',
        
      },
      {
        'profesion': 'Vende Ropa',
        'icon': 'pricetags',
        'description': 'Vende Ropa en General',
        
      },
      {
        'profesion': 'Mesero Restaurante',
        'icon': 'restaurant',
        'description': 'Trabaja en un restaurante o es dueño de alguno',
        
      },
      {
        'profesion': 'Recien Graduado',
        'icon': 'school',
        'description': 'Está Estudiando o Recién Graduado de la Universidad',
        
      },
      {
        'profesion': 'Costura Confeccion',
        'icon': 'shirt',
        'description': 'Confecciona o tiene taller de costura',
        
      },
      {
        'profesion': 'Carro Velocidad',
        'icon': 'speedometer',
        'description': 'Piloto de Autos o le guste la Velocidad y los Carros',
        
      },
      {
        'profesion': 'Deportista Rendimiento',
        'icon': 'tennisball',
        'description': 'Deportista de Alto Rendimiento',
        
      },
      {
        'profesion': 'Youtuber Animador',
        'icon': 'logo-youtube',
        'description': 'Youtuber o Animador en Videos en Redes Sociales',
        
      },
    
  ]


  	};

  /* agregarProspecto(nuevoProspecto){
      nuevoProspecto.nombre =this.nombres.nombre;
      nuevoProspecto.apellido =this.apellidos.apellido;
      nuevoProspecto.profesion =this.profesiones.profesion;

    };*/

}


