import { authRepo } from "./repo.definition";
import { PAuthUser } from "../../../types/user-types";
import { cryptoSvc } from "../services/crypto.service";

// Store User With Salt,generate, send success message
export async function registerUser(emailID: string): Promise<PAuthUser | null> {
    try {
        // Check User Already Exists
        const userDetails = await authRepo.db.query<{ id: number; is_active: boolean }>(`SELECT id,is_active from todoapp.users where email like $1`, [
            emailID
        ]);

        const user = userDetails.rows;
        if (user && user[0] && user[0].id) {
            throw 'Already Registered!';
        }
        const dynamicSalt = await cryptoSvc.generateSalt();
        const data = await authRepo.db.query<{ id: number }>(`INSERT INTO todoapp.users(email, salt) values ($1,$2) RETURNING id`, [
            emailID,
            dynamicSalt
        ]);
        return {
            id: data.rows[0].id,
            email: emailID
        };
    } catch (e) {
        return null;
    }
}

// Check User active or not
export async function validateUser(emailID: string): Promise<PAuthUser | null> {
    try {
        const userDetails = await authRepo.db.query<{ id: number; is_active: boolean }>(`SELECT id,is_active from todoapp.users where is_active = true AND email like $1`, [
            emailID
        ]);

        const user = userDetails.rows;
        if (user && !user[0]) {
            throw 'User Not Found!';
        }
        return {
            id: user[0].id,
            email: emailID
        };
    } catch (e) {
        return null;
    }
}

//Create Hash from Salt and Store Password - User Activated!
export async function updatePassword(userDetails: PAuthUser): Promise<boolean | null> {
    try {
        const { id, password } = userDetails;
        const userSalt = await authRepo.db.query<{ salt: string }>(`SELECT salt from todoapp.users where id=$1`, [id]);
        const hash = await cryptoSvc.createHash(password as string, userSalt.rows[0].salt);
        await authRepo.db.query<{ email: string }>(`UPDATE todoapp.users set hash=$1,is_active=true WHERE id=$2 RETURNING email`, [
            hash,
            id
        ]);
        return true;
    } catch (e) {
        return null;
    }
}

//Compare User Plain pass with Hash
export async function validatePassword(userDetails: PAuthUser): Promise<PAuthUser|null> {
    try {
        const {id, password} = userDetails;
        const result = await authRepo.db.query<{hash: string; email: string}>(`SELECT hash,email from todoapp.users where id=$1 AND is_active = true`, [id]);
        const {email, hash} = result.rows[0];
        const isValid = await cryptoSvc.validateCrypto<string>(password as string, hash);
        if(!isValid) {
            throw 'Invalid password';
        }
        return {
            id: id as number,
            email
        };
    } catch (e) {
        return null;
    }
}

//User De-activated - isActive False
export async function deactivateUser(userDetails: PAuthUser): Promise<string|null> {
    try {
        const {id} = userDetails;
        const data = await authRepo.db.query<{ email: string }>(`UPDATE todoapp.users set is_active=false WHERE id=$1 RETURNING id`, [
            id
        ]);
        return data.rows[0].email;
    } catch (e) {
        return null;
    }
}