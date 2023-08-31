import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menuItem: any;
  carouselOptions = {
    loop: true,
    items: 1,
    nav: true,
    dots: false,
  };

  constructor(private cartService: CartService) { }

  ngOnInit(){
    // console.log("this.menuItem",this.menuItem);
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
  }

  // Other methods for customization options
}