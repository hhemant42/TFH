import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChipsModule } from 'primeng/chips';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EditorModule } from 'primeng/editor';
import { ListboxModule } from 'primeng/listbox';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-project-ui-structure',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ToastModule,
    TooltipModule,
    TabViewModule,
    CardModule,
    ProgressBarModule,
    ChipsModule,
    MultiSelectModule,
    PasswordModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    EditorModule,
    ListboxModule,
    AccordionModule,
    ToolbarModule,
    PanelModule,
    MenuModule
  ],
  providers: [MessageService],
  templateUrl: './project-ui-structure.component.html',
  styleUrls: ['./project-ui-structure.component.scss']
})
export class ProjectUiStructureComponent {
  visible = false;
  date: Date = new Date();
  color: string = '#000000';
  chips: string[] = [];
  htmlText = '<p>Hello</p>';

  options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 }
  ];
  selectedCars = [];
  sourceCars = [...this.options];
  targetCars = [];

  products = [
    { code: 'P100', name: 'Product 1', category: 'Cat 1', quantity: 10 },
    { code: 'P200', name: 'Product 2', category: 'Cat 2', quantity: 20 }
  ];
  selectedProducts = [];

  menuItems = [
    { label: 'File', items: [{ label: 'New' }, { label: 'Open' }] }
  ];

  constructor(private messageService: MessageService) {}

  showToast() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'This is a toast message' });
  }
}
