export const getCookies = function() {
    const cookies = document.cookie.split('; ')
    const cookieMap = new Map()
    cookies.forEach((v) => {
        const value = v.split('=')
        cookieMap.set(value[0], value[1])
    })
    return cookieMap
}

export const getCookiesLen = function() {
    return getCookies().size
}

export const setCookie = function(name, value, days) {
    days = Boolean(parseInt(days)) ? days : 1
    const expires = new Date(parseInt(days) * 1000 * 3600 * 24).toGMTString()
    document.cookie = `${name}=${value};expires=${expires};`
}

export const getCookie = function(name) {
    const cookies = getCookies()
    return cookies.get(name)
}

export const removeCookie = function(name) {
    const now = new Date().toGMTString()
    document.cookie = `${name}=;expires=${now};`
}