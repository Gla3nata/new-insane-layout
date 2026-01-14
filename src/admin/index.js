import { ServiceApi } from './modules/serviceApi';
import { renderTable } from './modules/renderTable';
import { filterService } from './modules/filterService';
import { addService } from './modules/addService';



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
  addService();
  filterService(services, renderTable);
});