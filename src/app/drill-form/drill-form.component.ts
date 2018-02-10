import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Drill } from '../shared/model/drill';

@Component({
  selector: 'app-drill-form',
  templateUrl: './drill-form.component.html',
  styleUrls: ['./drill-form.component.scss']
})
export class DrillFormComponent implements OnInit {
  @Output() createDrill = new EventEmitter<Drill>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: '',
      description: '',
      aspect: '',
      minPlayers: '',
      maxPlayers: ''
    });
  }

  submit() {
    console.log(this.form.value);
    this.createDrill.emit(this.form.value);
  }
}
