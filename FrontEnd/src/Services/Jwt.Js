export const jwt = () => {
    var base64Url = localStorage.getItem("Usuario-MedGroup").split('.')[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}


