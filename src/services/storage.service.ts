import { Injectable } from "@angular/core";
import { STORAGE_KEY } from "src/config/storage_key.config";
import { LocalUser } from "src/models/local_user";

@Injectable()
export class StorageService{


    getLocalUser(): LocalUser{
        let usr = localStorage.getItem(STORAGE_KEY.localUser);
        if(usr == null){
            return null;
        }
        else{
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEY.localUser);
        }
        else{
            localStorage.setItem(STORAGE_KEY.localUser, JSON.stringify(obj));
        }
    }
}