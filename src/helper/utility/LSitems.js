const getItemFromLS = (key = '') => {
    return localStorage.getItem(key);
}
// const setItemtoLS = (key = '', item)=>{
//     if(typeof item ===Object)
//     {
//         localStorage.setItem(key,)
//     }
// }

export { getItemFromLS }