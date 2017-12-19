export const setCookie = function (name: string, value: any, days: number = 1): boolean {
    const day: Date = new Date()
    day.setDate(day.getDate() + days)
    const expires: string = day.toUTCString()
    document.cookie = `${name}=${value};expires=${expires};`
    return true
}

export const getCookie = function (name: string): string | null {
    const reg: RegExp = new RegExp("(^| )"+name+"=([^;]*)(;|$)")
    const match: string[] | null = document.cookie.match(reg)
    if (match) return decodeURIComponent(match[2])
    return null
}

export const removeCookie = function (name: string): boolean {
    return setCookie(name, null, -1)
}