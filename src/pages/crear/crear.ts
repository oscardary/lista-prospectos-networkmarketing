import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { AgregarProspectoService } from '../../services/agregar-prospecto/agregar-prospecto.service';
import { Autenticacion } from '../../services/autenticacion/autenticacion.service';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html'
})
export class CrearPage {



	nombres: any = [];
	apellidos: any = [];
  profesiones: any = [];
  profesionSeleccionada: any = {};

  nuevoProspecto = {
    // nombre: '',
    // apellido: '',
    // profesion: '',
    // telefono:'',
  }

	//items: Observable<any[]>;
	//nombre: any;
	//mensajeValor: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private aps: AgregarProspectoService,
    private auth: Autenticacion	) {

  	//this.items = db.list('/lista').valueChanges();

  		this.nombres = [
  {
    "nombre": "Adel"
  },
  {
    "nombre": "Adriana"
  },
  {
    "nombre": "Agustin"
  },
  {
    "nombre": "Alejandra"
  },
  {
    "nombre": "Alejandro"
  },
  {
    "nombre": "Alex"
  },
  {
    "nombre": "Alexander"
  },
  {
    "nombre": "Alexandra"
  },
  {
    "nombre": "Alfredo"
  },
  {
    "nombre": "Alirio"
  },
  {
    "nombre": "Alvaro"
  },
  {
    "nombre": "Amparo"
  },
  {
    "nombre": "Ana"
  },
  {
    "nombre": "Ana Maria"
  },
  {
    "nombre": "Anderson"
  },
  {
    "nombre": "Andrea"
  },
  {
    "nombre": "Andrés"
  },
  {
    "nombre": "Andrés Felipe"
  },
  {
    "nombre": "Angela"
  },
  {
    "nombre": "Angela Maria"
  },
  {
    "nombre": "Angelica"
  },
  {
    "nombre": "Antonio"
  },
  {
    "nombre": "Armando"
  },
  {
    "nombre": "Augusto"
  },
  {
    "nombre": "Beatriz"
  },
  {
    "nombre": "Bryan"
  },
  {
    "nombre": "Camila"
  },
  {
    "nombre": "Camilo"
  },
  {
    "nombre": "Carlos"
  },
  {
    "nombre": "Carlos Andres"
  },
  {
    "nombre": "Carlos Alberto"
  },
  {
    "nombre": "Carlos Arturo"
  },
  {
    "nombre": "Carolina"
  },
  {
    "nombre": "Catalina"
  },
  {
    "nombre": "Cesar"
  },
  {
    "nombre": "Christian"
  },
  {
    "nombre": "Clara"
  },
  {
    "nombre": "Claudia"
  },
  {
    "nombre": "Clemente"
  },
  {
    "nombre": "Daniel"
  },
  {
    "nombre": "Daniela"
  },
  {
    "nombre": "Dario"
  },
  {
    "nombre": "David"
  },
  {
    "nombre": "Diana"
  },
  {
    "nombre": "Didier"
  },
  {
    "nombre": "Diego"
  },
  {
    "nombre": "Duvan"
  },
  {
    "nombre": "Edilma"
  },
  {
    "nombre": "Edison"
  },
  {
    "nombre": "Eduardo"
  },
  {
    "nombre": "Edwin"
  },
  {
    "nombre": "Eliza"
  },
  {
    "nombre": "Elizabeth"
  },
  {
    "nombre": "Elkin"
  },
  {
    "nombre": "Elvia"
  },
  {
    "nombre": "Emiliana"
  },
  {
    "nombre": "Erica"
  },
  {
    "nombre": "Ernesto"
  },
  {
    "nombre": "Esteban"
  },
  {
    "nombre": "Estefanía"
  },
  {
    "nombre": "Fabio"
  },
  {
    "nombre": "Federico"
  },
  {
    "nombre": "Felipe"
  },
  {
    "nombre": "Fernando"
  },
  {
    "nombre": "Francisco"
  },
  {
    "nombre": "Franklin"
  },
  {
    "nombre": "Fredy"
  },
  {
    "nombre": "Gabriel"
  },
  {
    "nombre": "German"
  },
  {
    "nombre": "Gladys"
  },
  {
    "nombre": "Gloria"
  },
  {
    "nombre": "Gustavo"
  },
  {
    "nombre": "Hector"
  },
  {
    "nombre": "Helena"
  },
  {
    "nombre": "Henry"
  },
  {
    "nombre": "Hernan"
  },
  {
    "nombre": "Hernan Dario"
  },
  {
    "nombre": "Horacio"
  },
  {
    "nombre": "Hugo"
  },
  {
    "nombre": "Isabel"
  },
  {
    "nombre": "Ivan"
  },
  {
    "nombre": "Jaime"
  },
  {
    "nombre": "Jairo"
  },
  {
    "nombre": "Janeth"
  },
  {
    "nombre": "Jazmin"
  },
  {
    "nombre": "Jefferson"
  },
  {
    "nombre": "Jenifer"
  },
  {
    "nombre": "Jeronimo"
  },
  {
    "nombre": "Jesús"
  },
  {
    "nombre": "Jhon"
  },
  {
    "nombre": "Jhonatan"
  },
  {
    "nombre": "Jorge"
  },
  {
    "nombre": "Jorge Ivan"
  },
  {
    "nombre": "José"
  },
  {
    "nombre": "Jose Antonio"
  },
  {
    "nombre": "Jose Eduardo"
  },
  {
    "nombre": "Jose Luis"
  },
  {
    "nombre": "Juan"
  },
  {
    "nombre": "Juan Camilo"
  },
  {
    "nombre": "Juan Carlos"
  },
  {
    "nombre": "Juan David"
  },
  {
    "nombre": "Juan Diego"
  },
  {
    "nombre": "Juan Esteban"
  },
  {
    "nombre": "Juan Fernando"
  },
  {
    "nombre": "Juan Manuel"
  },
  {
    "nombre": "Juan Pablo"
  },
  {
    "nombre": "Julian"
  },
  {
    "nombre": "Juliana"
  },
  {
    "nombre": "Julio Cesar"
  },
  {
    "nombre": "Kelly"
  },
  {
    "nombre": "Laura"
  },
  {
    "nombre": "Leidy"
  },
  {
    "nombre": "Leon"
  },
  {
    "nombre": "Leonardo"
  },
  {
    "nombre": "Liliana"
  },
  {
    "nombre": "Lina"
  },
  {
    "nombre": "Lina Marcela"
  },
  {
    "nombre": "Lina Maria"
  },
  {
    "nombre": "Lucas"
  },
  {
    "nombre": "Luis"
  },
  {
    "nombre": "Luis Alberto"
  },
  {
    "nombre": "Luis Angel"
  },
  {
    "nombre": "Luis Carlos"
  },
  {
    "nombre": "Luis Eduardo"
  },
  {
    "nombre": "Luis Fernando"
  },
  {
    "nombre": "Luis Mario"
  },
  {
    "nombre": "Luisa Fernanda"
  },
  {
    "nombre": "Luz"
  },
  {
    "nombre": "Luz Adriana"
  },
  {
    "nombre": "Luz Diana"
  },
  {
    "nombre": "Manuel"
  },
  {
    "nombre": "Marcela"
  },
  {
    "nombre": "Marcos"
  },
  {
    "nombre": "Maria"
  },
  {
    "nombre": "Maria Alejandra"
  },
  {
    "nombre": "Maria Angelica"
  },
  {
    "nombre": "Maria Clara"
  },
  {
    "nombre": "Maria Elena"
  },
  {
    "nombre": "Maria Eugenia"
  },
  {
    "nombre": "Maria Fernanda"
  },
  {
    "nombre": "Mariana"
  },
  {
    "nombre": "Mariela"
  },
  {
    "nombre": "Mario"
  },
  {
    "nombre": "Marisol"
  },
  {
    "nombre": "Marlon"
  },
  {
    "nombre": "Martha"
  },
  {
    "nombre": "Mary"
  },
  {
    "nombre": "Mateo"
  },
  {
    "nombre": "Mauricio"
  },
  {
    "nombre": "Melissa"
  },
  {
    "nombre": "Michelle"
  },
  {
    "nombre": "Miguel"
  },
  {
    "nombre": "Miguel Angel"
  },
  {
    "nombre": "Milton"
  },
  {
    "nombre": "Monica"
  },
  {
    "nombre": "Nancy"
  },
  {
    "nombre": "Natalia"
  },
  {
    "nombre": "Nicolás"
  },
  {
    "nombre": "Nora"
  },
  {
    "nombre": "Olga"
  },
  {
    "nombre": "Orlando"
  },
  {
    "nombre": "Oscar"
  },
  {
    "nombre": "Pablo"
  },
  {
    "nombre": "Paola"
  },
  {
    "nombre": "Patricia"
  },
  {
    "nombre": "Paula"
  },
  {
    "nombre": "Paula Andrea"
  },
  {
    "nombre": "Pedro"
  },
  {
    "nombre": "Pilar"
  },
  {
    "nombre": "Raul"
  },
  {
    "nombre": "Ricardo"
  },
  {
    "nombre": "Rocio"
  },
  {
    "nombre": "Rodrigo"
  },
  {
    "nombre": "Ruben"
  },
  {
    "nombre": "Samuel"
  },
  {
    "nombre": "Sandra"
  },
  {
    "nombre": "Santiago"
  },
  {
    "nombre": "Sara"
  },
  {
    "nombre": "Sebastian"
  },
  {
    "nombre": "Sergio"
  },
  {
    "nombre": "Simon"
  },
  {
    "nombre": "Sofia"
  },
  {
    "nombre": "Susana"
  },
  {
    "nombre": "Tatiana"
  },
  {
    "nombre": "Tomas"
  },
  {
    "nombre": "Valentina"
  },
  {
    "nombre": "Vanessa"
  },
  {
    "nombre": "Veronica"
  },
  {
    "nombre": "Victor"
  },
  {
    "nombre": "Victoria"
  },
  {
    "nombre": "Walter"
  },
  {
    "nombre": "Wilson"
  },
  {
    "nombre": "Ximena"
  },
  {
    "nombre": "Xiomara"
  },
  {
    "nombre": "Yadira"
  },
  {
    "nombre": "Yesid"
  },
  {
    "nombre": "Yolanda"
  },
  {
    "nombre": "Yuliana"
  },
  {
    "nombre": "Zully"
  },
  {
    "nombre": "Seleccione"
  }
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

      if (this.navParams.get('item')) {
        this.profesionSeleccionada = this.navParams.get('item');
      }

  	};

    createContact(nuevoProspecto){
      //Consultar UID
      this.auth.fnSesion.subscribe(sesion=>{
        if (sesion){

          nuevoProspecto.uid = sesion.uid;

          //Agregar a Firebase
          this.aps.addContactToList(nuevoProspecto)
            .then(ref => {
              //Ir a Lista
              this.navCtrl.setRoot(ListaPage, { key: ref.key });
            });
        }
      })
    }

    fnCerrarSesion(){
      this.auth.fnLogout();
      this.navCtrl.setRoot(LoginPage);
    }

}


