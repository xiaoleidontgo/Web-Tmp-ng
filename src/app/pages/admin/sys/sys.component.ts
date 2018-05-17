import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/';

  getUsers(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders) {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', sortField)
      .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    return this.http.get(`${this.randomUserUrl}`, {
      params: params
    });
  }

  constructor(private http: HttpClient) {
  }
}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sys',
  templateUrl: './sys.component.html',
  styleUrls: ['./sys.component.css'],
  providers: [RandomUserService],
})
export class SysComponent implements OnInit {

  title = '系统用户管理';

  searchValue = '';

  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];

  // 查询区域表单数据
  validateForm: FormGroup;


  _dateRange = [new Date(), new Date(Date.now() + 3600 * 24 * 5 * 1000)];

  constructor(private _randomUser: RandomUserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.refreshData();
    this.validateForm = this.fb.group({
      formLayout: [ 'inline' ],
      userName  : [ null, [ Validators.required ] ],
      timerange : [null]
    });
  }

  submitForm() {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }


  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
      this._loading = false;
      this._total = 200;
      this._dataSet = data.results;
    });
  }
  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }
  search() {
    // const searchAddress = this.filterAddressArray.filter(address => address.value);
    // const filterFunc = (item) => {
    //   return (searchAddress.length ? searchAddress.some(address => item.address.indexOf(address.name) !== -1) : true) &&
    //     (item.name.indexOf(this.searchValue) !== -1)
    // };
    // this.data = [ ...this.copyData.filter(item => filterFunc(item)) ];
    // this.data = [ ...this.data.sort((a, b) => {
    //   if (a[ this.sortName ] > b[ this.sortName ]) {
    //     return (this.sortValue === 'ascend') ? 1 : -1;
    //   } else if (a[ this.sortName ] < b[ this.sortName ]) {
    //     return (this.sortValue === 'ascend') ? -1 : 1;
    //   } else {
    //     return 0;
    //   }
    // }) ];
  }
}
