export const bodyOverflow = (state: boolean) => {

    state ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

}