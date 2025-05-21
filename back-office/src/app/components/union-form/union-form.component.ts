import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UnionDTO } from '../../dto/union-dto.dto';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-union-form',
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    NgxMaskDirective,
  ],
  templateUrl: './union-form.component.html',
  styleUrl: './union-form.component.css',
  providers: [provideNgxMask({
    validation: true,
    dropSpecialCharacters: false,
  })],
})
export class UnionFormComponent {
  public unionDTO: UnionDTO = new UnionDTO();

constructor() {}

public save() {
  console.log('Save button clicked');
}

public backPage(){
  window.history.back();
}
}
