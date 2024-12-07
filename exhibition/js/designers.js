const img_el = document.getElementById("identity_img");
const keyword_el = document.getElementById("keyword");
const el = document.getElementById("student_inner");
el.style.color = "white";

fetch("../public/identity_database.json")
.then(res => {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
})
.then(data => {
    data.forEach(item => {
        const div = document.createElement("a");
        div.className = "student_name_box";
        div.onmouseenter = () => {
            if (item.identity_img) {
                img_el.setAttribute("src", item.identity_img + "&sz=w500");
            }
            img_el.setAttribute("alt", item.keyword);
            img_el.style.display = "block";
            keyword_el.innerText = item.identity_en.toUpperCase();

            // document.querySelectorAll(".student_name_box").forEach(el => {
            //     el.classList.remove("active");
            // });
            // div.classList.add("active");
        };
        // div.onmouseleave = () => {
        //     img_el.style.display = "none";
        //     keyword_el.innerText = "DESIGNERS";
        // };
        div.href = "/exhibition/a_designer.html?designer=" + encodeURIComponent(item.name_en);
        div.textContent = item.name_kr;
        el.appendChild(div);
    });
}).catch(err => console.log(err.message));
