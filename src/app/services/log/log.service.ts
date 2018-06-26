import { Observable } from 'rxjs/Observable';
import { Job } from '../../models/Job';
import { Log } from '../../models/Log';

export abstract class LogService {
  abstract getLog(jobId: string): Observable<Log>;
}
