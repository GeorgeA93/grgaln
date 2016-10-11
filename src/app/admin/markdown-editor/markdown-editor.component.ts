import { Component, OnInit } from '@angular/core';
import * as Marked from 'marked';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css']
})
export class MarkdownEditorComponent implements OnInit {

  markdownText: string;
  previewHtml: string;

  constructor() { }

  ngOnInit() {
    this.markdownText = "Hello World";
    this.previewHtml = Marked(this.markdownText);
  }

  markdownChanged(event: string) {
    this.markdownText = event;
    this.previewHtml = Marked(this.markdownText);
  }

}
