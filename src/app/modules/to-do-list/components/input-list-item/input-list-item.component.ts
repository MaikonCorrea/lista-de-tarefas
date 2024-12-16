import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/ilistItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.css'
})
export class InputListItemComponent {
  @Input({ required: true }) public inputListItems: Array<IListItems> = [];

  @Output() public outputUpdateItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();
  public updateItemCheckbox( id: string, checked: boolean) {
    this.outputUpdateItemCheckbox.emit({ id, checked});
  }

  @Output() public outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();
  public updateItemText(id: string, value: string) {
    this.outputUpdateItemText.emit({ id, value });
  }

  @Output() public outputDeleteItem = new EventEmitter<string>();
  public deleteItem(id: string) {
    this.outputDeleteItem.emit(id);
  }

}
