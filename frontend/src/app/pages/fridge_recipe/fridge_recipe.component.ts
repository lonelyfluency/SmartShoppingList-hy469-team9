import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fridge_recipe',
  templateUrl: './fridge_recipe.component.html',
  styleUrls: ['./fridge_recipe.component.scss']
})
export class FridgeRecipeComponent {
  constructor(private router: Router) {}

  callManageDeleteComponent(): void {
    this.router.navigate(['/phone_shoppingListDelete']);
  }

  goToAccountPage(): void {
    this.router.navigate(['/phone_account']);
  }

  goToFridgeMain(): void {
    this.router.navigate(['/fridge_main']);
  }

}
