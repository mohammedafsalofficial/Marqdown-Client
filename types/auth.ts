export type SignupFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  user?: {
    fullName: string;
    email: string;
    createdAt: string;
  };
  errors?: {
    field: string;
    message: string;
  }[];
  token?: string;
  requiresEmailVerification?: boolean;
  redirectUrl?: string;
  metadata?: Record<string, any>;
};
