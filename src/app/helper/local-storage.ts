export class LocalStorageService {

    public static readonly TOKEN_KEY = 'token';

    constructor() { }

    public static signOut(): void {
        localStorage.removeItem(LocalStorageService.TOKEN_KEY);
    }

    public static saveToken(accessToken: string): void {
        localStorage.setItem(LocalStorageService.TOKEN_KEY, accessToken);
    }

    public static getToken(): string | null {
        return localStorage.getItem(LocalStorageService.TOKEN_KEY);
    }

    public static logout(): void {
         localStorage.removeItem(LocalStorageService.TOKEN_KEY);
    }

}
