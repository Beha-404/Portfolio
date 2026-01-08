import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  
  public projectData!: Observable<Project[]>;
  
  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.projectData = this.projectService.getData();
    console.log(this.projectData);
  }
}
