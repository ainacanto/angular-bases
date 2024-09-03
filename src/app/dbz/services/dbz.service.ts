import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ //decorador que indica a angular que se trata de un servicio
    providedIn: 'root' //si no tuviesemos esto tendriamos que definirlo en los providers de app.module.ts
})

//al usar el servicio mediante inyeccion de dependencias, tendremos los valores del servicio siempre exactamente iguales, accedamos desde donde accedamos en la aplicacion
export class DbzService {
    
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin', 
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    //se llama a esto cuando recibe el evento del nuevo personaje
    addCharacter( character: Character ):void{
        const newCharacter: Character = {
            ...character, //spread: toma todas sus propiedades y esparcelas en este nuevo objeto
            id: uuid()
        }
        //en una situación real aquí habría una llamada http para llevar la info al backend y añadir la info a la bbdd
        this.characters.push(newCharacter);
    }

    deleteCharacterById( id: string){
        //selecciona aquellos que cumplan la condicion (tener id diferente al selccionado)
        this.characters = this.characters.filter( character => character.id !== id );
    }

    //onDeleteCharacter( index:number ){
        //le indicamos a partir de qué índice y cuántos elementos se deben eliminar
        //this.characters.splice(index, 1);
    //}
}