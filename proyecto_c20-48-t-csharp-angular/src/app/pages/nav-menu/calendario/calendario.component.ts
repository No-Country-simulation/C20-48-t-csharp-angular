import { Component, OnInit } from '@angular/core';
import  dayGridPlugin  from '@fullcalendar/daygrid';
import  timeGridPlugin  from '@fullcalendar/timegrid';
import  interactionGridPlugin  from '@fullcalendar/interaction';
import esLocate from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public events: any[];
  public options: any;

  constructor() { }

  ngOnInit(): void {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionGridPlugin],
      defaultDate: new Date(),
      locale: esLocate,
      header:{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    }

    this.events = [
      {
        title: "Evento 1",
        start: new Date(),
        description: "Evento 1"
      },
      {
        title: "Evento 2",
        start: new Date(new Date().getTime() + 86400000 ),
        description: "Evento 2"
      },
      {
        title: "Evento 3",
        start: new Date(new Date().getTime() + 86400000 * 2),
        description: "Evento 3"
      },
    ]

  }

}
