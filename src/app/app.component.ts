import { Component } from '@angular/core';
import { AppService } from './app.servie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = '';
  message: string = '';
  private sendMessageSub: Subscription = null;

  constructor(private readonly appService: AppService) {

  }

  send(): void {
    if (!!this.sendMessageSub) {
      this.sendMessageSub.unsubscribe();
    }
    this.sendMessageSub = this.appService.sendMessage({ name: this.name }).subscribe((response) => {
      // console.log('response::: ', response);
      this.message = response.body.text;
    });
  }
}
