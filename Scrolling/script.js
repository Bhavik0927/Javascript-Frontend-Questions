const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 30;
const CONTAINER_HEIGHT = 500;

const container = document.getElementById('container');
const spacer = document.getElementById('spacer');
const list = document.getElementById('list');

const items = Array.from({ length: TOTAL_ITEMS }, (_, i) => `Item ${i + 1}`);

// console.log(items);

spacer.style.height = `${TOTAL_ITEMS * ITEM_HEIGHT}px`;

let startIndex = 0;
const BUFFER = 5;

function render(){
    const scrollTop = container.scrollTop;

    startIndex = Math.floor(scrollTop / ITEM_HEIGHT);

    const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);
    const endIndex = startIndex + visibleCount + BUFFER;

    const visibleItems = items.slice(startIndex, endIndex);

    list.style.transform = `translateY(${startIndex * ITEM_HEIGHT}px)`;

    list.innerHTML = visibleItems.map(item => `<div class="item">${item}</div>`).join("");
}

container.addEventListener("scroll", () =>{
    requestAnimationFrame(render);
})

render();
