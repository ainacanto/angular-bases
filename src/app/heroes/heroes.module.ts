//codigo de angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//codigo de terceros

//nuestro codigo
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    //lo exportamos para que se pueda usar en el mundo exterior
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}