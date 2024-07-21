import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import {HttpClientTestingModule} from '@angular/common/http/testing'

import * as mockRaw from '../../../data/user.json'
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser =  (mockRaw as any).default
  let httpClientSpy: {
    post:jasmine.Spy
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  //TODO: Prueba del sendCredentials
  it('Debe de retornar un Objeto con "data" y "tokenSession"', 
    (done:DoneFn) => {
    //TODO: Arrange
    
    const user:any = mockUser.userOk
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x0'
    }
    httpClientSpy.post.and.returnValue(
      of(mockResponse) //TODO: ya retorna un observable y no genera error
    )

    //TODO: Act

    service.sendCredentials(user.email, user.password).subscribe(
      responseApi => {
        
        const getProperties  = Object.keys(responseApi)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')

        done()

        // console.log('🆗🆗🆗', responseApi)



      }
    )

    //TODO: Assert

  });

});
