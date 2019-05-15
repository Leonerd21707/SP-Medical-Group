export const jwt = () => {
    const base64Url = localStorage.getItem("Usuario-MedGroup").split(".")[1];
    const base64 = base64Url.replace(/-/g, "+"); base64Url.replace(/_/g, "/");
    const token = JSON.parse(window.atob(base64));
    return token;
}