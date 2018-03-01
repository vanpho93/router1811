import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [
    { id: 'abcd', name: 'Teo', phone: '0912783478', email: 'teo@gmail.com' },
    { id: 'ghik', name: 'Ti', phone: '09097267647', email: 'ti@gmail.com' },
    { id: 'hksk', name: 'Tun', phone: '08923748127', email: 'tun@gmail.com' },
  ];
}

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}
