import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { SlideComponent } from "./slide/slide.component";
import { ProductsComponent } from "./products/products.component";
import { SpecificationsComponent } from "./specifications/specifications.component";
import { VideoComponent } from "./video/video.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SlideComponent, ProductsComponent, SpecificationsComponent, VideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
