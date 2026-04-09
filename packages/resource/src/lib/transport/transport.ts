export interface Transport {
  execute(request: Request): Promise<Response>;
}

export class HttpTransport implements Transport {
  execute(request: Request): Promise<Response> {
    return fetch(request);
  }
}
