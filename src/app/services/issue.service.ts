import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  /**
   * this funciton used for get the all issues
   */
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  /**
   * this function is used for the get the result relavent to the id number
   */
  getIssuesById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  /**
   * this funciton used for the add an issue
   */

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issue/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issue/delete/{$id}`);
  }
}
