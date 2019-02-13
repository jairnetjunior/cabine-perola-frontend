import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs";
import { EnderecoDTO } from "src/models/endereco.dto";

@Injectable()
export class EnderecoService {

    constructor(public http: HttpClient) {
    }

    findAllByCliente(pessoaId : string) : Observable<EnderecoDTO[]>  {
        return this.http.get<EnderecoDTO[]>(
            `${API_CONFIG.baseUrl}/enderecos/pessoaId?value=${pessoaId}`);
    }
}
