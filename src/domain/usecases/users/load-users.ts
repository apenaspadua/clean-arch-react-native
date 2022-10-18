import { LoadFunction } from '../../common/types'
import { UserModel } from '../../models'
import { HttpResponse } from '../../../application/protocols/http'

export interface LoadUserList extends LoadFunction<HttpResponse<UserModel[]>> {}
