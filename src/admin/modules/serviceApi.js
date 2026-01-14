export class ServiceApi {
  getAll() {
    return fetch('http://localhost:4545/services')
      .then(res => res.json());
  }
 
  addService(service) {
    return fetch('http://localhost:4545/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service)
    }).then(res => res.json());
  }

  removeService(id) {
    return fetch(`http://localhost:4545/services/${id}`, {
      method: 'DELETE'
    });
  }
}