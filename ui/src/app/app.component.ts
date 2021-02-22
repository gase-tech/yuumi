import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'yuumi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'yuumi';

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
    console.log('CONFIG:', this.configService.config);
  }
}
