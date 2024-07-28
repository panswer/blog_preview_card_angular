import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProfileComponent } from './components/organisms/card-profile/card-profile.component';
import { ProfileInterface } from './interfaces/profile';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profile: ProfileInterface = {
    image: "/assets/images/illustration-article.svg",
    photo: "/assets/images/image-avatar.webp",
    category: "learning",
    createdAt: Date.now(),
    description: "These lenguages are the backbone of every website, defining structure, content, and presentation.",
    name: "greg hooper"
  };
}
