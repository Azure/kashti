import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BRIGADE_API_HOST } from '../../app.config';
import { JobService } from '../job/job.service';
import { LogService } from './log.service';
import { Job } from '../../models/Job';
import { Log } from '../../models/Log';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ApiLogService implements LogService {
  constructor(private http: HttpClient) {}

  getLog(jobId): Observable<Log> {
                                      
                                      // test IDs for debugging jobID
                                      // large log: az-01ce52bg33gyjm8nj1x5hzcb51
                                      // small log:  end-run-01ce4rm99edd09dk82zh9h5pxt
    const logUrl = `${BRIGADE_API_HOST}/v1/job/helmdocs-01cgw3wkwz9r9t62sy5dvr3494/logs`;
    const options = {responseType: 'text' as 'json'};

    return this.http
      .get<Log>(logUrl, options);
  }
}
