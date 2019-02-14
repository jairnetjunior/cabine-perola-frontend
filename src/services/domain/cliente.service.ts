import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClienteDTO } from "src/models/cliente.dto";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "src/config/api.config";
import { EmailDTO } from "src/models/email.dto";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient,
      public storage: StorageService){
    }

    emailExiste(email: string) : Observable<EmailDTO> {
        return this.http.get<EmailDTO>(`${API_CONFIG.baseUrl}/clientes/emailexiste?value=${email}`);
    }

    findByEmail(email: string) : Observable<ClienteDTO> {
      return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
  }

    findById(id: string) : Observable<ClienteDTO> {
      return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/id?value=${id}`);
    }

    findTelefones(id: string) : Observable<string[]> {
      return this.http.get<string[]>(`${API_CONFIG.baseUrl}/clientes/${id}/telefones`);
  }

    insert(obj: ClienteDTO) {
      return this.http.post
        (`${API_CONFIG.baseUrl}/clientes`,
        obj,
        {
          observe: 'response',
          responseType: 'text'
        }
      );
    }
}