export type SignupData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: string;
};

export type SignupResponse = {
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
