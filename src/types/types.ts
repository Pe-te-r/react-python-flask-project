export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    error?: any
    token: string;
  }