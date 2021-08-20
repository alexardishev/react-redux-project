

const initialState = { // Стейт по умолчанию
    menu: [],
    loading: true,
    error: false,
    count: 0,
    items: [], // Сюда будут приходить из сервера данные, дальше они будут 
    totalPrice: 0
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
        
        const pagItems = state.menu.length;
        console.log(pagItems)    
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
            const itemInd = state.items.findIndex(item => item.id === id);
            console.log(itemInd);
            const item = state.menu.find(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty,
                    price: item.price * itemInState.qtty,
                    pricedec: item.price
                }
                    console.log(state.totalPrice);
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd), // пустой массив от 0 до 0
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.pricedec
                }
                
            } 
            // товара раньше не было в корзине
            
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const itemInStateDel = state.items.find(item => item.id === idx);
            console.log(itemInStateDel.price);

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - itemInStateDel.price
            }
            case 'ITEM_REMOVE_ONE_POSITION':
                const idxp = action.payload
                const itemIndexp = state.items.findIndex(item => item.id === idxp);
                const itemInStateP = state.items.find(item => item.id === idxp);
                const itemPos = state.menu.find(item => item.id === idxp);
                const newItemPp = {
                    title: itemPos.title,
                    price: itemPos.price,
                    url: itemPos.url,
                    id: itemPos.id,
                    qtty: 1
                };
                const newItemp = {
                    ...itemInStateP,
                    price: (itemPos.price * itemInStateP.qtty) - newItemPp.price,
                    qtty: --itemInStateP.qtty,
                    priceinc: itemPos.price
                }

                if(newItemp.price <= 0 ) {
                    return {
                        ...state,
                        items: [
                            ...state.items.slice(0, itemIndexp),
                            ...state.items.slice(itemIndexp + 1)
                        ],
                        totalPrice: state.totalPrice - itemPos.price
                    }
                }



                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndexp),
                        newItemp,
                        ...state.items.slice(itemIndexp + 1)
                    ],
                    totalPrice: state.totalPrice - newItemPp.price

                }
        default:
            return state;
    }
}



export default reducer;