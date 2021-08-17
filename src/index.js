import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import './index.scss';


const restoService = new RestoService();


ReactDOM.render(
    <Provider store={store}> 
        <ErrorBoundry> 
            <RestoServiceContext.Provider value={restoService}> 
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry> 
    </Provider> // Создаем провайдер и передаем в него стор и все, что будет ниже по еирархии сможет использовать стор (от редакса)
    // Дальше граница ошибок
    // Дальше провайдер от контекста с значение в которое передаем сам экземлпяр рестосервиса, тчобы потом его везде исопльзовать
    // Дальше идет рутер, который создает маршрутизацию внутри приложения
    , document.getElementById('root'));

