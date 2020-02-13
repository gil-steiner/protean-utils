import {Component, Input, OnInit} from '@angular/core';

enum PROJECTS {
  RedEye = 1,
  Arabica = 3,
  Cohiba = 2
}

@Component({
  selector: 'feature-flags-table',
  templateUrl: './feature-flags-table.component.html',
  styleUrls: ['./feature-flags-table.component.css']
})
export class FeatureFlagsTableComponent implements OnInit {
  @Input()
  data: [];

  isAllDisplayDataChecked = false;

  mapOfCheckedId: { [key: string]: boolean } = {};
  isIndeterminate = false;

  dbRow = '';
  sqlCommand = '';
  projectId = PROJECTS.Arabica;

  readonly projects = [
    {value: PROJECTS.RedEye, name: 'RedEye'},
    {value: PROJECTS.Arabica, name: 'Arabica'},
    {value: PROJECTS.Cohiba, name: 'Cohiba'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.updateStrings();
  }

  refreshStatus() {
    this.isAllDisplayDataChecked = this.data.every(feature => this.mapOfCheckedId[feature]);
    this.isIndeterminate = !this.isAllDisplayDataChecked && this.data.some(feature => this.mapOfCheckedId[feature]);

    this.updateStrings();
  }

  checkAll(isChecked: boolean) {
    this.data.forEach(feature => this.mapOfCheckedId[feature] = isChecked);

    this.updateStrings();
  }

  currentPageDataChange(e) {
  }

  private updateStrings() {
    const str = JSON.stringify(this.data.filter(feature => this.mapOfCheckedId[feature]));
    this.dbRow = `{allowedFeatures: ${str}}`;

    this.sqlCommand =
      `UPDATE 'ic_project_feature_flag' SET 'features_spec' = '${this.dbRow}' WHERE 'project_id' = ${this.projectId}`;
  }

}
