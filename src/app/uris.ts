import { environment } from '../environments/environment';

export const apiBaseUrl = `${environment.apiBaseUrl}`;


export class URIS {

    public static readonly create = apiBaseUrl + '/task';
    public static readonly update = apiBaseUrl + '/task';
    public static readonly delete = apiBaseUrl + '/task/{taskId}';
    public static readonly getAll = apiBaseUrl + '/task/user/{userId}';

    public static readonly login = apiBaseUrl + '/api/v1/login';
}