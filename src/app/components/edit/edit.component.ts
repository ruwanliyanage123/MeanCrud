import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssuesById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.title);
        this.updateForm.get('description').setValue(this.issue.title);
        this.updateForm.get('severity').setValue(this.issue.title);
        this.updateForm.get('status').setValue(this.issue.title);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: '',
      status: ''
    });
  }

  updateIssue(title, responsible, description, severity, status) {
    this.issueService
      .updateIssue(this.id, title, responsible, description, severity)
      .subscribe(() => {
        this.snackBar.open('issue update', 'ok', {
          duration: 3000
        });
      });
  }
}
