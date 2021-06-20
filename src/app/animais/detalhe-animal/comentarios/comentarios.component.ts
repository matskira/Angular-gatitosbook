import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() idFotoAnimal!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(
      this.idFotoAnimal
    );
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravarComentario(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService
      .incluiComentario(this.idFotoAnimal, comentario)
      .pipe(
        switchMap(() =>
          this.comentariosService.buscaComentario(this.idFotoAnimal)
        ),
        tap(()=> {
          this.comentarioForm.reset();
          alert('Comentário Salvo!');
        })
      );
  }
}
