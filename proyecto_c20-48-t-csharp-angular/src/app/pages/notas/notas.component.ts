import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {


  alumnos = [
    { id: 1, nombre: 'Juan Pérez', notas: { corte1: 0, corte2: 0, corte3: 0 } },
    { id: 2, nombre: 'Ana Gómez', notas: { corte1: 0, corte2: 0, corte3: 0 } },
    // ... Agrega más alumnos aquí
    { id: 16, nombre: 'Carlos Mendoza', notas: { corte1: 0, corte2: 0, corte3: 0 } }
  ];
   // Alumno específico para editar
   alumno = { id: 0, nombre: '', notas: { corte1: 0, corte2: 0, corte3: 0 } };

   id!: number;
 

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.alumno = this.alumnos.find(a => a.id === this.id) || { id: 0, nombre: '', notas: { corte1: 0, corte2: 0, corte3: 0 } };
  }

  onSubmit() {
    console.log(this.alumno);
    // Lógica para guardar las notas en un backend o localmente
    this.router.navigate(['/listado-alumnos']);
  }
}

