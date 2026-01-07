import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';


const userQuery = gql`
    query About {
      abouts(first: 1) {
        username
        shortBio
        longBio
        image { url }
        links { gitHub linkedIn }
      }
    }
  `;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) { }

  getData(): Observable<User> {
    return this.apollo
      .watchQuery<{ abouts: any[] }>({ query: userQuery })
      .valueChanges
      .pipe(
        map(response => response.data?.abouts?.[0] ?? null)
      );
  }
}
