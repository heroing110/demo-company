import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Season} from "../../../entity/season";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {TemplateCommonCtrl} from "../template-common-ctrl";

@Component({
  selector: 'app-season-template',
  templateUrl: './season-template.component.html',
  styleUrls: ['./season-template.component.css']
})
export class SeasonTemplateComponent extends TemplateCommonCtrl{
  datePickerOption = {
    singleDatePicker: true,
    "drops": "up"
  };

  @Input() season: Season;
  @Input() editFlag: boolean;
  @Output() save = new EventEmitter<Season>();

  checkbox1 = false;
  private showError: boolean = false;

  constructor( private router: Router) {
    super();
  }

  ngOnInit(){
    if (this.season.cell151) {
       this.checkbox1 = true;
    }
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
