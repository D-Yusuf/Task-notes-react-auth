const tokenKeyName = "token"
function setToken(token){
    localStorage.setItem(tokenKeyName, token)
}
function getToken(){
    return localStorage.getItem(tokenKeyName)
}
function removeToken(){
    localStorage.removeItem(tokenKeyName)
}

export {setToken, getToken, removeToken}