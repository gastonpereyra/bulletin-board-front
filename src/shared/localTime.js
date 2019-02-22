export const getLocalTime = (date, isFull=false) => {
    // Opciones para la Mostrar la fecha en formato Local
    const language = navigator.language || navigator.browserLanguage;
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: false
    };

    return isFull ? 
        new Intl.DateTimeFormat(language,options).format(date) :
        new Intl.DateTimeFormat().format(date);
}