import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-exercis',
  templateUrl: './modal-exercis.component.html',
  styleUrls: ['./modal-exercis.component.css']
})
export class ModalExercisComponent implements OnInit {

  @Output() triggerCloseModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() : void{
    this.triggerCloseModal.emit(false);
  }

}
