//Cookie manager. Adds a simple layer of abstraction so that I can swap out the internal cookie manager if ever needing to, or add hooks and stuff.
import Cookies from 'universal-cookie';

export function readCookies(): any {
    return new Cookies().getAll();
}

export function setCookie(cookieName: string, cookieValue: string) {
    new Cookies().set(cookieName, cookieValue, {path: '/'});
}
