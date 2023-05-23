import { Component, Input, OnInit } from '@angular/core';
import { BlockModel } from '../models/block-name.model';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent {

  @Input() block?: BlockModel;

}
