import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, ButtonModule, InputTextModule],
  exports: [ButtonModule, InputTextModule],
})
export class SharedModule {}
// This SharedModule imports and exports common UI components from PrimeNG.
// It includes ButtonModule for buttons and InputTextModule for text input fields, making them available throughout the application.