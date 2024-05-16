import { Session } from "next-auth";
import { User } from "next-auth";

// Session 型の拡張
export interface CustomSession extends Session {
  accessToken?: string;
  client?: string;
  uid?: string;
}

// User 型の拡張
export interface CustomUser extends User {
  accessToken?: string;
  client?: string;
  uid?: string;
}
