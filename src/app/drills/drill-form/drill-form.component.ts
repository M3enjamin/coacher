import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Drill } from "@shared/model";

@Component({
  selector: "app-drill-form",
  templateUrl: "./drill-form.component.html",
  styleUrls: ["./drill-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrillFormComponent implements OnInit {
  @Input() formOpen: boolean;

  @Output() createDrill = new EventEmitter<Drill>();
  @Output() cancelCreate = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      description: ""
    });
  }

  submit() {
    this.createDrill.emit(this.form.value);
    this.form.reset();
  }

  cancel() {
    this.cancelCreate.emit();
    this.form.reset();
  }
}
