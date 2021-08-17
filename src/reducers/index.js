import { number } from "prop-types";

const initialState = { // Стейт по умолчанию
    menu: [],
    loading: true,
    error: false,
    count: 0,
    items: [] // Сюда будут приходить из сервера данные, дальше они будут 
}


const reducer = (state = initialState, action) => {
    switch (action.type) { // action это объект у которого есть свойство type обязательное
        case 'MENU_LOADED': // когда это действие выполниться я в свой стейт запишу новое свойство меню
            return {
                ...state,
                menu:action.payload,
                count: 0,
                loading: false,
                error: false

            };
        case 'MENU_REQUESTED': // когда это действие выполниться я в свой стейт запишу новое свойство меню
            return {
                ...state,
                menu:state.menu,
                loading: true,
                count: 0,
                error: false
            };
        case 'MENU_ERROR': // когда это действие выполниться я в свой стейт запишу новое свойство меню
            return {
                ...state,
                menu:state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            let number = 1
            state.items.forEach((num, i) => {
                if(num.id === item.id) {
                    number++;

                    console.log(item)
                }
            })

            const newItem = {
                title: item.title,
                price: item.price * number,
                url: item.url,
                id: item.id,
                number: number 
            };


            return{
                ...state,
                items: [
                    ...state.items,
                        newItem
                        
                    
                ]
                
            };

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }

        default:
            return state;
    }
}



export default reducer;