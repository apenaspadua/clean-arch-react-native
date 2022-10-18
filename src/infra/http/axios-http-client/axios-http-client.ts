import axios, { AxiosResponse } from 'axios'
import { 
    HttpResponse,
    HttpClient,
    HttpRequest } from '../../../application/protocols/http'

export class AxiosHttpClient implements HttpClient {
  
    async request({
      method,
      url,
      body,
      headers
    }: HttpRequest): Promise<HttpResponse<any>> {
      let axiosResponse: AxiosResponse
  
      try {
        axiosResponse = await axios.request({
          url,
          data: body,
          headers: { ...headers },
          method
        })
      } catch (error: any) {
        axiosResponse = error?.response
      }
  
      return {
        statusCode: axiosResponse?.status,
        body: axiosResponse?.data
      }
    }
  
  }
