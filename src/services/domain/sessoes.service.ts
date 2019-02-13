import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SessoesDTO } from "src/models/sessoes.dto";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class SessoesService{

    constructor(public http: HttpClient, public storage: StorageService){
    }

    findAll() : Observable<SessoesDTO[]> {
        return this.http.get<SessoesDTO[]>(`${API_CONFIG.baseUrl}/sessoes`);
    }

    insert(obj: SessoesDTO) {
      return this.http.post
        (`${API_CONFIG.baseUrl}/Sessoes`,
        obj,
        {
          observe: 'response',
          responseType: 'text'
        }
      );
    }
}