export function cutText(txt, mixchr) {
    
    if (txt.length > 50) {
        txt = txt.slice(0, mixchr)+"...";
    }
    return txt;
 }