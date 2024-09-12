import { Component } from '@angular/core';

@Component({
  selector: 'app-listadoalumnos-c',
  templateUrl: './listadoalumnos-c.component.html',
  styleUrls: ['./listadoalumnos-c.component.css']
})
export class ListadoalumnosCComponent {
  listaEstudiantes = [
    { nombre: "Maria Fernandez", estado: "excento", feedback: "" },
    { nombre: "Ricardo López", estado: "excento", feedback: "" },
    { nombre: "Laura Chiquito", estado: "reprobado", feedback: "" },
    { nombre: "Sofia Castro", estado: "reprobado", feedback: "" },
    { nombre: "Vicente Chaparro", estado: "excento", feedback: "" },
    { nombre: "Juan Gómez", estado: "excento", feedback: "" }
  ];

  mostrar = true;
  hayCambios = false; // Indicador de si se hicieron cambios
  mensajeFeedback: string = ""; // Mensaje de feedback general
  feedbackExitoso: boolean = true; // Define si el feedback es exitoso o no

  toggle(): void {
    this.mostrar = !this.mostrar;
  }

  // Detecta si hubo cambios en el estado o feedback de los estudiantes
  marcarCambios(): void {
    this.hayCambios = true;
  }

  // Función para guardar los cambios de un estudiante específico
  guardarCambiosEstudiante(index: number): void {
    const estudiante = this.listaEstudiantes[index];
    
    // Simulamos el guardado de los cambios
    try {
      // Aquí podrías implementar una lógica para guardar los cambios en un backend, etc.
      console.log(`Cambios guardados para: ${estudiante.nombre}`);
      console.log(`Nuevo estado: ${estudiante.estado}`);
      console.log(`Feedback: ${estudiante.feedback}`);
      this.hayCambios = false; // Resetea el indicador después de guardar

      // Mensaje de feedback individual
      this.mensajeFeedback = `Cambios guardados para ${estudiante.nombre}!`;
      this.feedbackExitoso = true; // Indica éxito en la operación

    } catch (error) {
      // Si hay un error, mostramos un mensaje de error
      this.mensajeFeedback = `Hubo un problema al guardar los cambios para ${estudiante.nombre}.`;
      this.feedbackExitoso = false; // Indica que hubo un error
    }

    // Oculta el mensaje de feedback después de 3 segundos
    setTimeout(() => {
      this.mensajeFeedback = '';
    }, 3000);
  }
}
