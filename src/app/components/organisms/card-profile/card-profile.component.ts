import { Component, Input } from '@angular/core';
import { ImageComponent } from '../../atoms/image/image.component';
import { ProfileInterface } from '../../../interfaces/profile';
import { CategoryComponent } from '../../molecules/category/category.component';
import { TextComponent } from '../../atoms/text/text.component';
import { DatePipe } from '@angular/common';
import { TitleComponent } from '../../molecules/title/title.component';
import { DescriptionComponent } from '../../molecules/description/description.component';
import { ProfileNameComponent } from '../../molecules/profile-name/profile-name.component';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [
    ImageComponent,
    CategoryComponent,
    TextComponent,
    DatePipe,
    TitleComponent,
    DescriptionComponent,
    ProfileNameComponent
  ],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css'
})
export class CardProfileComponent {
  @Input({ required: true }) profile: ProfileInterface = {
    category: "",
    createdAt: Date.now(),
    description: "",
    image: "",
    name: "",
    photo: "",
  };
}
