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
      editable: true,
      selectable: true,
      slectMirror: true,
      dayMaxEvents: true,
      eventClick: this.handleEventClick.bind(this),
      dateClick: this.handleDateClick.bind(this),
      select: this.handleEventSelect.bind(this)
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

  handleEventSelect(selectInfo: any) {
    const title = prompt('Ingrese el titulo para el nuevo evento');
    const calendarApi = selectInfo.view.calendar;
    const color = title === 'Importante' ? '#dc3545' : '28a745';

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: String(new Date().getTime()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        color: color
      });
    }
  }
  handleEventClick(clickInfo: any) {
    const newTitle = prompt('Editar título del evento', clickInfo.event.title);

    if (newTitle === null) {
      if (confirm('¿Estas seguro de que deseas eliminar este evento')){
        clickInfo.event.remove();
      }
    } else if (newTitle !== clickInfo.event.title) {
      clickInfo.event.setProp('title', newTitle);
    }
  }
  handleDateClick(arg: any) {
    const title = prompt('Ingrse el título del evento');
    if (title) {
      this.events.push({
        title: title,
        start: arg.date,
        allDay: arg.alldat
      });
    }
  }
}
