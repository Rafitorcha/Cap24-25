const movileConsole = true;
if (movileConsole) {
    (() => {

        function recurcibe_object(iteration) {
            const element = document.createElement(iteration.type || "div");
            setAttributeDivs(element, iteration);
            if (iteration.chields != undefined) {
                for (divIter of Object.values(iteration.chields)) {
                    element.appendChild(recurcibe_object(divIter));
                };
            };
            return element;
        };
        //setea los valores id, clases,data set del elemento
        function setAttributeDivs(element, att) {
            if (att.id) {
                element.setAttribute("id", att.id)
            };
            if (att.class) {
                element.className = att.class + `${(att.type == "button") ? " button-marg buttonKey" : ""} 
		${(att.dataSet && (-1 != att.dataSet.findIndex((e) => e[0] === "text"))) ? "buttonText" : ""}
		${(att.dataSet && (-1 != att.dataSet.findIndex((e) => e[0] === "tool"))) ? "buttonTool" : ""}`;
            };
            if (att.dataSet) {
                att.dataSet.forEach((data) => {
                    element.setAttribute("data-" + data[0], data[1]);
                });
            };
            element.textContent = att.content;
        };


        const globalBox = recurcibe_object({
            id: "containerMainConsoleMovile",
            title: "console",
            class: "generalbox"
        });
        document.body.appendChild(globalBox);

        const closedConsole = recurcibe_object({
            type: "button",
            id: "cx",
            title: "Teclado",
            class: "closed buttonAux mr-2"
        });

        const movileConsoleDiv = recurcibe_object({
            id: "movileConsoleDiv",
            class: "jxgbox d-flex flex-column consoleMovile"
        });
        closedConsole.addEventListener("click", () => {
            movileConsoleDiv.remove()
        });

        movileConsoleDiv.appendChild(closedConsole);
        globalBox.append(movileConsoleDiv);

    })();
    function mclg(linea, ...texts) {
        let textTotal = `${linea}> ` + texts.join(" ");
        if (!linea) {
            textTotal = "no tiene linea agregala por favor"
        };
        const p = document.createElement("p");
        p.style = "margin: 0px; margin-top: 5px;";
        p.textContent = textTotal;
        movileConsoleDiv.appendChild(p);
    };
};