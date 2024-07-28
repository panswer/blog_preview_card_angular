import { Component } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
