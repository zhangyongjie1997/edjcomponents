export class StorageLocal {
  constructor(prefix = "edaijia") {
    this.prefix = prefix + "-";
  }
  set(name, value) {
    localStorage.setItem(this.prefix + name, value);
  }
  get(name) {
    return localStorage.getItem(this.prefix + name);
  }
  remove(name) {
    localStorage.removeItem(this.prefix + name);
  }
  clear() {
    localStorage.clear();
  }
}

export class StorageSession {
  constructor(prefix = "edaijia") {
    this.prefix = prefix + "-";
  }
  set(name, value) {
    sessionStorage.setItem(this.prefix + name, value);
  }
  get(name) {
    return sessionStorage.getItem(this.prefix + name);
  }
  remove(name) {
    sessionStorage.removeItem(this.prefix + name);
  }
  clear() {
    sessionStorage.clear();
  }
}
