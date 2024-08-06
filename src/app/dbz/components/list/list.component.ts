import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  //onDeleteId =

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id?: string): void {
    if ( !id ) return;


    this.onDelete.emit(id);

  }

}
