import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should add one message', inject([MessageService], (service: MessageService) => {
    service.add("hello, world");
    expect(service.messages.length).toBe(1);
    expect(service.messages[0]).toBe("hello, world");
    service.clear();
  }));

  it('should clear message', inject([MessageService], (service: MessageService) => {
    service.add('foo');
    service.add('bar');
    expect(service.messages.length).toBe(2);
    service.clear();
    expect(service.messages.length).toBe(0);
  }))
});
