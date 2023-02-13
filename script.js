function start() {
    var content = document.getElementById("content");
    data.forEach(e => {
        var elem = document.createElement("div");
        elem.className = "element";

        var image = document.createElement("div");
        image.className = "itemImage";

        var img = document.createElement("img");
        img.src = e.img;
        img.className = "image";

        if (e.link) {
            var link = document.createElement("a");
            link.href = e.link;
            link.target = "_blank";
            link.appendChild(img);
            image.appendChild(link);
        } else {
            image.appendChild(img);
        }

        elem.appendChild(image);

        var text = document.createElement("div");
        text.className = "itemText";

        var name = document.createElement("h2");
        name.className = "itemName";
        name.appendChild(document.createTextNode(e.name));
        text.appendChild(name);

        var desc = document.createElement("p");
        desc.className = "itemDesc";
        desc.appendChild(document.createTextNode(e.desc));
        text.appendChild(desc);

        elem.appendChild(text);

        content.appendChild(elem);
    });
}

onload = start;