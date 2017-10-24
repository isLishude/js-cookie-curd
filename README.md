# js-cookie-curd
a simple JavaScript Cookie Lib

## Useage

```js
import {getCookies, getCookiesLen, setCookie, getCookie, removeCookie} from 'js-cookie-curd'

// GET ALL COOKIES
const cookies = getCookies()

// GET COKIES SIZE
const cookiesLength = getCookiesLen()

// SET COOKIE,IF NOT SET YET WILL CREATE NEW ONE
setCookie('key','value',new Date(2099,1,1).toGMTString())

// GET COOKIE BY NAME,IF NO HAS,RETURN `undefined`
getCookie('key')

// REMOVE COOKIE
removeCookie('key')