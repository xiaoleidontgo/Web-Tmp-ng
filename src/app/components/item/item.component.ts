import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() curTag = 'java';
  @Input() title = '专栏 · 前端 1小时前 / javascript';
  @Input() content = '前端将数据转化为弹幕效果的实现方式';
  @Input() avatarUrl =
    'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLz44WGtTHNfKBcpf7eDz9qqLdXLJ6jcARC6Ow4BA27iajsXrshTcaCcYwZ83QaKLdTPTTJU6bic0Sw/132';
  @Input() startNum = '18';

  constructor() { }

  ngOnInit() {
  }

}
