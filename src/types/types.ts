export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    error?: any
    access_token: string;
  }

  export interface RegisterRequest {
    name:string;
    contact: string;
    address: string;
    email: string;
    username: string;
    password: string;
  }

  export interface RegisterResponse {
    error?: any
    message: string;
  }