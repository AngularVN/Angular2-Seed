import { Component, OnInit } from "@angular/core";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from "@angular/router";
import { AlertComponent } from "ng2-bootstrap/ng2-bootstrap";

import { AboutComponent } from './about/components/about';

/* Providers */
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';

const APP_PROVIDERS = [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
];


@Component({
  selector: 'home',
  directives: [AlertComponent],
  template: `
    <div class="panel panel-success">
      <div class="panel-body">
        <h1>Welcome to Angular2-Seed</h1>
      </div>
    </div>		
	`
})

export class HomeComponent {}

@Component({
  selector: "app",
  templateUrl: "./app/app.html",
  providers: [APP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
])

export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("Application component initialized ...");
  }
}
