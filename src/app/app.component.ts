import { Component, OnInit, ViewChild } from '@angular/core';
/**
 * How to import jQuery in Angular ?
 * More on https://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular#answer-40355691
 */
// import { $ } from 'jquery'; // ES6
import * as $ from 'jquery';
// declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('fullpage') fullpage;

  ngOnInit() {
    console.log('[test] $ :', $);
    console.log('[test] fullpage :', this.fullpage);
    $(this.fullpage.nativeElement).fullpage();
  }
}
