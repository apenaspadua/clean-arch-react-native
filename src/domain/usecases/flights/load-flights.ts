import { LoadFunction } from '../../common/types'
import { UserModel } from '../../models'
import { HttpResponse } from '../../../application/protocols/http'

export interface LoadFlightsList extends LoadFunction<HttpResponse> {}
