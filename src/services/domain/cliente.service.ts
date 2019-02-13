import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClienteDTO } from "src/models/cliente.dto";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "src/config/api.config";
import { TelefoneDTO } from "src/models/telefone.dto";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient, public storage: StorageService){
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