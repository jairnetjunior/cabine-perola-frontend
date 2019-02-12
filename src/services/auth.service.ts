import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "src/models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "src/config/api.config";
import { LocalUser } from "src/models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService{

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient,
        public storage: StorageService){
        
    }

    authenticate(creds: CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`, 
        creds, 
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    successfullLogin(authorization: string){
        let token = authorization.substring(7);
        let user: LocalUser = {
            token: token,
            email: this.jwtHelper.decodeToken(token).sub
        };
        this.storage.setLocalUser(user);

    }

    logOut(){
        this.storage.setLocalUser(null);
    }
}