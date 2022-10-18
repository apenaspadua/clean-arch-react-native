import { LoadUserList } from '../../../../domain/usecases/users/load-users'
import { HttpClient, HttpResponse } from '../../../protocols/http'
import { UserModel } from '../../../../domain/models';
import { makeApiUrl } from '../../../../ioc/helpers';

export class RemoteLoadUsers implements LoadUserList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  
  async load(): Promise<HttpResponse<UserModel[]>> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: `${makeApiUrl(this.url)}`
    })

    return httpResponse;
  }
}
