import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => { // функция, которая возвращает функцию и в аргумент будет получать компонент (КВП)
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/> // Используем РЕСТ оператор, так как не знаем сколько будет проперти передано сюда
                    } // Каждому компоненту, который будет приходить из компонента высшего порядка буду передавать проперти Ресто сервис
                }
            </RestoServiceContext.Consumer>
        )
    } // Передаем этому компоненту свойства через пропсы
};

export default WithRestoService;