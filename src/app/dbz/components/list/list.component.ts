import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector: 'dbz-list', //le hemos puesto dbz para distinguir que es del modulo y que no haya conflicto con otras listas
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    
    @Input()
    public characterList: Character[] = [{
        name: 'Trunks',
        power: 10
    }]

   @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();


    onDeleteCharacter( id?: string ):void{
        if( !id ) return; //si no existe el id, no se emite el evento
        console.log({id})
        this.onDelete.emit( id );
    }
}