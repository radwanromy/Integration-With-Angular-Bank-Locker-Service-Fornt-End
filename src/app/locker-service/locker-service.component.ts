import { Component, OnInit } from '@angular/core';
import { Locker } from '../locker';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { LockerService } from '../locker.service';
@Component({
  selector: 'app-locker-service',
  templateUrl: './locker-service.component.html',
  styleUrls: ['./locker-service.component.css']
})
export class LockerServiceComponent implements OnInit {


  lockers : Locker[] = [];
  // formValue !: FormGroup
  // showExecute !: boolean;
  // showUpdate !: boolean;
//private formBuilder : FormBuilder,
  constructor( private lockerService : LockerService) { }

  ngOnInit(): void {
    // this.formValue=this.formBuilder.group({
    //   relid:[''],
    //   oprbrancd: [''],
    //  cuscod: [''],
    //   brancd: [''],
    //  actype:[''],
    //   actnum:[''],
    // lckrid:[''],
    //  drwrid:[''],
    //  remarks:[''],
    //  reldate:[''],
    //   paystat:[''],      
    //  oprstamp:[''],
    //  oprtimstamp:[''],
    //  update_by:[''],
    // update_date:[''],
    //   appflg:[''],
    //  appstamp:[''],
    //  apptimstamp: [''],
    // })
    this.getLockers();

  }
  private getLockers(){
    this.lockerService.getLocker_service().subscribe(data => {
      this.lockers = data;
    })
  }

}
