import { Observable } from 'rxjs';
import { Comentarios, Comentario } from './comentarios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private httpClient: HttpClient) {}

  buscaComentario(idAnimal: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(
      `${API}/photos/${idAnimal}/comments`
    );
  }

  incluiComentario(idAnimal: number, commentText: string): Observable<Comentario> {
    return this.httpClient.post<Comentario>(
      `${API}/photos/${idAnimal}/comments`,
      { commentText }
    );
  }

}
