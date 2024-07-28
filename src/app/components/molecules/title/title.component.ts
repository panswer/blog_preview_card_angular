import { Component } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

}
