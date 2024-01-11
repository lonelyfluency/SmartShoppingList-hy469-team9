import { Component } from '@angular/core';

@Component({
  selector: 'app-fridge_recipe',
  templateUrl: './fridge_recipe.component.html',
  styleUrls: ['./fridge_recipe.component.scss']
})
export class FridgeRecipeComponent {

  callManageDeleteComponent(): void {
    window.location.href = 'http://localhost:4200/phone_shoppingListDelete';
  }

  goToAccountPage(): void {
    window.location.href = 'http://localhost:4200/phone_account';
  }

  goToFridgeMain(): void {
    window.location.href = 'http://localhost:4200/fridge_main';
  }

}
