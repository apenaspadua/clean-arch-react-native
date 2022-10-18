import { HttpClient, HttpResponse } from '../../../protocols/http'
import { makeApiUrl } from '../../../../ioc/helpers';
import { LoadFlightsList } from '../../../../domain/usecases/flights/load-flights';

export class RemoteLoadFlights implements LoadFlightsList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  
  async load(): Promise<HttpResponse> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${makeApiUrl(this.url)}`
    })

    return httpResponse;
  }
}
