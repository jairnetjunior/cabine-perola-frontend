import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs";
import { AgendamentoDTO } from "src/models/agendamento.dto";

@Injectable()
export class AgendamentoService {

    constructor(public http: HttpClient) {
    }

    findAllByCliente(clienteId : string) : Observable<AgendamentoDTO[]>  {
        return this.http.get<AgendamentoDTO[]>(
            `${API_CONFIG.baseUrl}/agendamentos/clienteId?value=${clienteId}`);
    }
}
