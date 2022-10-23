const unread = document.querySelectorAll('.unread')
const btn = document.getElementById('switch')

console.log(unread)

const readMessages = btn.addEventListener('click', () => {
    if (btn.checked) {
        unread.forEach(message => {
            return (message.classList.remove('unread'))
        })
    } else {
        unread.forEach(message => {
            message.classList.add('unread')
        })
    } 
})


