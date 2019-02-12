import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "src/config/api.config";
import { Observable } from "rxjs";
import { ProcedimentoDTO } from "src/models/procedimento.dto";

@Injectable()
export class ProcedimentoService{
    constructor(public http: HttpClient){

    }

    findAll() : Observable<ProcedimentoDTO[]> {
        return this.http.get<ProcedimentoDTO[]>(`${API_CONFIG.baseUrl}/procedimentos`);
    }
}