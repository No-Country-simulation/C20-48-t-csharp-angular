import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recuperar-correo',
  templateUrl: './recuperar-correo.component.html',
  styleUrls: ['./recuperar-correo.component.css']
})
export class RecuperarCorreoComponent {

  email: string = '';

  constructor(public dialogRef: MatDialogRef<RecuperarCorreoComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onSearch(): void {
    // Aquí puedes manejar la lógica para buscar la cuenta con el correo electrónico.
    console.log('Buscar cuenta para el correo:', this.email);
    this.dialogRef.close();
  }
}
