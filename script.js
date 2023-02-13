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

    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

    if(y - x > 100) {
        var body = document.getElementsByTagName("body")[0];

        let back = document.createElement("div");
        back.className = "errorBack";

        let message = document.createElement("div");
        message.appendChild(document.createTextNode("View this page on desktop for better experience\n(or just rotate your device)"));
        message.className = "errorText";

        let anywayButton = document.createElement("button");
        anywayButton.appendChild(document.createTextNode("View Page"));
        anywayButton.className = "anywayButton";
        anywayButton.onclick = remove_error;

        back.appendChild(message);
        back.appendChild(anywayButton);

        body.appendChild(back);
    }
}

onload = start;

function remove_error() {
    var error = document.getElementsByClassName("errorBack")[0];
    var body = document.getElementsByTagName("body")[0];
    body.removeChild(error);
}