// three options to solve sync dependencies on user:
// 1. Sync gets functions arguments -> Would still use UserProps
// 2. Sync expects arguments that satisfy interfaces 'Serialize' (to save) and 'Deserialize' (to fetch) -> Does not describe all the info of the object.
// 3. Sync is a generic class to customize the type of data to save -> More complex, but reusable for all entities.

import axios, { AxiosPromise } from 'axios'

interface Identifiable {
  id?: number;
}

export class Sync<T extends Identifiable> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data)
    }
  }
}