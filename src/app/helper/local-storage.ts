export class LocalStorageService {

    public static readonly TOKEN_KEY = 'token';
    public static readonly USER_KEY = 'userId';

    constructor() { }

    public static saveTokenAndUserId(accessToken: string, userId: string): void {
        localStorage.setItem(LocalStorageService.TOKEN_KEY, accessToken);
        localStorage.setItem(LocalStorageService.USER_KEY, userId);
    }

    public static getToken(): string | null {
        return localStorage.getItem(LocalStorageService.TOKEN_KEY);
    }

    public static logout(): void {
        localStorage.removeItem(LocalStorageService.TOKEN_KEY);
        localStorage.removeItem(LocalStorageService.USER_KEY);
    }

    public static getUserId(): string {
        return localStorage.getItem(LocalStorageService.USER_KEY) as string;
    }

}
