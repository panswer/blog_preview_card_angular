import { Component } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

}
