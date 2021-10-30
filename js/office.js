let officeSelect = document.getElementById("offices_id");
let mapIframe = document.getElementById("map_iframe");

officeSelect.addEventListener("change", (e) => {
    let mapData = e.target.value;
    if (mapData) {
        mapIframe.src = `https://www.google.com/maps/embed?pb=${mapData}`;
    } else {
        mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1x3Op6mEmRBbmLAZhuFsbJQg7P0amLz6G";
    }
})