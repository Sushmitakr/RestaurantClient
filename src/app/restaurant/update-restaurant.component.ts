import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Restaurant } from "../model/restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Component({
  templateUrl: "./update-restaurant.component.html",
  styleUrls: ["./update-restaurant.component.css"]
})
export class UpdateRestaurantComponent {
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  //   createRestaurants(): void {
  //     this.restaurantService.createRestaurants(this.restaurant)
  //         .subscribe( data => {
  //           alert("User Update successfully.");
  //         });
  //     };

  // updateRestaurants(): void {
  //   this.restaurantService.updateRestaurants(this.restaurant)
  //       .subscribe( data => {
  //         alert("User Updated successfully.");
  //       });
  //   };

  updateRestaurants(restaurant: Restaurant): void {
    this.restaurantService.updateRestaurants(restaurant).subscribe(data => {
      //this.restaurants = this.restaurants.filter(update => update !== restaurant);
      alert("Restaurant Updated Successfully");
    });
  }
}
