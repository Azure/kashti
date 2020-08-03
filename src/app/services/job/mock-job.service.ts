import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Jobs } from '../../mock/jobs';
import { Job } from '../../models/job';
import { JobService } from './job.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MockJobService implements JobService {
  getJobs(buildId: string): Observable<Job[]> {
    return Observable.of(Jobs).map((jobs) =>
      jobs.sort(
        (a: Job, b: Job) =>
          new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
      )
    );
  }

  getJob(jobId: string): Observable<Job> {
    const filteredList = Jobs.filter((job: Job) => job.id === jobId);
    return Observable.of(filteredList[0]).delay(500);
  }
}
