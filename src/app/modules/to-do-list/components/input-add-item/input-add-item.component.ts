import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { IListItems } from '../../interface/ilistItems.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.css'
})
export class InputAddItemComponent {
#cdr = inject(ChangeDetectorRef);

@ViewChild("inputText") public inputText!: ElementRef;


@Input({ required: true }) public inputListItems: Array<IListItems> = [];
@Output() public outputAddListItems = new EventEmitter<IListItems>()
  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = "";

      const currentDate = new Date();
      const timetamp = currentDate.getTime();
      const id = `ID ${timetamp}`;

      this.outputAddListItems.emit({
        id,
        checked: false,
        value
      });
      return this.inputText.nativeElement.focus();
    }
  }
}
