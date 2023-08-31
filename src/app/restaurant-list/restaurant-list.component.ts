import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../services/mock-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];
  filteredRestaurants: any[] = [];
  searchText: string = '';
  carouselOptions = {
    loop: true,
    items: 1,
    nav: true,
    dots: false,
  };

  constructor(private mockApiService: MockApiService, private router: Router) { }

  ngOnInit(): void {
    this.mockApiService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
      this.filteredRestaurants = restaurants;
      console.log(' this.restaurants', this.restaurants)
    });
  }

  applyFilter() {
    if (this.searchText.trim() === '') {
      this.filteredRestaurants = this.restaurants; // Show all restaurants if search text is empty
    } else {
      const filterValue = this.searchText.toLowerCase();
      this.filteredRestaurants = this.restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(filterValue)
      );
    }
  }

  goToMenuList(data : any) {
    console.log(data);
    this.router.navigate(['/menu-items', {
      state: JSON.stringify(data.menuItems)
    }]);
  }
}