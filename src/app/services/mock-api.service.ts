import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { MenuItem } from './models/menu-item';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  // Simulated restaurant data
  private restaurants = [
    {
      id: 1,
      name: 'Restaurant A',
      location: 'City A',
      menuItems: [
        {
          id: 101,
          name: 'Pizza Margherita',
          description: 'Classic Italian pizza',
          price: 10,
          images: ['pizza-margherita-1.jpg', 'pizza-margherita-2.jpg'],
        },
        // Other menu items...
      ],
    },
    {
      id: 2,
      name: 'Restaurant B',
      location: 'City B',
      menuItems: [
        {
          id: 201,
          name: 'Burger Deluxe',
          description: 'Delicious burger with all the fixings',
          price: 8,
          images: ['burger-deluxe-1.jpg', 'burger-deluxe-2.jpg'],
        },
        // Other menu items...
      ],
    },
    {
      id: 3,
      name: 'Restaurant C',
      location: 'City C',
      menuItems: [
        {
          id: 301,
          name: 'Pasta Deluxe',
          description: 'Delicious pasta with all the toppings',
          price: 20,
          images: ['white-pasta.jpg', 'red-pasta.jpg'],
        },
        // Other menu items...
      ],
    },
    {
      id: 4,
      name: 'Restaurant D',
      location: 'City D',
      menuItems: [
        {
          id: 401,
          name: 'Shakes',
          description: 'Delicious Shakes',
          price: 8,
          images: ['choclate-shake.jpg', 'blue-berry.jpg'],
        },
        // Other menu items...
      ],
    },
    // {
    //   id: 5,
    //   name: 'Restaurant E',
    //   location: 'City E',
    //   menuItems: [
    //     {
    //       id: 501,
    //       name: 'North Indian',
    //       description: 'Delicious North Indian',
    //       price: 8,
    //       images: ['dal.jpg', 'shahi-paneer.jpg'],
    //     },
    //     // Other menu items...
    //   ],
    // },
  ];

  getRestaurants(): Observable<any> {
    return of(this.restaurants);
  }
}