import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatSelect } from '@angular/material/select';
import { UnionsTable } from '../enum/genericEnum';

@Component({
  selector: 'app-union-list',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatOption,
    MatSelect,
    MatFormField,
  ],
  templateUrl: './union-list.component.html',
  styleUrl: './union-list.component.css',
})
export class UnionListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public searchValue: string = '';

  public selectedOrder: string = 'order';

  public dataSource = new MatTableDataSource<UnionsTable>(ELEMENT_DATA);
  public displayedColumns: string[] = ['id', 'name', 'condominium', 'email', 'status'];


  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
    debugger;
    this.changeDetectorRef.detectChanges();
  }

  public createUnion() {
    console.log('Create Union');
  }

  public filter(searchValue: string) {
    console.log('Filter:', searchValue);
  }
}

const ELEMENT_DATA: UnionsTable[] = [
  {
    id: 1,
    name: 'Hydrogen',
    condominium: 'Via Araguaia',
    email: 'hydrogen@gmail.com',
    status: 'ativo',
  },
  {
    id: 2,
    name: 'Helium',
    condominium: 'Residencial Sol',
    email: 'helium@gmail.com',
    status: 'inativo',
  },
  {
    id: 3,
    name: 'Lithium',
    condominium: 'Condomínio Estrela',
    email: 'lithium@gmail.com',
    status: 'ativo',
  },
  {
    id: 4,
    name: 'Beryllium',
    condominium: 'Jardim das Flores',
    email: 'beryllium@gmail.com',
    status: 'ativo',
  },
  {
    id: 5,
    name: 'Boron',
    condominium: 'Residencial Aurora',
    email: 'boron@gmail.com',
    status: 'inativo',
  },
  {
    id: 6,
    name: 'Carbon',
    condominium: 'Condomínio Verde',
    email: 'carbon@gmail.com',
    status: 'ativo',
  },
  {
    id: 7,
    name: 'Nitrogen',
    condominium: 'Residencial Harmonia',
    email: 'nitrogen@gmail.com',
    status: 'ativo',
  },
  {
    id: 8,
    name: 'Oxygen',
    condominium: 'Via Láctea',
    email: 'oxygen@gmail.com',
    status: 'inativo',
  },
  {
    id: 9,
    name: 'Fluorine',
    condominium: 'Residencial Bela Vista',
    email: 'fluorine@gmail.com',
    status: 'ativo',
  },
  {
    id: 10,
    name: 'Neon',
    condominium: 'Condomínio Horizonte',
    email: 'neon@gmail.com',
    status: 'ativo',
  },
  {
    id: 11,
    name: 'Sodium',
    condominium: 'Residencial Oceano',
    email: 'sodium@gmail.com',
    status: 'inativo',
  },
  {
    id: 12,
    name: 'Magnesium',
    condominium: 'Jardim Primavera',
    email: 'magnesium@gmail.com',
    status: 'ativo',
  },
  {
    id: 13,
    name: 'Aluminum',
    condominium: 'Residencial Pôr do Sol',
    email: 'aluminum@gmail.com',
    status: 'ativo',
  },
  {
    id: 14,
    name: 'Silicon',
    condominium: 'Condomínio Cristal',
    email: 'silicon@gmail.com',
    status: 'inativo',
  },
  {
    id: 15,
    name: 'Phosphorus',
    condominium: 'Residencial Luz',
    email: 'phosphorus@gmail.com',
    status: 'ativo',
  },
  {
    id: 16,
    name: 'Sulfur',
    condominium: 'Via Serenidade',
    email: 'sulfur@gmail.com',
    status: 'ativo',
  },
  {
    id: 17,
    name: 'Chlorine',
    condominium: 'Residencial Harmonia',
    email: 'chlorine@gmail.com',
    status: 'inativo',
  },
  {
    id: 18,
    name: 'Argon',
    condominium: 'Condomínio Estrela',
    email: 'argon@gmail.com',
    status: 'ativo',
  },
  {
    id: 19,
    name: 'Potassium',
    condominium: 'Residencial Sol',
    email: 'potassium@gmail.com',
    status: 'ativo',
  },
  {
    id: 20,
    name: 'Calcium',
    condominium: 'Jardim das Flores',
    email: 'calcium@gmail.com',
    status: 'inativo',
  },
];
