import { Component } from '@angular/core';
import {ConfigurationService} from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feature-flags';

  config$ = this.configurationService.read();



  constructor(private readonly configurationService: ConfigurationService) {
  }

}
