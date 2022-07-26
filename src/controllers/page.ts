

export function scrollImpulse(amount: number) {
    window.scrollBy({
        top: amount,
        behavior: 'smooth'
    })
}

export function scrollTo(elementId: string, block?: string) {
    //@ts-ignore
    document.getElementById(elementId).scrollIntoView({behavior: "smooth", block: block})
}
