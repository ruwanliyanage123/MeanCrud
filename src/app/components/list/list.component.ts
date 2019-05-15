import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { Issue } from 'src/app/issue.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private issueService: IssueService, private router: Router) {}

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('data requested...');
      console.log(this.issues);
    });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}
