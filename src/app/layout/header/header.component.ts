import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  imports: [CommonModule,MenuModule,ButtonModule,InputTextModule],  
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  appItems: MenuItem[] = [
    { label: 'SCRUM Board', icon: 'pi pi-th-large', routerLink: '/app/scrum-board' },
    { label: 'Tasks', icon: 'pi pi-check-square', routerLink: '/app/tasks' },
    { label: 'File Manager', icon: 'pi pi-folder', routerLink: '/app/file-manager' },
    { label: 'Mail', icon: 'pi pi-envelope', routerLink: '/app/mail' },
    { label: 'Messages', icon: 'pi pi-send', routerLink: '/app/messages' },
  ];

  userItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user', routerLink: '/app/profile' },
    { label: 'Plan & Upgrade', icon: 'pi pi-credit-card', routerLink: '/app/pricing/modern' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/app/user/settings' },
    { separator: true },
    { label: 'Logout', icon: 'pi pi-sign-out', routerLink: '/auth/modern/signin' }
  ];

  toggleSidebar() {
    // Emit event or toggle logic
  }

  onSearchClick() {
    // Show search box or dialog
  }
}
