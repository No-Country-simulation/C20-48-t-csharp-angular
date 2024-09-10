import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-computers',
  templateUrl: './virtual-computers.component.html',
  styleUrls: ['./virtual-computers.component.css']
})
export class VirtualComputersComponent{

  registro = {
    asignatura: '',
    profesor: ''
  };

  onSubmit() {
    console.log(this.registro);
  }
}
