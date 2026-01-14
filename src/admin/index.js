import { ServiceApi } from './modules/serviceApi';
import { renderTable } from './modules/renderTable';
import { filterService } from './modules/filterService';
import { addService } from './modules/addService';
import { removeService } from './modules/removeService';
import { editService } from './modules/editService';


const checkAuth = () => {
  const isAuth = document.cookie.includes('auth=true');
  if (!isAuth) {
    window.location.href = 'index.html';
  }
};

checkAuth();

const api = new ServiceApi();

api.getAll().then(services => {
  renderTable(services);
  filterService(services, renderTable);
});

addService(api);
removeService(api);
editService(api);