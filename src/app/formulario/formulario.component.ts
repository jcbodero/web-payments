import {ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
/* import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; */

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule,/* MatSlideToggleModule,MatFormFieldModule, MatInputModule, MatSelectModule */],
  templateUrl: './formulario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent {
  formData = { nombre: '', email: '', password: '' };

  enviarFormulario() {
    console.log(this.formData);
  }
}
