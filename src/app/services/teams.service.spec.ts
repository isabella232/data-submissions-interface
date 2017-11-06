import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TeamsService]
    });
  });

  it('should be created', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));
});
