declare namespace NodeJS {
  export interface ProcessEnv {
    GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
    GOOGLE_PRIVATE_KEY: string;
    SPREADSHEET_ID: string;
  }
}
