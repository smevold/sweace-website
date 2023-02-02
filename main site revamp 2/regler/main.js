
const nav = document.getElementById("nav");


document.querySelectorAll("h3").forEach(title => {
    let link = document.createElement('a');
    title.id = title.textContent;
    link.textContent = title.textContent;
    link.href = '#' + title.id;
    link.id = title.id + "link";
    link.classList.add("main");
    nav.appendChild(link);
    title.nextElementSibling.querySelectorAll("h4").forEach(subtitle => {
        let sublink = document.createElement('a');
        subtitle.id = subtitle.textContent;
        sublink.id = subtitle.id + "link";
        sublink.textContent = subtitle.textContent;
        sublink.classList.add("child");
        sublink.href = '#' + subtitle.id;
        nav.appendChild(sublink);
    })
})

let lists = document.querySelectorAll("li");
    lists.forEach((list, index) => {
        list.addEventListener("click", () => {
            navigator.clipboard.writeText(`§${index}`);
            alert("Kopierade: " + list.textContent)
        })
        list.innerHTML = "<span>" + "§" + index + "</span>" + list.textContent;
    })

const header = document.getElementById("navigation");
header.addEventListener("click", () => {
    header.classList.toggle("vis");
})