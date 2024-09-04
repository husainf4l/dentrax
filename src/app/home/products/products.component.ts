import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Array<{ name: string; description: string; price: number, id: string, imgUrl: string }> = [
    {
      id: "1",
      name: "Dentrax FX3 Water Flosser",
      description: "The FX3 Water Flosser provides an advanced way to floss using water pressure to remove plaque and food debris, ensuring optimal oral hygiene.",
      price: 128,
      imgUrl: "assets/products/tb3light.png"
    },
    {
      id: "2",
      name: "Dentrax TB3 Toothbrush Light",
      description: "The Dentrax TB3 Light Toothbrush is designed for daily use with gentle bristles and efficient cleaning technology.",
      price: 39,
      imgUrl: "assets/products/tb3light.png"
    },
    {
      id: "3",
      name: "Dentrax TB3 Toothbrush Pro",
      description: "The Pro version of the TB3 Toothbrush offers a powerful motor and advanced bristle design for superior plaque removal and gum care.",
      price: 89,
      imgUrl: "assets/products/tb3light.png"

    }
  ];


}
