import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drill } from '@shared/model';

@Component({
  selector: 'cchr-new-drill-form',
  templateUrl: './new-drill-form.component.html',
  styleUrls: ['./new-drill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDrillFormComponent implements OnInit {
  @Input() formOpen: boolean;

  @Output() createDrill = new EventEmitter<{ drill: Drill; public: boolean }>();
  @Output() cancelCreate = new EventEmitter<any>();

  public = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ''
    });
  }

  submit() {
    this.createDrill.emit({ drill: this.form.value, public: this.public });
    this.form.reset();
  }

  cancel() {
    this.cancelCreate.emit();
    this.form.reset();
  }
}
