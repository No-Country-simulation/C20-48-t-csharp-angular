import { Component } from '@angular/core';

@Component({
  selector: 'app-add-educational-notification',
  templateUrl: './add-educational-notification.component.html',
  styleUrls: ['./add-educational-notification.component.css']
})
export class AddEducationalNotificationComponent  {

  registro = {
    division: '',
    profesor: ''
  };

  onSubmit() {
    console.log(this.registro);
  }
}

