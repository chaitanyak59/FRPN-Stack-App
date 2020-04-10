const getEnv = () => process.env;

export const getSSLConnection = (): boolean => {
    const env = getEnv();
    return Number(env.PGSSLMODE) > 0;
};

export const getServerPort = (): number => {
    const env = getEnv();
    return Number(env.PORT);
};

export const getServerHost = (): string => {
    const env = getEnv();
    return String(env.HOST);
};

export const getNodeEnv = (): string => {
    const env = getEnv();
    return String(env.NODE_ENV);
};

export const getDbURL = (): string => {
    const env = getEnv();
    return env.DATABASE_URL as string;
};

export const getDbMaxConnections = (): number => {
    const env = getEnv();
    return Number(env.MAX_CONNECTIONS);
};