const tokenKeyName = "token"
function setToken(token){
    localStorage.setItem(tokenKeyName, token)
}
function getToken(){
    return localStorage.getItem(tokenKeyName)
}
function checkToken(){
    return !!getToken()
}
function deleteToken(){
    localStorage.removeItem(tokenKeyName)
}

export {setToken, getToken, checkToken, deleteToken}