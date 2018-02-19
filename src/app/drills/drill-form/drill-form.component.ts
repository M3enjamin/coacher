import { Component, Output, OnInit, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Drill, Aspect } from '@shared/model';

@Component({
  selector: 'app-drill-form',
  templateUrl: './drill-form.component.html',
  styleUrls: ['./drill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrillFormComponent implements OnInit {
  @Output() createDrill = new EventEmitter<Drill>();

  form: FormGroup;
  formOpen = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ''
    });
  }

  submit() {
    this.createDrill.emit(this.form.value);
    this.formOpen = false;
    this.form.reset();
  }
}
