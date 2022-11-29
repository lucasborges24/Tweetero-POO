import { Router } from "express";

class Route {
  constructor() {
    this.router = Router();
  }

  postRoute(path, rollback) {
    return this.router.post(path, rollback);
  }

  getRoute(path, rollback) {
    return this.router.get(path, rollback);
  }

  putRoute(path, rollback) {
    return this.router.put(path, rollback);
  }

  deleteRoute(path, rollback) {
    return this.router.delete(path, rollback);
  }
}

export default Route;
