import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CONTACTS, Contact } from '../contacts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  contact: Contact;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.contact = CONTACTS.find(c => c.id === id);
    });
  }
  goBack() {
    // this.router.navigate(['/contacts']);
    this.location.back();
  }
}
