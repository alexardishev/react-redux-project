const menuLoaded = (newMenu) => { // Action creator принимает меню с сервера , когда приходят новые данные и запишем в объект и в редьюсер потом сможет поместить это все в стейт
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => { // Action creator принимает меню с сервера , когда приходят новые данные и запишем в объект и в редьюсер потом сможет поместить это все в стейт
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => { // Action creator принимает меню с сервера , когда приходят новые данные и запишем в объект и в редьюсер потом сможет поместить это все в стейт
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (id) => { // Action creator принимает меню с сервера , когда приходят новые данные и запишем в объект и в редьюсер потом сможет поместить это все в стейт
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}


const deleteFromCart = (id) => { // Action creator принимает меню с сервера , когда приходят новые данные и запишем в объект и в редьюсер потом сможет поместить это все в стейт
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}
const deleteOnePosition = (id) => { // Action creator принимает меню с сервера , когда приходят новые данные и запишем в объект и в редьюсер потом сможет поместить это все в стейт
    return {
        type: 'ITEM_REMOVE_ONE_POSITION',
        payload: id
    }
}
export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    deleteOnePosition
};