import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vimejs-test';

  hlsConfig = {
    xhrSetup: function(xhr: any, url: string) {
      console.log('>>> ', url)

      if (url.indexOf('http://') === 0) {
        url = url.replace('http://', 'https://');
      }

      xhr.open('GET', url, true); 
    }
  };
}
