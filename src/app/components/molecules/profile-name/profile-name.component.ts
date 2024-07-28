import { Component, Input } from '@angular/core';
import { ImageComponent } from '../../atoms/image/image.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-profile-name',
  standalone: true,
  imports: [ImageComponent, TextComponent],
  templateUrl: './profile-name.component.html',
  styleUrl: './profile-name.component.css'
})
export class ProfileNameComponent {
  @Input({ required: true }) photo: string = "";
}
