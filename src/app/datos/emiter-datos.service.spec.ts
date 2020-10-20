import { TestBed } from '@angular/core/testing';

import { EmiterDatosService } from './emiter-datos.service';

describe('EmiterDatosService', () => {
  let service: EmiterDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmiterDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
