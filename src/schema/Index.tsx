import * as yup from "yup";
import { differenceInYears } from "date-fns";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// EMAIL VAL.
export const emailValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

// MOBILE VAL.
export const mobileValidationSchema = yup.object({
  phone: yup
    .string()
    .test(
      "is-valid-phone",
      "Phone number must be in a valid format",
      (value) => {
        if (!value) return false; // Ensure the value exists
        try {
          const phoneNumber = parsePhoneNumberFromString(value);
          return phoneNumber?.isValid();
        } catch (error) {
          return false;
        }
      }
    )
    .required("Phone number is required"),
});

// PASSWORD SCHEMA
export const passwordValidationSchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Passwords must match")
    .required("Please confirm your new password"),
});

// WEBTHREE AUTH
export const nickRefSchema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /^(?=(.*[a-zA-Z]){3,})(?=.*[0-9._-])[a-zA-Z0-9._-]+$/,
      "Must have at least 3 letters and 1 character or number"
    )
    .required("Nickname is required"),

  referralCode: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]{6,12}$/,
      "Referral code must be between 6 to 12 alphanumeric characters"
    )
    .notRequired(),
});

// KYC VERIFY
export const kycVerifySchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name cannot exceed 50 characters")
    .required("Full Name is required"),
  dob: yup
    .date()
    .required("Date of birth is required")
    .test("age", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const age = differenceInYears(new Date(), new Date(value));
      return age >= 18;
    }),
  docType: yup
    .string()
    .oneOf(
      ["passport", "driver_license", "national_id"],
      "Invalid document type"
    )
    .required("Document Type is required"),
  ninNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, "NIN Number must be exactly 11 digits")
    .required("NIN Number is required"),
});

// WITHDRAW TO BANK
export const withdrawToBankSchema = yup.object().shape({
  bankAccount: yup
    .string()
    .required("Bank Account is required")
    .matches(/^\d+$/, "Bank Account must be numeric"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),
  currency: yup
    .string()
    .oneOf(["USD", "GBP", "EUR", "NGN"], "Invalid currency")
    .required("Currency is required"),
  accountPin: yup
    .string()
    .length(4, "PIN must be exactly 4 digits")
    .matches(/^\d{4}$/, "PIN must contain only numbers")
    .required("Account PIN is required"),
});

// WITHDRAW TO CRYPTO
export const withdrawToCryptoSchema = yup.object().shape({
  walletAddress: yup
    .string()
    .required("Wallet Address is required")
    .matches(/^0x[a-fA-F0-9]{40}$/, "Enter a valid wallet address"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),
  currency: yup
    .string()
    .oneOf(["USD", "EUR", "NGN"], "Select a valid currency")
    .required("Currency is required"),
  accountPin: yup
    .string()
    .required("Account PIN is required")
    .min(4, "PIN must be at least 4 characters")
    .max(6, "PIN cannot be more than 6 characters"),
});

// ADD CRYPTO ADDRESS
export const cryptoAddressSchema = yup.object().shape({
  cryptoType: yup.string().required("Crypto type is required"),
  walletAddress: yup
    .string()
    .required("Wallet address is required")
    .matches(/^0x[a-fA-F0-9]{40}$/, "Invalid wallet address format"),
  addressLabel: yup.string().required("Address label is required"),
});

// ADD BANK
export const bankAccountSchema = yup.object().shape({
  bankName: yup.string().required("Bank Name is required"),
  account: yup
    .string()
    .matches(/^\d+$/, "Account number must be numeric")
    .min(10, "Account number must be at least 10 digits")
    .required("Account number is required"),
});

// ADD VIRTUAL ACCOUNT
export const virtualAccountSchema = yup.object().shape({
  bankName: yup
    .string()
    .required("Bank name is required")
    .min(2, "Bank name must be at least 2 characters")
    .max(50, "Bank name cannot exceed 50 characters"),
  account: yup
    .string()
    .required("Account number is required")
    .matches(/^\d{10}$/, "Account number must be 10 digits"),
  accountName: yup
    .string()
    .required("Account name is required")
    .min(2, "Account name must be at least 2 characters")
    .max(50, "Account name cannot exceed 50 characters"),
});

// FUND WITH CARD
export const cardFundSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Amount must be a valid number")
    .required("Amount is required")
    .min(1, "Amount must be greater than 0"),
  currency: yup
    .string()
    .required("Currency is required")
    .oneOf(["USD", "EUR", "NGN"], "Invalid currency"),
});

// KYC
export const kycSbmitSchema = yup.object().shape({
  //FIRST TO OPEN
  ninNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, "NIN Number must be exactly 11 digits")
    .required("NIN Number is required"),
  dob: yup
    .date()
    .required("Date of birth is required")
    .test("age", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const age = differenceInYears(new Date(), new Date(value));
      return age >= 18;
    }),

  //SECOND FIELDS AUTO FILL BY NIN DATA
  firstName: yup
    .string()
    .min(2, "First name is too short!")
    .max(50, "First name is too long!")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name is too short!")
    .max(50, "Last name is too long!")
    .required("Last name is required"),

  stateOfOrigin: yup.string().required("State of Origin is required"),
  stateOfResidence: yup.string().required("State of Residence is required"),
});

// OTP
export const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .required("OTP is required")
    .length(6, "OTP must be exactly 6 digits"),
});

// LOGIN
export const loginSchema = yup.object().shape({
  emailOrPhoneOrUsername: yup
    .string()
    .required("Email, phone number, or username is required")
    .test(
      "emailOrPhoneOrUsername",
      "Please enter a valid email address, phone number, or username",
      function (value) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{11}$/;
        const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/; // Username: 3+ alphanumeric characters with optional `_` or `-`
        return (
          emailRegex.test(value) ||
          phoneRegex.test(value) ||
          usernameRegex.test(value)
        );
      }
    ),
});

// CONTACT
// Validation schema using yup
export const contactSchema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email Address is required"),
  message: yup.string().required("Message is required"),
});

// CURRENCY
export const currencyValidationSchema = yup.object().shape({
  currency: yup
    .string()
    .required("Currency is required")
    .oneOf(["USD", "EUR", "GBP", "JPY", "NGN"], "Invalid currency selected"),
});

// WITHDRAWAL/DEPOSIT ISSUE
export const withdrawDepositIssueSchema = yup.object().shape({
  currencyType: yup.string().required("Currency type is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .positive("Amount must be greater than zero"),
  currency: yup.string().required("Currency is required"),
  transactionId: yup.string().required("Transaction ID is required"),
  issueType: yup.string().required("Issue type is required"),
  description: yup
    .string()
    .required("Description is required")
    .max(500, "Description cannot exceed 500 characters"),
  attachment: yup.mixed().notRequired(),
});

// BONUS ISSUE
export const bonusClaimIssueSchema = yup.object().shape({
  bonusType: yup.string().required("Currency type is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .positive("Amount must be greater than zero"),
  currency: yup.string().required("Currency is required"),

  description: yup
    .string()
    .required("Description is required")
    .max(500, "Description cannot exceed 500 characters"),
  attachment: yup.mixed().notRequired(),
});

// COMMENT REPORT
export const commentReportSchema = yup.object().shape({
  reportingType: yup.string().required("Please select a reporting type"),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description can't exceed 500 characters")
    .required("Please provide a description"),
});
