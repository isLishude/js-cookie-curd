# js-cookie-curd
a simple JavaScript Cookie Lib

## Useage

```js
import {
    getCookies,
    getCookiesLen,
    setCookie,
    getCookie,
    removeCookie
} from 'js-cookie-curd'

// GET ALL COOKIES
const cookies = getCookies()

// GET COKIES LENGTH
const cookiesLength = getCookiesLen()

// SET COOKIE,IF NOT SET YET WILL CREATE NEW ONE
// eg.`key` will expire after 3 days.Default day param is 1
setCookie('key','value',3)

// GET COOKIE BY NAME,IF NO HAS,RETURN `undefined`
getCookie('key')

// REMOVE COOKIE
removeCookie('key')
```