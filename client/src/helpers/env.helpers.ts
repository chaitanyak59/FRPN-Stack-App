const getEnv = () => process.env;

export const getApiUrl = (): string => {
    const env = getEnv();
    return String(env.REACT_APP_SERVER_URL);
}

export const getNodeEnv = (): string => {
    const env = getEnv();
    return String(env.NODE_ENV);
};