import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { BuildComponent } from './build/build.component';
import { JobComponent } from './job/job.component';
import { LogComponent } from './log/log.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { ProjectResolver } from './services/resolvers/project.resolver';
import { BuildsResolver } from './services/resolvers/builds.resolver';
import { ProjectsBuildResolver } from './services/resolvers/projects-build.resolver';
import { BuildResolver } from './services/resolvers/build.resolver';
import { JobsResolver } from './services/resolvers/jobs.resolver';
import { JobResolver } from './services/resolvers/job.resolver';
import { LogResolver } from './services/resolvers/log.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',
    component: DashboardComponent,
    resolve: { projectsBuilds: ProjectsBuildResolver }
  },
  { path: 'projects/:id',
    component: ProjectComponent,
    resolve: { project: ProjectResolver, builds: BuildsResolver }
  },
  { path: 'builds/:id',
    component: BuildComponent,
    resolve: { build: BuildResolver, jobs: JobsResolver, job: JobResolver, log: LogResolver }
  },
  { path: 'styleguide', component: StyleGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: environment.routeDebugging })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
