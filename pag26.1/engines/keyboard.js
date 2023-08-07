if (typeof targetInput && typeof buttonActive && typeof state) {
    targetInput = null;
    buttonActive = null;
    state = null;
};

const objetoHtmlDefault = {
    id: "",
    class: "fixed-bottom d-flex align-items-center justify-content-center w-100 mb-2",
    chields: {
        div_parent: {
            class: "popup divParent justify-content-center",
            chields: {
                div: {
                    class: "d-flex justify-content-end orange-bg",
                    chields: {
                        btnClose: {
                            type: "button",
                            id: "closeKeyBoard",
                            class: "closed buttonAux mr-2",
                        },
                    },
                },
                div_1: {
                    class: "rounded d-flex justify-content-center",
                    chields: {
                        div: {
                            class: "ml-2 allButtons d-flex justify-content-center flex-row w-90",
                            chields: {
                                div: {
                                    class: "d-flex flex-column w-80",
                                    chields: {
                                        div: {
                                            class: "d-flex flex-wrap justify-content-center justify-content-md-start",
                                            chields: {
                                                btnMinorEqual: { dataSet: [["text", '≤']], type: "button", class: "minorEqual buttonTertiary", title: "Menor igual que" },
                                                btnMajorEqual: { dataSet: [["text", '≥']], type: "button", class: "mayorEqual buttonTertiary", title: "Mayor igual que" },
                                                btnMinor: { dataSet: [["text", '<']], type: "button", class: "minor buttonTertiary", title: "Menor que" },
                                                btnMajor: { dataSet: [["text", '>']], type: "button", class: "mayor buttonTertiary", title: "Mayor que" },
                                                btnParenthesisLeft: { dataSet: [["text", '(']], type: "button", class: "parenthesisLeft buttonTertiary", title: "Paréntesis" },
                                                btnParenthesisRight: { dataSet: [["text", ')']], type: "button", class: "parenthesisRight buttonTertiary", title: "Paréntesis" },
                                                btnBracketsLeft: { dataSet: [["text", '[']], type: "button", class: "bracketsLeft buttonTertiary", title: "Corchete" },
                                                btnBracketsRight: { dataSet: [["text", ']']], type: "button", class: "bracketsRight buttonTertiary", title: "Corchete" },
                                            },
                                        },
                                        div_1: {
                                            class: "d-flex flex-wrap justify-content-center justify-content-md-start",
                                            chields: {
                                                btnKeysLeft: { dataSet: [["text", '{']], type: "button", class: "keysLeft buttonTertiary", title: "Llave" },
                                                btnKeysRight: { dataSet: [["text", '}']], type: "button", class: "keysRight buttonTertiary", title: "Llave" },
                                                btnSetOf: { dataSet: [["text", '∪']], type: "button", class: "setOf buttonTertiary", title: "Union" },
                                                btnIntersection: { dataSet: [["text", '∩']], type: "button", class: "intersection buttonTertiary", title: "Intersección" },
                                                btnWriteInfinite: { dataSet: [["text", '∞']], type: "button", class: "infiniteWrite buttonTertiary", title: "Infinito" },
                                                btnRealNumber: { dataSet: [["text", 'R']], type: "button", class: "realNumber buttonTertiary", title: "Reales" },
                                                btnEmpty: { dataSet: [["text", '∅']], type: "button", class: "empty buttonTertiary", title: "Vacío" },
                                                btnNotEqual: { dataSet: [["text", '≠']], type: "button", class: "notEqual buttonTertiary", title: "Desigualdad" },
                                                btnEqual: { dataSet: [["text", '=']], type: "button", class: "equal buttonTertiary", title: "Igualdad" },
                                            },
                                        },
                                    },
                                },
                                div_1: {
                                    class: "w-20",
                                    chields: {
                                        btnPointA: { id: 'btn-pointA', type: "button", dataSet: [["tool", "pointA"]], class: "pointOpen buttonAux", title: "Punto abierto" },
                                        btnPointC: { id: 'btn-pointC', type: "button", dataSet: [["tool", "pointC"]], class: "pointClose buttonAux", title: "Punto cerrado" },
                                        btnConect: { id: 'btn-conect', type: "button", dataSet: [["tool", "conection"]], class: "conect buttonAux", title: "Conectar" },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

function interactionKeyboard() {
    const openKeyBoard = document.querySelector("#openKeyBoard");
    const closeKeyBoard = document.querySelector("#closeKeyBoard");
    const popup = document.querySelector(".popup");
    const buttonsAll = document.querySelector('.allButtons');

    openKeyBoard.addEventListener('click', (e) => {
        popup.style.display = "block";
        openKeyBoard.style.display = "none";
        targetInput = null;
        defRemoveState();
        setInputStates(true);
    });

    closeKeyBoard.addEventListener('click', (e) => {
        popup.style.display = "none";
        openKeyBoard.style.display = "block";
    });

    window.addEventListener("click", (e) => {
        if (e.target.tagName === "INPUT") {
            targetInput = e.target;
            defRemoveState();
        };
    });

    buttonsAll.addEventListener('click', (e) => {
        if (e.target.classList.value.includes("buttonText")) {
            defRemoveState();
            if (buttonActive != null) {
                buttonActive.classList.remove("buttonDownActive");
                buttonActive = null;
            };
            if (targetInput != null) {
                defAllBottons(e.target.dataset.text);
                targetInput.focus();
            };
        };

        if (e.target.classList.value.includes("buttonTool")) {
            if (e.target != buttonActive && buttonActive != null) {
                buttonActive.classList.remove("buttonDownActive");
            };
            if (targetInput != null) { targetInput = null; };
            buttonActive = e.target;
            state = buttonActive.dataset.tool;
            buttonActive.classList.add("buttonDownActive");
            //funcion por defecto una conexion con otro codigo 
            if (typeof defKeyboardTool != "undefined") {
                defKeyboardTool(e);
            };
        };
    });
};
//insertar texto de los botones a los inputs
function defAllBottons(buttons) {
    targetStart = targetInput.selectionStart;
    targetEnd = targetInput.selectionEnd;
    targetInput.setRangeText(buttons, targetStart, targetEnd, "end");
};
//cambia todos los inputs del dom dependiendo de si esta el keyboard desplegado o no
//evita que se desplegue el teclado del telefono cuando esta desplegado
function setInputStates(mode) {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => {
        if (mode) {
            input.setAttribute("inputmode", "none");
        } else {
            input.setAttribute("inputmode", "text");
        };
    });
};
//remove el estado de los tools
function defRemoveState() {
    if (buttonActive != null) {
        buttonActive.classList.remove("buttonDownActive");
        buttonActive = null;
        state = null;
    };
};
//funcion revursiva recorre todo el objeto y sus hijos para retornar un elemento html completo
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
    if (att.title) {
        element.setAttribute("title", att.title);
    };
    if (att.dataSet) {
        att.dataSet.forEach((data) => {
            element.setAttribute("data-" + data[0], data[1]);
        });
    };
    element.textContent = att.content;
};

function makeKeyboard() {
    document.body.appendChild(recurcibe_object({ type: "button", id: "openKeyBoard", title: "Teclado", class: "fixed-bottom ml-auto p-2 mr-2 mb-2 keyBoard butonKeyBoardOpen" }));
    document.body.appendChild(recurcibe_object({ id: "keyBoarDiv" }));
    document.querySelector("#keyBoarDiv").appendChild(recurcibe_object(objetoHtmlDefault));
    document.querySelector("#closeKeyBoard").addEventListener("click", (e) => {
        setInputStates(false);
        defRemoveState();
    });
    interactionKeyboard();
};
makeKeyboard()
