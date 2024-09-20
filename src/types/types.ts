export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    error?: any
    access_token: string;
  }