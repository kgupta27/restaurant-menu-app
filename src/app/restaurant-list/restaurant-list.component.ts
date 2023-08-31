import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../services/mock-api.service';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];
  carouselOptions = {
    loop: true,
    items: 1,
    nav: true,
    dots: false,
  };

  constructor(private mockApiService: MockApiService) { }

  ngOnInit(): void {
    this.mockApiService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
      console.log(' this.restaurants', this.restaurants)
    });
  }
}