import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FuncionarioDTO } from "src/models/funcionario.dto";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class FuncionarioService{

    constructor(public http: HttpClient, public storage: StorageService){
    }

    findByEmail(email: string) : Observable<FuncionarioDTO> {
        return this.http.get<FuncionarioDTO>(`${API_CONFIG.baseUrl}/funcionarios/email?value=${email}`);
    }

    findById(id: string) : Observable<FuncionarioDTO> {
        return this.http.get<FuncionarioDTO>(`${API_CONFIG.baseUrl}/funcionarios/id?value=${id}`);
    }

    insert(obj: FuncionarioDTO) {
      return this.http.post
        (`${API_CONFIG.baseUrl}/funcionarios`,
        obj,
        {
          observe: 'response',
          responseType: 'text'
        }
      );
    }
}