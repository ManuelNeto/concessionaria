import { TestBed, inject } from '@angular/core/testing';

import { CadastraCarrosService } from './cadastra-carros.service';

describe('CadastraCarrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastraCarrosService]
    });
  });

  it('should be created', inject([CadastraCarrosService], (service: CadastraCarrosService) => {
    expect(service).toBeTruthy();
  }));
});
