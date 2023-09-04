import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];
  private loggedInUser: string = '';

  constructor() { }

  addUser(username: string, password: string) {
    this.users.push({ username, password });
  }

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
}