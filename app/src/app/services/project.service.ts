import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Project } from '../models/project.model';

const projectQuery = gql`
  query Project {
    projects(first: 5) 
    {
      description
      link
      title
      image { url }
    }
  }
`;


@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private apollo: Apollo) { }

  getData(): Observable<Project[]> {
    return this.apollo
    .watchQuery<any>({ query: projectQuery })
    .valueChanges
    .pipe(
      map(
        response => response.data?.projects ?? [])
      );
  }

}
