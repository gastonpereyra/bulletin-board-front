let token= null;

// Obtener Token
export const getToken = () => {
    return token;
};
// Guardar Token
export const setToken = (t) => {
    token = t;
};
//Borrar Token
export const removeToken = () => {
    token = null;
}