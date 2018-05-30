import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { PersonalInfoComponent } from '../app/personal-info/personal-info.component';
import { EducationComponent } from '../app/education/education.component';
import { ExperienceComponent } from '../app/experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { NgAnalyzedModules } from '@angular/compiler';


export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'personal-info', component: PersonalInfoComponent},
    { path: 'education', component: EducationComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'portfolio', component: PortfolioComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);