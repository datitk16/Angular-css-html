import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menuItems: MenuItem[] = [
    {
      title: 'Home',
      route: 'home',
    },
    {
      title: 'Services',
      route: 'services',
    },
    {
      title: 'News',
      route: 'news',
    },
    {
      title: 'Blog',
      route: 'blog',
    },
    {
      title: 'Contact',
      route: 'contact',
    },
  ]
}
