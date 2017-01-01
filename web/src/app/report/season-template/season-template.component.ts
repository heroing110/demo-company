import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Season} from "../../../../../entity/season";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-season-template',
  templateUrl: './season-template.component.html',
  styleUrls: ['./season-template.component.css']
})
export class SeasonTemplateComponent {
  datePickerOption = {
    singleDatePicker: true,
    "drops": "up"
  };

  @Input() season: Season;
  @Input() editFlag: boolean;
  @Output() save = new EventEmitter<Season>();

  private showError: boolean = false;

  constructor( private router: Router) {
  }

  saveSeason(seasonForm: NgForm) {
    if (seasonForm.form.invalid) {
      this.showError = true;
      return;
    }
    this.save.next(this.season);
  }

  back(){
    this.router.navigate(['report/season/list'])
  }
}
