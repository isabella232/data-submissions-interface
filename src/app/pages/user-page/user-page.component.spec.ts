/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, TokenService } from 'angular-aap-auth';

import { MockRouter } from '../../testing/mockrouter.tests';

import { UserPageComponent } from './user-page.component';
import { EbiHeaderComponent } from '../../components/ebi-header/ebi-header.component';

import { environment } from '../../../environments/environment';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageComponent, EbiHeaderComponent ],
      providers: [
        {provide: Router, useClass: MockRouter},
        AuthService,
        TokenService,
        {
          provide: 'AAP_CONFIG',
          useValue: {
            authURL: environment.authenticationHost
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
