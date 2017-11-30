webpackJsonp([0],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crear_crear__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesiones_profesiones__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__profesiones_profesiones__["a" /* ProfesionesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__crear_crear__["a" /* CrearPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Profesiones" tabIcon="man"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Crear" tabIcon="add-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Lista" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
var CrearPage = (function () {
    //items: Observable<any[]>;
    //nombre: any;
    //mensajeValor: string = '';
    function CrearPage(navCtrl) {
        //this.items = db.list('/lista').valueChanges();
        this.navCtrl = navCtrl;
        this.nombres = [];
        this.apellidos = [];
        this.profesiones = [];
        this.nuevoProspecto = {
            nombre: '',
            apellido: '',
            profesion: '',
            telefono: '',
        };
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
        ];
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
        ];
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
        ];
    }
    ;
    CrearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\crear\crear.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Crear\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n    	\n\n		<ion-list>\n\n		      <ion-item>\n\n		        <ion-label>Nombre</ion-label>\n\n		        <ion-select [(ngModel)]="nombres.nombre" interface="popover">\n\n			    	<ion-option *ngFor="let nombre of nombres" value="{{nombre.nombre}}">\n\n			    	{{nombre.nombre}}\n\n			    </ion-option>\n\n			    	\n\n				</ion-select>\n\n		      </ion-item>\n\n		 </ion-list>\n\n\n\n\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n\n\n		<ion-list>\n\n		      <ion-item>\n\n		        <ion-label>Apellido</ion-label>\n\n		        <ion-select [(ngModel)]="apellidos.apellido" interface="popover">\n\n			    	<ion-option *ngFor="let apellido of apellidos" value="{{apellido.apellido}}">{{apellido.apellido}}\n\n			    	</ion-option>\n\n			    	\n\n				</ion-select>\n\n		      </ion-item>\n\n		 </ion-list>\n\n\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n<ion-row>\n\n    <ion-col>\n\n		<ion-list>\n\n		      <ion-item>\n\n		        <ion-label>Profesion</ion-label>\n\n		        <ion-select [(ngModel)]="profesiones.profesion" interface="popover">\n\n				    	<ion-option *ngFor="let profesion of profesiones" value="{{profesion.profesion}}">{{profesion.profesion}}\n\n				   	</ion-option>\n\n			    </ion-select>\n\n		      </ion-item>\n\n		 </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n</ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n	<ion-input type="number" placeholder="Agrega el Celular de la Persona" [(ngModel)]="celular"  \n\n         (keyup.enter)="addcelular($event.target.value)">\n\n    \n\n	</ion-input> \n\n	<br><br><br>\n\n\n\n   <button ion-button color="primary" full >Agregar a la Lista</button>\n\n\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\crear\crear.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], CrearPage);
    return CrearPage;
    var _a;
}());

//# sourceMappingURL=crear.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaPage = (function () {
    function ListaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\lista\lista.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Lista\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg social-cards">\n\n  <ion-list>\n\n  	\n\n\n\n    <ion-item-divider color="light">Prospectos</ion-item-divider>\n\n    \n\n    <ion-card>\n\n    		<ion-card-content>\n\n    			<ion-row>\n\n    				<ion-col col-1>\n\n    				<ion-icon name="person" item-start></ion-icon>\n\n    				</ion-col>\n\n    				<ion-col col-5>\n\n    					<p>Carlos Alberto</p>\n\n    				</ion-col>\n\n    				<ion-col col-5>\n\n    					<p>Hernandez</p>\n\n    				</ion-col>\n\n    				<ion-col col-1>\n\n    				</ion-col>\n\n 				</ion-row>\n\n 				<ion-row>\n\n 					<ion-col col-1>\n\n    				<ion-icon name="car" item-start></ion-icon>\n\n    				</ion-col>\n\n    				<ion-col col-5>\n\n    					<p>Maneja Uber</p>\n\n    				</ion-col>\n\n    				<ion-col col-5>\n\n    					<p>3009876543</p>\n\n    				</ion-col>\n\n    				<ion-col col-1>\n\n    				</ion-col>\n\n 				</ion-row>\n\n    			\n\n  			</ion-card-content>\n\n\n\n    </ion-card>\n\n   \n\n   \n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\lista\lista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfesionesPage = (function () {
    function ProfesionesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.items = [
            {
                'title': 'Maneje Uber',
                'icon': 'car',
                'description': 'Alguien que sepas que maneje Uber, o tenga algo que ver con Uber',
            },
            {
                'title': 'Analice Datos',
                'icon': 'analytics',
                'description': 'Analice Datos en una Empresa',
            },
            {
                'title': 'Haga Picnic',
                'icon': 'basket',
                'description': 'Alguien que recuerdes en un picnic',
            },
            {
                'title': 'Tome Cerveza',
                'icon': 'beer',
                'description': 'Alguien que recuerdes tomando mucha cerveza',
            },
            {
                'title': 'Monte Bicicleta',
                'icon': 'bicycle',
                'description': 'Vaya a la ciclovia o monte mucho e bicicleta',
            },
            {
                'title': 'Lee Libros',
                'icon': 'book',
                'description': 'Alguien a quien le guste leer mucho',
            },
            {
                'title': 'Maquille Profesionalmente',
                'icon': 'brush',
                'description': 'Le Guste maquillar por profesion o hobby',
            },
            {
                'title': 'Sabe Mecanica',
                'icon': 'build',
                'description': 'Que sepa mecanica, tenga taller o con familiar mecanico',
            },
            {
                'title': 'Monte Bus',
                'icon': 'bus',
                'description': 'Que lo recuerdes montado en un bus',
            },
            {
                'title': 'Tome Tinto',
                'icon': 'cafe',
                'description': 'Alguien que le guste mucho el tinto',
            },
            {
                'title': 'Call Center',
                'icon': 'call',
                'description': 'Trabaje en un Call Center o reciba muchas llamadas',
            },
            {
                'title': 'Sepa Fotografía',
                'icon': 'camera',
                'description': 'Sepa de Fotografia, sea profesional tomando fotos',
            },
            {
                'title': 'Super Mercado',
                'icon': 'cart',
                'description': 'Trabaje para un SuperMercado en cualquier area',
            },
            {
                'title': 'Trabaje Valores',
                'icon': 'cash',
                'description': 'Tenga o Trabaje en Casa de Cambio',
            },
            {
                'title': 'Pinte Cuadros',
                'icon': 'color-palette',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'title': 'Obras Construccion',
                'icon': 'construct',
                'description': 'Trabe en Obras de Construcción',
            },
            {
                'title': 'Peluqueria Estilista',
                'icon': 'cut',
                'description': 'Tenga o Trabaje en peluquería',
            },
            {
                'title': 'Optómetra Optica',
                'icon': 'eye',
                'description': 'Trabaje con los ojos con gafas y más',
            },
            {
                'title': 'Community Manager',
                'icon': 'logo-facebook',
                'description': 'Maneje Redes Sociales como profesión',
            },
            {
                'title': 'Bombero Socorrista',
                'icon': 'flame',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'title': 'Ingenieria Electrica',
                'icon': 'flash',
                'description': 'Sepa de Voltajes y cosas electricas',
            },
            {
                'title': 'Químico Laboratorio',
                'icon': 'flask',
                'description': 'Sea Quimico de algun tipo',
            },
            {
                'title': 'Jardinería Plantas',
                'icon': 'flower',
                'description': 'Venda plantas o flores para vivir, sea Jardinero',
            },
            {
                'title': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'title': 'Madera Carpintero',
                'icon': 'hammer',
                'description': 'Trabaje con Madera',
            },
            {
                'title': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'title': 'Amor Pasado',
                'icon': 'heart',
                'description': 'Algun Exnovio(a) o amor del pasado',
            },
            {
                'title': 'Bienes Raices',
                'icon': 'home',
                'description': 'Trabaje comprando o vendiendo bienes raices',
            },
            {
                'title': 'Llaves Cerraduras',
                'icon': 'key',
                'description': 'Trabaje con Cerraduras y Llaves',
            },
            {
                'title': 'Tecnología Sistemas',
                'icon': 'laptop',
                'description': 'Sabe de sistemas y tecnología, programacion, software',
            },
            {
                'title': 'Soldado Militar',
                'icon': 'medal',
                'description': 'Alguien que haya o este en el ejercito',
            },
            {
                'title': 'Medico Especialista',
                'icon': 'medkit',
                'description': 'Tiene alguna especialidad en medicina o simplemente es médico',
            },
            {
                'title': 'Cantante Musico',
                'icon': 'microphone',
                'description': 'Hayas visto cantar en algun lado',
            },
            {
                'title': 'Toca Instrumentos',
                'icon': 'musical-notes',
                'description': 'Toca algun instrumento y sabe de musica',
            },
            {
                'title': 'Vegetariano Verduras',
                'icon': 'nutrition',
                'description': 'Es vegetariano, Vegano o solo come verduras',
            },
            {
                'title': 'Ayuda Mascotas',
                'icon': 'paw',
                'description': 'Cuida los animalitos o tiene muchas mascotas',
            },
            {
                'title': 'Vende Celulares',
                'icon': 'phone-portrait',
                'description': 'Vende Celulares, Accesorios o todo con telefonos inteligentes',
            },
            {
                'title': 'Pizzero Pizzeria',
                'icon': 'pizza',
                'description': 'Tiene que ver con la industria de la pizza',
            },
            {
                'title': 'Azafata Piloto',
                'icon': 'plane',
                'description': 'Tiene que ver con la industria de la aviacion',
            },
            {
                'title': 'Vende Ropa',
                'icon': 'pricetags',
                'description': 'Vende Ropa en General',
            },
            {
                'title': 'Mesero Restaurante',
                'icon': 'restaurant',
                'description': 'Trabaja en un restaurante o es dueño de alguno',
            },
            {
                'title': 'Recien Graduado',
                'icon': 'school',
                'description': 'Está Estudiando o Recién Graduado de la Universidad',
            },
            {
                'title': 'Costura Confeccion',
                'icon': 'shirt',
                'description': 'Confecciona o tiene taller de costura',
            },
            {
                'title': 'Carro Velocidad',
                'icon': 'speedometer',
                'description': 'Piloto de Autos o le guste la Velocidad y los Carros',
            },
            {
                'title': 'Deportista Rendimiento',
                'icon': 'tennisball',
                'description': 'Deportista de Alto Rendimiento',
            },
            {
                'title': 'Youtuber Animador',
                'icon': 'logo-youtube',
                'description': 'Youtuber o Animador en Videos en Redes Sociales',
            },
        ];
    }
    ProfesionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profesiones',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\profesiones\profesiones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Profesiones</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n  	<ion-list-header>¿A quien conoces que?</ion-list-header>\n\n    <button ion-item *ngFor="let item of items" icon-start>\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{ item.title }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\profesiones\profesiones.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfesionesPage);
    return ProfesionesPage;
}());

//# sourceMappingURL=profesiones.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__enviroment__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__["a" /* CrearPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__["a" /* ProfesionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__enviroment__["a" /* firebaseConfig */], 'lista-prospectos'),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__["a" /* CrearPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__["a" /* ProfesionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyB4C6vu6f1sVh8VfoqBJc2Cr0SOsKXwhXo",
    authDomain: "lista-prospectos.firebaseapp.com",
    databaseURL: "https://lista-prospectos.firebaseio.com",
    projectId: "lista-prospectos",
    storageBucket: "",
    messagingSenderId: "879756516909"
};
//# sourceMappingURL=enviroment.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map