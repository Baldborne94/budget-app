import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  // input decorator, we create a property which can be import into the component with a 
  // property binding
  @Input() item: BudgetItem;
  // we are passy type any because the parent component already knows what item to delete
  // because they are passing the item to this component as well as binding to the click event
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    // WE want to emit an event
    this.xButtonClick.emit();
  }

  onCardClick() {

    this.cardClick.emit();

  }

}
