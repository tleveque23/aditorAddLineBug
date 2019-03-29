import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  editorText: string;
  editMode: boolean = false;
  textToCopy: string;

  public ngOnInit(): void {

    this.textToCopy = '<p>Title:</p><ol><li>line 1</li><li>Line 2</li><li>Line 3</li></ol>';
  }
}
