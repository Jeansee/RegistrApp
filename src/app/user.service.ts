import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];
  private loggedInUser: string = '';

  constructor() { }

  //agregar un usuario
  addUser(username: string, password: string) {
    this.users.push({ username, password });
  }

  //obtener un usuario por nombre
  getUser(username: string) {
    return this.users.find((user) => user.username === username);
  }

  // Método para guardar el nombre de usuario
  setLoggedInUser(username: string) {
    this.loggedInUser = username;
  }

  // Método para recuperar el nombre de usuario
  getLoggedInUser() {
    return this.loggedInUser;
  }

  // Actualizar la contraseña de un usuario por el nombre q ponga
  updatePassword(nombre: string, nuevaContrasena: string){
    const user = this.getUser(nombre);
    if(user){
      user.password = nuevaContrasena;
    }
  }
}