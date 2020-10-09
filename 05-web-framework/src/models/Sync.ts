import Axios, { AxiosPromise } from "axios";
import { Entity } from "./Entity";


interface Sync<T extends Entity> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}


class APISync<T extends Entity> implements Sync<T> {
  constructor(private rootUrl: string) {};

  fetch = (id: number): AxiosPromise<T> => {
    return Axios.get(`${this.rootUrl}/${id}`);
  }

  save = (data: T): AxiosPromise<T> => {
    const { id } = data;
    if (id) return this.update(id, data);
    return Axios.post(`${this.rootUrl}`, data);
  }

  private update = (id: number, data: T): AxiosPromise<T> => {
    return Axios.put(`${this.rootUrl}/${id}`, data);
  }
}

export { APISync, Sync };