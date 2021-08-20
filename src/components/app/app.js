import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import SliederHead from '../pages/slider-page';
import { Route, Switch } from 'react-router-dom';
import Background from './food-bg.jpg';
import MenuBurger from '../menu-burger';
const App = () => { // ИЗ пропсов достали


    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <MenuBurger/>
            <AppHeader/>
            <Switch>
                <Route path = '/' exact component = {MainPage}/>
                <Route path = '/cart' exact component = {CartPage}/>
                <Route path = '/:id'  component ={ItemPage}/>
            </Switch>
            <div>
            <SliederHead/>
            </div>
        </div>
    )
}

export default (App); // Используем компонент высшего порядка и сразу его отрендерит и обернет в консюмер, чтобы мы могли использовать контекст