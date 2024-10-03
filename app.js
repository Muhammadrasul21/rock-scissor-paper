const tel = document.querySelector(".tel")
const btn = document.querySelector(".btn")


const TEL_NUMBERS = [
    "+998 91 340 1566",
    "+999 94 152 6969",
    "+999 92 123 6969",
    "+999 77 707 0707",
    "+999 95 950 9595",
    "+999 91 658 8586",
]

function randomTel() {
    btn.setAttribute("disabled", true)
    let interval = setInterval(() => {
        let reandomNumber = Math.floor(Math.random() * TEL_NUMBERS.length)
        tel.innerHTML = TEL_NUMBERS[reandomNumber]
    }, 100);
    setInterval(() => {
        clearInterval(interval)
        btn.removeAttribute("disabled")
    }, 2500)
}