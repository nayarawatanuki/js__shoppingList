export function salveItem(item, list) {
    
    const shoppingItem = item.value;
    const checkDuplicity = list.some((element) => element.value.toUpperCase() === shoppingItem.toUpperCase());

    if(checkDuplicity) {
        alert("Item já existe!")
    } else {

        list.push({
            value: shoppingItem
        });
    }
    

    console.log(list);
} 
