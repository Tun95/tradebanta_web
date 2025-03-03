//AUTHENTICATION

//REGISTER
export interface RegisterValues {
  username: string;
  email: string;
  referralCode: string;
}

//KYC
export interface VerifyKycValues {
  ninNumber: string;
  dob: string;
}

export interface SubmitKycValues {
  ninNumber: string;
  dob: string;
  gender: string;
  firstName: string;
  lastName: string;
  stateOfOrigin: string;
  stateOfResidence: string;
}

export interface FetchedKYCData {
  userData: {
    firstName: string;
    lastName: string;
    stateOfOrigin: string;
    stateOfResidence: string;
  };
}

//OTP
export interface OtpValues {
  otp: string;
}

export interface OtpState {
  loading: boolean;
  error: string;
}

export interface OtpAction {
  type: "SUBMIT_REQUEST" | "SUBMIT_SUCCESS" | "SUBMIT_FAIL";
  payload?: string;
}

//LOGIN
export interface LoginValues {
  emailOrPhoneOrUsername: string;
}
