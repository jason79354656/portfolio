addEventListener('DOMContentLoaded',() =>{
    const btn_nav = document.querySelector('.btn_nav')
    if(btn_nav) {
        btn_nav.addEventListener('click', () =>{
            const menu_items = document.querySelector('ul')
            menu_items.classList.toggle('show')
        })
    }
}
)