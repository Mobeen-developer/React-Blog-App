import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    // signup
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call login method
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
            
        } catch (error) {
            console.log("Appwrite error :: in SignUp :: ", error)
        }
    }

    // login Mehtod
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            console.log("Appwrite error :: in Login :: ", error)
        }
    }

    // get currently loggedIn user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error :: in Getting User :: ", error)
        }

        return null;
    }

    // logout method
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite error :: in Logout :: ", error)
        }
    }
}

// creating object
const authService = new AuthService()

// export object
export default authService