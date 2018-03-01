import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONTACTS, Contact } from '../contacts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  contact: Contact;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.contact = CONTACTS.find(c => c.id === id);
    });
  }

}
