export interface SuccessReponse<T = {}> {
    success: boolean;
    payload: T;
}
