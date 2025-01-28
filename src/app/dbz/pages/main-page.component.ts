import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService){}

  get characters(): Character[] {
    // devolvemos una copia del array
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter(character);
  }

}
