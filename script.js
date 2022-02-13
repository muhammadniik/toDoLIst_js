const lists = document.querySelector(".listItem");
const addBtn = document.querySelector(".addBtn");
const addTxt = document.querySelector(".addTxt");
const search = document.querySelector(".search");
console.log(search);

lists.addEventListener("click", (e) => {
    const i = e.target
    if (i.className == "btnDelet")
        i.parentElement.remove();



    if (!lists.children.length) {
        const empt = document.createElement("span");
        empt.className = "empety";
        empt.innerText = " no here items"
        lists.appendChild(empt);

    }
})

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!addTxt.value)
        return;

    if (lists.querySelector(".empety"))
        lists.querySelector(".empety").remove();
    lists.appendChild(createItems(addTxt.value));
    addTxt.value = "";

})


search.addEventListener("input", (e) => {
        let items = document.querySelectorAll(".textSpan");
        if (lists.querySelector(".empety"))
            return;
        Array.from(items).forEach(e => {
            if (!e.innerText.match(search.value))
                e.parentElement.style.display = "none";
            else {
                e.parentElement.style.display = "flex";
            }
        })
    })
    // ....................................................................functions
function createItems(text) {
    const li = window.document.createElement("li");
    li.className = "items";
    const txtSpan = document.createElement("span");
    txtSpan.className = "textSpan";
    txtSpan.innerText = text;
    const btnDel = document.createElement("span");
    btnDel.className = "btnDelet";
    btnDel.innerText = "delet";
    li.appendChild(txtSpan);
    li.appendChild(btnDel);
    return li;
}