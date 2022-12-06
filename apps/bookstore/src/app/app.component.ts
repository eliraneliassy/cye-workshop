import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'cye-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  posts$?: Observable<any[]>;
  constructor(private httpClient: HttpClient, 
    private cdr: ChangeDetectorRef) {
    this.getPost();
  }

  getPost() {
    this.posts$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    
  }
}
