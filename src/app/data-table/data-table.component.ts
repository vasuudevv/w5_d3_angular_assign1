import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public dataJson = [] as any
  public errorMssg: any
  public totalRecords: any
  public page = 1
  public maxSize = 3
  
  constructor(private _dataTableService: DataTableService) { 
    
  }

  ngOnInit(): void {
   this._dataTableService.getData()
    .subscribe((data) =>{ this.dataJson = data,
      (error: any) => this.errorMssg = error
    
      this.totalRecords = data.length
      //console.log(this.dataJson)
    })
    
      

  }
 
  
  

}
