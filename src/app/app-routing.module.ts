import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
@NgModule({
    declarations: [
        ContactsComponent,
        DetailComponent,
        PageNotFoundComponent
    ],
    imports: [RouterModule.forRoot(routesConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
