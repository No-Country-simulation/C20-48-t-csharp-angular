import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializa el formulario con los campos y validaciones
    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.perfilForm.valid) {
      console.log('Datos del formulario:', this.perfilForm.value);
    } else {
      console.log('El formulario no es válido');
    }
  }

  // Método para verificar si un campo es inválido y fue tocado
  campoInvalido(campo: string): boolean {
    return this.perfilForm.get(campo)?.invalid && this.perfilForm.get(campo)?.touched;
  }
}
