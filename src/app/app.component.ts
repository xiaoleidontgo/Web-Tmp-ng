import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * 进度控制
   */
  _percent = 0;

  ngOnInit(): void {
  }

  /**
   * 增加进度
   */
  increase() {
    this._percent = this._percent + 10;
    if (this._percent > 100) {
      this._percent = 100;
    }
  }

  /**
   * 减少进度
   */
  decline() {
    this._percent = this._percent - 10;
    if (this._percent < 0) {
      this._percent = 0;
    }
  }
}
