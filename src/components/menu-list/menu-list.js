import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import './menu-list.scss';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class MenuList extends Component {

    // componentDidCatch() {
    //     this.props.menuError();
    //     return 
    // }

    componentDidMount() {

        this.props.menuRequested();


        const {RestoService} = this.props;

        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(()=> this.props.menuError())
    }
    render() {

        const {menuItems, loading, error, addedToCart} = this.props;
        console.log(this.props);

        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Error/>
        }

              const items = menuItems.map(menuItem => {
                return(
                     <MenuListItem key={menuItem.id} menuItem={menuItem}
                     onAddToCart={() => addedToCart(menuItem.id)}/>
                    
                     
                )
                })
                return (
                    <View items = {items}/> 
                    )
            
    }
};

const mapStateTiProps = (state) => { // Получим при помощи редьюсера то что нам надо и потом в виде пропса попадет в наш компонент
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        count: state.count
    }
}

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested: menuRequested,
    menuError: menuError,
    addedToCart

}

const View = ({items}) => {

    return (
        <ul className="menu__list">
            {items}
        </ul>
    ) 
}




export default WithRestoService() (connect(mapStateTiProps, mapDispatchToProps) (MenuList)); // Связыввает компонент и редакс, и должны сказать какие данные нужны от редакса этому компоненту