import bcrypt from 'bcrypt';
import { generateRandomSalt } from '../../../helpers/app.helpers';

class CryptoService {
    private cryptoLib: any;
    constructor() {
        this.cryptoLib = bcrypt;
    }

    private get getSaltRounds(): number {
        return generateRandomSalt();
    }

    public async generateSalt(): Promise<string>  {
        const cryptoSalt: string = await this.cryptoLib.genSalt(this.getSaltRounds);
        return cryptoSalt;
    }

    public async createHash(withInput: string, salt: string): Promise<string>  {
        const hash: string = await this.cryptoLib.hash(withInput, salt);
        return hash;
    }

    public async validateCrypto<T>(withInput: T, hash: string): Promise<boolean>  {
        const isValid: boolean = await this.cryptoLib.hash(withInput, hash);
        return isValid;
    }
}

export const cryptoSvc = new CryptoService();