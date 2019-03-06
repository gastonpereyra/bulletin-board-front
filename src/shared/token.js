// Obtener Token
export const getToken = () => {
    return sessionStorage.getItem('authToken');
};
// Guardar Token
export const setToken = (token) => {
    sessionStorage.setItem('authToken',token);
};
//Borrar Token
export const removeToken = () => {
    sessionStorage.removeItem('authToken');
}