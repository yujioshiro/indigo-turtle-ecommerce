declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      LOCAL_DATABASE_URL: string | undefined;
      ONLINE_DATABASE_URL: string | undefined;
      PORT: string | undefined;
      SALT_ROUNDS: string | undefined;
      PUBLIC_ANON_KEY: string | undefined;
    }
  }
}
