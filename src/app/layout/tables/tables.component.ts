import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Constants } from '../../constants/constants'

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    columnDefs = [
        {headerName: 'Name', field: 'student_name'},
        {headerName: 'Class', field: 'class',editable: true},
        {headerName: 'Gender', field: 'gender'},
        {headerName: 'Aadhar', field: 'aadhar'},
        {headerName: 'Stnid', field: 'stnid'},
        {headerName: 'Section', field: 'section'}

    ];
    rowData = [];
    constructor() {}

    ngOnInit() {
        fetch(Constants.API_ENDPOINT+'/students_ctrl.php/getall')
          .then(result => result.json())
          .then(rowData => this.rowData = rowData);
      }
}
