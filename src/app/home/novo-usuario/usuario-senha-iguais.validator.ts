import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';// "??" operador nullish, caso o objeto seja nulo ou undefinied, o valor a direita será usado (ou seja vazio '');
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
