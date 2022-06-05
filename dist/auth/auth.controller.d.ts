import { AuthService } from './auth.service';
export declare class AuthController {
    private _authService;
    constructor(_authService: AuthService);
    login(user: any): Promise<{
        access_token: string;
    }>;
}