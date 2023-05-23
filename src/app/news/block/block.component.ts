import { Component, Input } from '@angular/core';
import { BlockModel } from '../models/block-name.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {

  @Input() block?: BlockModel;

}
