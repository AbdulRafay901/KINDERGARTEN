const menu = document.querySelector("#menu");
const links = document.querySelector(".links");

menu.addEventListener("click", (() => {
   links.classList.toggle("links-java");
}))


function button(section){
    const btns = document.querySelectorAll(".buttons button");
    btns.forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");   
}


var iso = new Isotope('#row1', {
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  percentPosition: true,
});

function filterItems(filter){
    const btns = document.querySelectorAll(".buttons button");
    btns.forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");

    iso.arrange({ filter: filter });
}


const cells = document.querySelectorAll(".g-column1");

cells.forEach((cell) => {
    const overlay = cell.querySelector(".g-column1-blue");

    cell.addEventListener("mouseenter", (e) => {
        const rect = cell.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const w = rect.width;
        const h = rect.height;

        const top = y;
        const bottom = h - y;
        const left = x;
        const right = w - x;

        let dir = "";

        if (top < left && top < right) dir = "top";
        else if (bottom < left && bottom < right) dir = "bottom";
        else if (left < right) dir = "left";
        else dir = "right";

        // Set starting point based on direction
        if (dir === "left") overlay.style.transform = "translateX(-100%)";
        if (dir === "right") overlay.style.transform = "translateX(100%)";
        if (dir === "top") overlay.style.transform = "translateY(-100%)";
        if (dir === "bottom") overlay.style.transform = "translateY(100%)";

        // Animate to center
        requestAnimationFrame(() => {
            overlay.style.transform = "translate(0,0)";
        });
    });

    cell.addEventListener("mouseleave", (e) => {
        const rect = cell.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const w = rect.width;
        const h = rect.height;

        const top = y;
        const bottom = h - y;
        const left = x;
        const right = w - x;

        let dir = "";

        if (top < left && top < right) dir = "top";
        else if (bottom < left && bottom < right) dir = "bottom";
        else if (left < right) dir = "left";
        else dir = "right";

        // Exit toward direction
        if (dir === "left") overlay.style.transform = "translateX(-100%)";
        if (dir === "right") overlay.style.transform = "translateX(100%)";
        if (dir === "top") overlay.style.transform = "translateY(-100%)";
        if (dir === "bottom") overlay.style.transform = "translateY(100%)";
    });
});


const column = document.querySelectorAll(".g-column4");
const videos = document.querySelector("#videos");

column.forEach(video_column => {
     video_column.addEventListener("click", (() => {
         document.getElementById("videos").innerHTML = `<iframe width="90%" height="90%" src="https://www.youtube.com/embed/C0DPdy98e4c?si=bRC71mjsxYU83sxb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    videos.style.display = "flex";
     }))
})













