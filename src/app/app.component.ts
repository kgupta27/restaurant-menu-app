import { Component, ViewChild } from '@angular/core';
import { CartService } from './services/cart.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant-menu-app';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(public cartService: CartService){

  }

  toggleSidebar(){
    console.log(this.sidenav);
    this.sidenav.toggle();
  }
}
