import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hot chocolate',
      'Who does not like chocolate?',
      'https://assets.bonappetit.com/photos/57accdd1f1c801a1038bc794/16:9/w_2560%2Cc_limit/Hot-Chocolate-2-of-5.jpg',
      [new Ingredient('milk', 1), new Ingredient('Chocolate', 2)]
    ),
    new Recipe(
      'Sandwich',
      'Healthy break-fast',
      'https://www.residentadvisor.net/images/events/flyer/2016/4/jp-0406-819275-front.jpg',
      [new Ingredient('Bread', 2), new Ingredient('Onion', 1)]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
