import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  carouselOptions = {
    loop: true,
    items: 1,
    nav: true,
    dots: false,
  };
  menuItem: any;
  search: string = '';
  filteredItem: any = [];

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const navigationData: any = this.activatedRoute.snapshot;
    this.menuItem = JSON.parse(navigationData.params.state);
    console.log(this.menuItem);
    this.filteredItem = this.menuItem;
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
  }

  applyFilter() {
    if (this.search.trim() === '') {
      this.filteredItem = this.menuItem;
    } else {
      const filterValue = this.search.toLowerCase();
      this.filteredItem = this.menuItem.filter((item: any) =>
        item.name.toLowerCase().includes(filterValue)
      );
    }
  }
}