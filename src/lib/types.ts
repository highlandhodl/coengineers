/**
 * API Types for Email Capture System
 */

// Valid signup sources
export type SignupSource =
  | "website"
  | "homepage"
  | "community-page"
  | "day-page";

// Request from subscribe form
export interface SubscribeRequest {
  email: string;
  source?: SignupSource;
}

// Successful API response
export interface SuccessResponse {
  success: true;
  message: string;
}

// Error API response
export interface ErrorResponse {
  success: false;
  error: string;
}

// Union type for all API responses
export type ApiResponse = SuccessResponse | ErrorResponse;

// Database subscriber record
export interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  unsubscribed: boolean;
  unsubscribed_at: string | null;
  unsubscribe_token: string;
  source: SignupSource;
}

// Database email send record
export interface EmailSend {
  id: string;
  subscriber_id: string;
  email_type: "welcome";
  sent_at: string;
  resend_id: string | null;
}
