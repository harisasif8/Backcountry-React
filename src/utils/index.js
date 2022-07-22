import axios from 'axios'


const fetcher = (opts = {}) => axios({
    ...opts,
})

const deleteItem = (items = [], deletedIndex) => {
    items.splice(deletedIndex, 1);
    return [...items]
}

const updateItem = (items = [], selectedIndex, updatedItem) => {
    items.splice(selectedIndex, 1, updatedItem);
    return [...items]
}
export { fetcher, deleteItem, updateItem };