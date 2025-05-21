import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  imports: [MatSidenavModule, MatButtonModule, CommonModule, MatIconModule, RouterOutlet, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})

export class SideNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuList = [
      { name: 'Painel', icon: 'side-painel-icon', route: '/home', selected: false, visible: true },
      // { name: 'Painel', icon: 'side-painel-icon', route: '/home', selected: false, visible: true },
      // { name: 'Painel', icon: 'side-painel-icon', route: '/home', selected: false, visible: true },
      // { name: 'Painel', icon: 'side-painel-icon', route: '/home', selected: false, visible: true },
      // { name: 'Painel', icon: 'side-painel-icon', route: '/home', selected: false, visible: true },
    ];
  }

  public menuList:any[] = [];


  public selectItem(selectedItem: { selected: boolean; }):any {
    this.menuList.forEach(item => item.selected = false);
    selectedItem.selected = true;
  }
}
