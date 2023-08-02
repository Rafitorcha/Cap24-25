let targetActive = '';


function generator() {
    let mainOwner = document.querySelector('#mainOwner');
    let grid = document.querySelector('#grid');
    let template = document.querySelector('#template');
    let fragment = new DocumentFragment();


    for (key of Object.keys(def)) {

        let defDefault = {

            defInput: [],
            dataInteraction: {
                respCorrect: 0,
                respIncorrect: 0,
            },
            defValueInput: def[key].defValueInput || false,
            changeContent: def[key].changeContent || false,
            sizeInput: def[key].sizeInput || false,

        }
        const clone = template.content.firstElementChild.cloneNode(true);
        const conteiner = clone.querySelector('.content_2');


        clone.setAttribute('data-ejercicio', key)

        clone.addEventListener('mouseenter', (e) => {
            targetActive = clone.dataset.ejercicio

        })
        clone.addEventListener('mouseleave', (e) => {
            targetActive = '';


        })

        def[key] = { ...def[key], ...defDefault };

        fragment.appendChild(clone);

        add(key, conteiner, def[key].datadefault, grid);

        if (def[key].changeContent) {

            grid.appendChild(fragment)
        }
        else {
            mainOwner.appendChild(fragment)
        }

    };



}

function add(key, conteiner, iterator, grid) {

    if (iterator) {

        for (el of iterator) {


            //Parrafo = 1
            if (el[0] == 1) {
                let div = document.createElement('div');

                let p = document.createElement('p');
                p.textContent = el[1];
                div.appendChild(p);
                div.className = 'contenedor texto';
                p.className = 'parrafo'
                conteiner.appendChild(p);

            }
            //subtitulo = 2
            if (el[0] == 2) {
                let div = document.createElement('div');
                let h5 = document.createElement('h5');
                h5.textContent = el[1];
                div.appendChild(h5);
                conteiner.appendChild(div);
                div.className = 'contenedor';
                h5.className = 'subtitulo';
            }
            //Subtitulo y parrafo  = 3
            if (el[0] == 3) {
                let div = document.createElement('div');
                let p = document.createElement('p');
                let h5 = document.createElement('h5');
                h5.textContent = el[1]
                p.textContent = el[2]
                div.appendChild(h5);
                div.appendChild(p);
                conteiner.appendChild(div);
                div.className = 'contenedor textDouble';
                p.className = 'parrafo margen-5';
                h5.className = 'subtitulo margen-5';
            }
            //Board de la curvas
            if (el[0] == 4) {
                let padre = document.createElement('div');
                let hijo = document.createElement('div');
                conteiner.appendChild(padre);
                padre.appendChild(hijo)
                padre.className = 'content_1';
                hijo.className = 'defBoard jxgbox short-board';
                hijo.setAttribute('data-board', el[1]);
            }
            //Tableros 
            if (el[0] == 5) {
                let ExprestionSort = [];
                let ResulExpressItem = [];

                //Contenedor
                let div = document.createElement('div');
                div.className = 'contenedor table-responsive reduce-table margen-bottom-50 margen-top-50';
                let table = document.createElement('table');
                table.className = 'table table-bordered table-width ';
                let thead = document.createElement('thead');
                let tbody = document.createElement('tbody');



                //Botones        
                let targetInput = '';
                //posicion del cursor en el input
                let targetStart = '';
                let targetEnd = '';
                let btn_content = document.createElement('div');
                let allButtons = document.createElement('div');
                allButtons.className = 'content_1 allbuttons';
                btn_content.className = 'content_1';

                let btn_check = document.createElement('button');
                let btn_reset = document.createElement('button');
                let btn_empty = document.createElement('button');
                let btn_setOf = document.createElement('button');
                let btn_infinity = document.createElement('button');
                let btn_ParenthesisRight = document.createElement('button');
                let btn_ParenthesisLeft = document.createElement('button');
                let btn_BracketsLeft = document.createElement('button');
                let btn_BracketsRight = document.createElement('button');
                btn_empty.setAttribute('data-text', '∅');
                btn_setOf.setAttribute('data-text', '∪');
                btn_infinity.setAttribute('data-text', '∞');
                btn_ParenthesisRight.setAttribute("data-text", ")");
                btn_ParenthesisLeft.setAttribute("data-text", "(");
                btn_BracketsLeft.setAttribute("data-text", "[");
                btn_BracketsRight.setAttribute("data-text", "]");
                btn_check.className = 'check buttonPrimary button-marg buttonKey';
                btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
                btn_empty.className = 'empty buttonTertiary button-marg buttonTarget buttonKey';
                btn_setOf.className = 'setOf buttonTertiary button-marg buttonTarget buttonKey';
                btn_infinity.className = 'infiniteWrite buttonTertiary button-marg buttonTarget buttonKey';
                btn_ParenthesisRight.className = 'parenthesisRight buttonTertiary button-marg buttonTarget buttonKey'
                btn_ParenthesisLeft.className = 'parenthesisLeft buttonTertiary button-marg buttonTarget buttonKey'
                btn_BracketsLeft.className = 'bracketsLeft buttonTertiary button-marg buttonTarget buttonKey'
                btn_BracketsRight.className = 'bracketsRight buttonTertiary button-marg buttonTarget buttonKey'

                allButtons.appendChild(btn_ParenthesisLeft);
                allButtons.appendChild(btn_ParenthesisRight);
                allButtons.appendChild(btn_BracketsLeft);
                allButtons.appendChild(btn_BracketsRight);
                allButtons.appendChild(btn_setOf);
                allButtons.appendChild(btn_infinity);
                allButtons.appendChild(btn_empty);
                btn_content.appendChild(allButtons);
                btn_content.appendChild(btn_reset);
                btn_content.appendChild(btn_check);


                //generadores de filas y columnas
                for (i = 0; i < el[1]; i++) {
                    let th = document.createElement('th');
                    th.setAttribute('scope', 'row');;
                    thead.appendChild(th);;
                }

                for (i = 0; i < el[2]; i++) {
                    let tr = document.createElement('tr');
                    let th = document.createElement('th');
                    th.className = 'media-th'
                    th.setAttribute('scope', 'row');
                    tr.appendChild(th);
                    tbody.appendChild(tr);

                    for (input = 0; input < el[1] - 1; input++) {
                        let td = document.createElement('td');
                        td.className = 'center-td';
                        let input = document.createElement('input');
                        input.setAttribute("inputmode", "none");



                        if (el[1] > 3) {
                            input.classList.add('input-width');
                            table.classList.add('table-width');
                            div.className = 'reduce-table';

                        }
                        input.style = 'text-align:center';
                        input.classList.add('input-width-normalice');
                        def[key].defInput.push(input);
                        td.appendChild(input);
                        tr.appendChild(td);
                        input.addEventListener('click', () => {
                            targetInput = input;
                        })
                    }
                }
                for (item of Object.keys(thead.children)) {
                    thead.children[item].classList.add('item');
                    thead.children[item].textContent = el[3][item];

                }
                for (element of Object.keys(tbody.children)) {
                    tbody.children[element].children[0].classList.add('item');
                    tbody.children[element].children[0].textContent = el[4][element];
                }
                //Valor predefinido
                if (def[key].defValueInput) {
                    tbody.children[0].children[1].children[0].setAttribute('disabled', 'disabled')
                    tbody.children[0].children[2].children[0].setAttribute('disabled', 'disabled')
                    tbody.children[0].children[1].children[0].value = def[key].defValueInput[0]
                    tbody.children[0].children[2].children[0].value = def[key].defValueInput[1]

                }

                /* /\(-?[0-9],-?[0-9]\)[,;]\(-?[0-9],-?[0-9]\)/g */
                btn_check.addEventListener('click', () => {
                    def[key].dataInteraction.respCorrect = 0;
                    def[key].dataInteraction.respIncorrect = 0;

                    if (def[key].defValueInput) {
                        for (item = 2; item < def[key].defInput.length; item++) {
                            const regex = /(\+∞)/g;
                            let ExpresRex = /\)[,y]\(/;
                            let toLower = def[key].defInput[item].value.replace(new RegExp("[' ']", 'g'), "").replace(new RegExp(ExpresRex, 'g'), ");(").replace(regex, '∞').toLocaleLowerCase()

                            if (def[key].conditions[item].includes(toLower.split(';').sort().join(';'))) {
                                def[key].defInput[item].classList.add('pass');
                                def[key].defInput[item].classList.remove('failed');
                                def[key].dataInteraction.respCorrect += 1;
                            } else {
                                def[key].defInput[item].classList.remove('pass');
                                def[key].defInput[item].classList.add('failed');
                                def[key].dataInteraction.respIncorrect += 1;

                            }


                        }

                    } else {


                        for (item in def[key].conditions) {
                            //

                            const regex = /(\+∞)/g;
                            let ExpresRex = /\)[,y;]\(|\][,y;]\(|\)[,y;]\[|\][,y;]\[/
                            let ExpressCondition = /[,y;]/;

                            let toLower = def[key].defInput[item].value.replace(new RegExp("[' ']", 'g'), "").replace(regex, '∞').toLocaleLowerCase();

                            if (ExpresRex.test(toLower)) {
                                let t1 = toLower.replace(new RegExp(ExpresRex, 'g'), `${toLower[toLower.search(ExpresRex)]}${toLower[toLower.search(ExpresRex) + 1].replace(new RegExp(ExpressCondition, 'g'), ';')}${toLower[toLower.search(ExpresRex) + 2]}`)

                                if (def[key].conditions[item].includes(t1.split(';').sort().join(';'))) {
                                    def[key].defInput[item].classList.add('pass');
                                    def[key].defInput[item].classList.remove('failed');
                                    def[key].dataInteraction.respCorrect += 1;
                                } else {
                                    def[key].defInput[item].classList.remove('pass');
                                    def[key].defInput[item].classList.add('failed');
                                    def[key].dataInteraction.respIncorrect += 1;

                                }



                                //(-1,0],(1,0)


                                //console.log('Separador', def[key].defInput[item].value[def[key].defInput[item].value.search(ExpresRex) + 1])
                                //console.log('Expresion', def[key].defInput[item].value)
                                //console.log('replace', toLower.replace(new RegExp(ExpresRex, 'g'), `${toLower[toLower.search(ExpresRex)]}${toLower[toLower.search(ExpresRex) + 1].replace(new RegExp(ExpressCondition, 'g'), ';')}${toLower[toLower.search(ExpresRex) + 2]}`))
                                console.log(t1)
                            } else {
                                if (def[key].conditions[item].includes(toLower)) {
                                    def[key].defInput[item].classList.add('pass');
                                    def[key].defInput[item].classList.remove('failed');
                                    def[key].dataInteraction.respCorrect += 1;
                                } else {
                                    def[key].defInput[item].classList.remove('pass');
                                    def[key].defInput[item].classList.add('failed');
                                    def[key].dataInteraction.respIncorrect += 1;

                                }
                            }










                        }


                    }


                    sendData(cleanDataJ());


                })

                btn_reset.addEventListener('click', () => {
                    if (def[key].defValueInput) {

                        for (itemInput = 1; itemInput < tbody.children.length; itemInput++) {
                            for (count = 2; count < tbody.children[itemInput].children.length; count++) {
                                for (i = 1; i < tbody.children[itemInput].children.length; i++) {
                                    tbody.children[itemInput].children[i].children[0].value = '';
                                    tbody.children[itemInput].children[i].children[0].classList.remove('pass');
                                    tbody.children[itemInput].children[i].children[0].classList.remove('failed');
                                }
                            }

                        }


                    } else {
                        for (element of Object.keys(tbody.children)) {
                            for (itemInput = 1; itemInput < tbody.children[element].children.length; itemInput++) {
                                tbody.children[element].children[itemInput].children[0].value = '';
                                tbody.children[element].children[itemInput].children[0].classList.remove('pass');
                                tbody.children[element].children[itemInput].children[0].classList.remove('failed');

                            }

                        }

                    }

                })

                window.addEventListener("click", (e) => {
                    if (e.target.tagName === "INPUT") {
                        targetInput = e.target;
                    };
                });

                allButtons.addEventListener('click', (e) => {
                    if (e.target.classList.value.includes("buttonTarget") && targetInput != null) {
                        defAllBottons(e.target.dataset.text);
                        targetInput.focus();
                    };
                });



                function defAllBottons(buttons) {
                    targetStart = targetInput.selectionStart;
                    targetEnd = targetInput.selectionEnd;
                    if (targetInput) {
                        targetInput.setRangeText(buttons, targetStart, targetEnd, 'end');
                    }
                }

                //insertando tablas y contenedores de boton al container principal
                table.appendChild(thead);
                table.appendChild(tbody);
                div.appendChild(table);
                div.appendChild(btn_content);

                conteiner.appendChild(div);

            }
            //Board_Double and tablet 2x6
            if (el[0] == 6) {
                let contenedor = document.createElement('div');
                let contentBoardTable = document.createElement('div');
                let contentBoard = document.createElement('div');
                let board_1 = document.createElement('div');
                let board_2 = document.createElement('div');

                let contentBoard_1 = document.createElement('div');
                let contentBoard_2 = document.createElement('div');
                let contentConexa = document.createElement('div');
                let contentDisconexa = document.createElement('div');
                let conexa = document.createElement('p');
                let disconexa = document.createElement('p');
                contentConexa.appendChild(conexa);
                contentDisconexa.appendChild(disconexa)
                conexa.className = 'titulo';
                disconexa.className = 'titulo';
                conexa.textContent = el[7]
                disconexa.textContent = el[8]
                contentBoard_1.className = 'item reduce-table';
                contentBoard_2.className = 'item reduce-table'
                contentBoard_1.appendChild(contentConexa)
                contentBoard_2.appendChild(contentDisconexa)
                contentBoard_1.appendChild(board_1)
                contentBoard_2.appendChild(board_2)


                contentBoardTable.classList.add('table-board');
                contentBoard.classList.add('contentBoard_Double');
                contentBoard.classList.add('margen-button');
                board_1.className = 'defBoard jxgbox short-board board-item';
                board_1.setAttribute('data-board', el[5]);
                board_2.className = 'defBoard jxgbox short-board';
                board_2.setAttribute('data-board', el[6]);


                contenedor.classList.add('contenedor');
                contentBoardTable.classList.add('table-board');
                let contentTable = document.createElement('div');
                contentTable.classList.add('contentTable');
                let table = document.createElement('table');
                table.className = 'table table-bordered tablet3x6';
                let thead = document.createElement('thead');
                let tbody = document.createElement('tbody');
                table.appendChild(thead);
                table.appendChild(tbody);
                contentTable.appendChild(table);

                //Botones

                let targetInput = '';
                //posicion del cursor en el input
                let targetStart = '';
                let targetEnd = '';
                let btn_content = document.createElement('div');
                btn_content.className = 'content_1'
                let btn_check = document.createElement('button');
                let btn_reset = document.createElement('button');
                let btn_empty = document.createElement('button');
                btn_empty.setAttribute('data-text', '∅');
                btn_check.className = 'check buttonPrimary button-marg buttonKey';
                btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
                btn_empty.className = 'empty buttonTertiary buttonKey';
                btn_content.appendChild(btn_reset);
                btn_content.appendChild(btn_check);
                //btn_content.appendChild(btn_empty)


                //generadores de filas y columnas
                for (i = 0; i < el[1]; i++) {
                    let th = document.createElement('th');
                    th.setAttribute('scope', 'col');
                    thead.appendChild(th);
                }
                for (i = 0; i < el[2]; i++) {

                    let tr = document.createElement('tr');
                    let th = document.createElement('th');

                    th.setAttribute('scope', 'row');
                    tr.appendChild(th);
                    tbody.appendChild(tr);

                    for (input = 0; input < el[1] - 1; input++) {
                        let td = document.createElement('td');
                        let input = document.createElement('input');
                        input.style = 'text-align:center';
                        def[key].defInput.push(input);
                        td.appendChild(input);
                        tr.appendChild(td);
                        input.addEventListener('click', () => {
                            targetInput = input;
                        })
                    }
                }
                for (item of Object.keys(thead.children)) {
                    thead.children[item].className = 'item';
                    thead.children[item].textContent = el[3][item];

                }
                for (element of Object.keys(tbody.children)) {
                    tbody.children[element].children[0].className = 'item';
                    tbody.children[element].children[0].textContent = el[4][element];
                }
                btn_check.addEventListener('click', () => {
                    def[key].dataInteraction.respCorrect = 0;
                    def[key].dataInteraction.respIncorrect = 0;

                    for (item in def[key].defInput) {
                        let toLower = def[key].defInput[item].value.replace(new RegExp("[' ']", 'g'), "").toLowerCase();
                        if (toLower === def[key].conditions[item][0]) {
                            def[key].defInput[item].classList.add('pass');
                            def[key].defInput[item].classList.remove('failed');

                            def[key].dataInteraction.respCorrect += 1;
                        } else {
                            def[key].defInput[item].classList.remove('pass');
                            def[key].defInput[item].classList.add('failed');
                            def[key].dataInteraction.respIncorrect += 1;
                        }
                    }
                    sendData(cleanDataJ());



                })
                btn_reset.addEventListener('click', () => {
                    for (element of Object.keys(tbody.children)) {
                        for (itemInput = 1; itemInput < tbody.children[element].children.length; itemInput++) {
                            tbody.children[element].children[itemInput].children[0].value = '';
                            tbody.children[element].children[itemInput].children[0].classList.remove('pass');
                            tbody.children[element].children[itemInput].children[0].classList.remove('failed');
                        }

                    }
                })


                //añdiendo contenedores
                contentBoard.appendChild(contentBoard_1);
                contentBoard.appendChild(contentBoard_2);
                contenedor.appendChild(contentBoardTable)
                contentBoardTable.appendChild(contentBoard)
                contentBoardTable.appendChild(contentTable)
                contentTable.appendChild(btn_content)
                conteiner.appendChild(contenedor);

            }
            //Genera div con board y cada unno tiene un texto
            if (el[0] == 7) {

                //create elements
                let contenedor = document.createElement('div')
                let BoardContainer = document.createElement('div');
                let BoardPositive = document.createElement('div');
                let BoardNegative = document.createElement('div');
                let arrayDiv = [[], []];
                let contenedorBoardPositive = document.createElement('div')
                let contenedorBoardNegative = document.createElement('div')
                let p = document.createElement('p')
                let searchBoard = /board/gi;
                let elementEmpty = /[' ']/gi


                if (el[1] > 0) {

                    for (i = 0; i < el[1]; i++) {
                        let contentText = document.createElement('div');
                        contentText.classList.add('contenedor');
                        contentText.classList.add('inputCenter');
                        contentText.classList.add('content_1');
                        contentText.classList.add(`div_${[i]}`)
                        contentText.classList.add('borderIndividual');
                        BoardPositive.appendChild(contentText);
                        arrayDiv[0].push(contentText);



                    }

                    for (i = 0; i < el[1]; i++) {

                        let contentText = document.createElement('div');
                        contentText.classList.add('contenedor');
                        contentText.classList.add('inputCenter');
                        contentText.classList.add('content_1');
                        contentText.classList.add('borderIndividual');
                        BoardNegative.appendChild(contentText);
                        contentText.classList.add(`div_${[i]}`);
                        arrayDiv[1].push(contentText);




                    }


                }

                if (el[1] > 3) {
                    if (searchBoard.test(el[2][1])) {

                        //Parte Positiva del cuadro del baord
                        arrayDiv[0][0].textContent = el[2][0];
                        arrayDiv[0][0].classList.remove('borderIndividual')
                        arrayDiv[0][0].classList.add('bold-example')
                        contenedorBoardPositive.className = 'defBoard short-board nota';
                        contenedorBoardPositive.setAttribute('data-board', el[2][1]);
                        arrayDiv[0][1].appendChild(contenedorBoardPositive);
                        arrayDiv[0][1].classList.remove('borderIndividual');
                        arrayDiv[0][2] == null ? arrayDiv[0][2].classList.remove('borderIndividual') : arrayDiv[0][2].textContent = el[2][2];
                        arrayDiv[0][3] == null ? arrayDiv[0][3].classList.remove('borderIndividual') : arrayDiv[0][3].textContent = el[2][3];
                        arrayDiv[0][4] == null ? arrayDiv[0][4].classList.remove('borderIndividual') : arrayDiv[0][4].textContent = el[2][4];


                        //Parte Negativa del cuadro del baord
                        arrayDiv[1][0].textContent = el[3][0];
                        arrayDiv[1][0].classList.remove('borderIndividual')
                        arrayDiv[1][0].classList.add('bold-example')
                        contenedorBoardNegative.className = 'defBoard short-board nota';
                        contenedorBoardNegative.setAttribute('data-board', el[3][1]);
                        arrayDiv[1][1].appendChild(contenedorBoardNegative);
                        arrayDiv[1][1].classList.remove('borderIndividual');
                        arrayDiv[1][2] == undefined ? console.log('no hay nada aqui') : arrayDiv[1][2].textContent = el[3][2];
                        arrayDiv[1][3] == undefined ? console.log('no hay nada aqui') : arrayDiv[1][3].textContent = el[3][3];
                        arrayDiv[1][4] == undefined ? console.log('no hay nada aqui') : arrayDiv[1][4].textContent = el[3][4];







                    } else {

                        //Parte Positiva del cuadro del baord
                        arrayDiv[0][0].textContent = el[2][0];
                        arrayDiv[0][0].classList.add('bold-example')
                        arrayDiv[0][1].textContent = el[2][1];
                        contenedorBoardPositive.className = 'defBoard short-board nota';
                        arrayDiv[0][2].appendChild(contenedorBoardPositive);
                        arrayDiv[0][2].classList.add('content_1');
                        contenedorBoardPositive.setAttribute('data-board', el[2][2]);
                        arrayDiv[0][3].textContent = el[2][3];

                        //Parte Negativa del cuadro del baord
                        arrayDiv[1][0].textContent = el[3][0];
                        arrayDiv[1][0].classList.add('bold-example');
                        arrayDiv[1][1].textContent = el[3][1];
                        contenedorBoardNegative.className = 'defBoard short-board nota';
                        arrayDiv[1][2].appendChild(contenedorBoardNegative);
                        arrayDiv[1][2].classList.add('content_1');
                        contenedorBoardNegative.setAttribute('data-board', el[3][2]);
                        arrayDiv[1][3].textContent = el[3][3]

                    }
                } else {
                    if (searchBoard.test(el[2][1])) {


                        //Parte Positiva del cuadro del baord
                        arrayDiv[0][0].textContent = el[2][0];
                        arrayDiv[0][0].classList.remove('borderIndividual')
                        arrayDiv[0][0].classList.add('bold-example')
                        contenedorBoardPositive.className = 'defBoard short-board nota';
                        contenedorBoardPositive.setAttribute('data-board', el[2][1]);
                        arrayDiv[0][1].appendChild(contenedorBoardPositive);
                        arrayDiv[0][1].classList.remove('borderIndividual');
                        arrayDiv[0][2].textContent = el[2][2];


                        //Parte Negativa del cuadro del baord
                        arrayDiv[1][0].textContent = el[3][0];
                        arrayDiv[1][0].classList.remove('borderIndividual')
                        arrayDiv[1][0].classList.add('bold-example')
                        contenedorBoardNegative.className = 'defBoard short-board nota';
                        contenedorBoardNegative.setAttribute('data-board', el[3][1]);
                        arrayDiv[1][1].appendChild(contenedorBoardNegative);
                        arrayDiv[1][1].classList.remove('borderIndividual');
                        arrayDiv[1][2].textContent = el[3][2];







                    } else {

                        //Parte Positiva del cuadro del baord
                        arrayDiv[0][0].textContent = el[2][0];
                        arrayDiv[0][0].classList.add('bold-example')
                        arrayDiv[0][1].textContent = el[2][1];
                        contenedorBoardPositive.className = 'defBoard short-board nota';
                        arrayDiv[0][2].appendChild(contenedorBoardPositive);
                        arrayDiv[0][2].classList.add('content_1');
                        contenedorBoardPositive.setAttribute('data-board', el[2][2]);
                        arrayDiv[0][3].textContent = el[2][3];

                        //Parte Negativa del cuadro del baord
                        arrayDiv[1][0].textContent = el[3][0];
                        arrayDiv[1][0].classList.add('bold-example');
                        arrayDiv[1][1].textContent = el[3][1];
                        contenedorBoardNegative.className = 'defBoard short-board nota';
                        arrayDiv[1][2].appendChild(contenedorBoardNegative);
                        arrayDiv[1][2].classList.add('content_1');
                        contenedorBoardNegative.setAttribute('data-board', el[3][2]);
                        arrayDiv[1][3].textContent = el[3][3]

                    }

                }






                //adding style in the elements
                contenedor.classList.add('contenedor');
                BoardContainer.classList.add('contentDoubleBaord');
                BoardPositive.classList.add('sizeBoardDouble')
                BoardNegative.classList.add('sizeBoardDouble')

                BoardContainer.appendChild(BoardPositive);
                BoardContainer.appendChild(BoardNegative)
                contenedor.appendChild(BoardContainer);
                conteiner.appendChild(contenedor);


            }
            //Genera los 6 ejercicios del principio de pagina mas sus curvas con titulos
            if (el[0] == 8) {

                let content = document.createElement('div');
                let contentArtefact = document.createElement('div');
                let arrayDivBoard = [];
                let arraDivText = [];
                if (el[1] > 0) {
                    for (i = 0; i < el[1]; i++) {
                        let contentExampleText = document.createElement('div');
                        let example = document.createElement('div');
                        let exampleText = document.createElement('div');
                        contentExampleText.appendChild(exampleText);
                        contentExampleText.appendChild(example);
                        exampleText.classList.add('bold-example');
                        contentArtefact.appendChild(contentExampleText);
                        contentExampleText.className = 'artefact'
                        example.className = 'defBoard test short-board margen-5';
                        example.setAttribute('data-board', el[3][i]);
                        arrayDivBoard.push(contentExampleText);

                        for (text = 0; text < el[2]; text++) {
                            let span = document.createElement('span');
                            span.textContent = el[4][i][text];
                            arraDivText.push(span);
                            exampleText.appendChild(span);


                        }


                    }


                }
                content.classList.add('contenedorGrid');
                contentArtefact.classList.add('contenTest');
                content.appendChild(contentArtefact);
                conteiner.appendChild(content);

                /* for(i = 0; i < el[1]; i++){
                  let contentExampleText = document.createElement('div');
                  let example = document.createElement('div');
                  let exampleText = document.createElement('div');
                  contentExampleText.appendChild(exampleText);
                  contentExampleText.appendChild(example);
                  contentArtefact.appendChild(contentExampleText);
                  exampleText.classList.add('bold-example');
                  example.className = 'defBoard test short-board margen-5'; 
                  example.setAttribute('data-board',el[3][i]);
                  arrayDivBoard.push(contentExampleText);
                  for(text = 0; text < el[2]; text++){
                    let span = document.createElement('span');
                    span.textContent = el[4][i][text];
                    arraDivText.push(span);
                    exampleText.appendChild(span);
                    
                  }
                }
                content.classList.add('contenedorGrid');
                contentArtefact.classList.add('contenTest');
                content.appendChild(contentArtefact); 
                conteiner.appendChild(content); */
            }
            if (el[0] == 9) {

                let regex = /(∞\+|\+∞)/g;
                let searchNum = /{(\d+|\d+[.,]\d+)}/gi
                let searchBoard = /board/gi;
                let itemDivText = [];
                let itemInput = [];
                let targetInput = '';
                let targetBox = '';



                if (el[1] > 0) {
                    let contenedorGrid = document.createElement('div');




                    for (container = 0; container < el[1]; container++) {
                        let box = document.createElement('div');
                        box.classList.add('contentArtefact', 'sizeContenedor');
                        box.setAttribute('data-content', `${container}`);
                        itemDivText.push([container]);
                        itemInput.push([]);

                        if (el[2] > 0) {

                            for (div = 0; div < el[2]; div++) {
                                let contenedorText = document.createElement('div');
                                contenedorText.setAttribute('data-text', `${div}`);
                                box.appendChild(contenedorText);
                                contenedorText.textContent = el[3][container] !== undefined ? el[3][container][div] : console.warn('Te hace falta un array, que debe tener la informacion');
                                contenedorText.classList.add('textValInput');
                                itemDivText[container][div] = contenedorText;

                                if (el[4] === true) {
                                    if (!contenedorText.textContent.match(searchBoard)) {


                                        let input = document.createElement('input');
                                        input.classList.add('inputCenter');
                                        if (el[5].hasOwnProperty('sizeInput')) {
                                            input.setAttribute('maxlength', el[5].sizeInput);
                                            input.classList.add('sizeInput-Default');

                                        }
                                        else {
                                            input.setAttribute('maxlength', 2);
                                            input.classList.add('input-reduce');
                                        }





                                        itemDivText[container][div].appendChild(input);
                                        input.addEventListener('click', (e) => {

                                            targetInput = e.target;
                                        })
                                        itemInput[container].push(input)

                                    }
                                } else {
                                    console.warn('Se han desabilitado los inputs')
                                }


                                contenedorText.addEventListener('click', (e) => {
                                    //Tal vez se use ese evento mas adelante
                                    //console.log(contenedorText.dataset.text);
                                })

                            }
                        }
                        box.addEventListener('mouseenter', () => {
                            targetBox = box.dataset.content;
                        })


                        if (el[4] === true) {
                            let divControlled = document.createElement('div');
                            divControlled.classList.add('content_1', 'allbuttons', 'border-dark-top');
                            let btn_check = document.createElement('button');
                            let btn_reset = document.createElement('button');
                            btn_check.className = 'check buttonPrimary button-marg buttonKey';
                            btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
                            divControlled.appendChild(btn_reset);
                            divControlled.appendChild(btn_check);
                            box.appendChild(divControlled);

                            btn_check.addEventListener('click', () => {

                                let defaultInputValue = def[targetActive].datadefault[0][5].conditions[targetBox];

                                def[key].dataInteraction.respCorrect = 0;
                                def[key].dataInteraction.respIncorrect = 0;


                                for (inputVal = 0; inputVal < defaultInputValue.length; inputVal++) {
                                    let valNum = itemInput[targetBox][inputVal].value.replace(new RegExp("[' ']", "g"), "").replace(regex, "∞").toLocaleLowerCase()



                                    if (defaultInputValue[inputVal].includes(null)) {
                                        if (valNum.search(searchNum) !== -1) {
                                            itemInput[targetBox][inputVal].classList.add('borderNone')
                                            itemInput[targetBox][inputVal].classList.remove('failed')
                                            itemInput[targetBox][inputVal].classList.add('pass')
                                            def[key].dataInteraction.respCorrect += 1;

                                        } else {
                                            itemInput[targetBox][inputVal].classList.add('borderNone')
                                            itemInput[targetBox][inputVal].classList.remove('pass')
                                            itemInput[targetBox][inputVal].classList.add('failed')
                                            def[key].dataInteraction.respIncorrect += 1;
                                        }

                                    } else {
                                        if (defaultInputValue[inputVal].includes(itemInput[targetBox][inputVal].value.replace(new RegExp("[' ']", "g"), "").replace(regex, "∞").replace(searchNum, "").toLocaleLowerCase())) {

                                            itemInput[targetBox][inputVal].classList.add('borderNone')
                                            itemInput[targetBox][inputVal].classList.remove('failed')
                                            itemInput[targetBox][inputVal].classList.add('pass')
                                            def[key].dataInteraction.respCorrect += 1;
                                        } else {
                                            itemInput[targetBox][inputVal].classList.add('borderNone')
                                            itemInput[targetBox][inputVal].classList.remove('pass')
                                            itemInput[targetBox][inputVal].classList.add('failed')
                                            def[key].dataInteraction.respIncorrect += 1;

                                        }
                                    }




                                }

                                sendData(cleanDataJ());

                            })

                            btn_reset.addEventListener('click', () => {

                                itemInput[targetBox].map(el => {
                                    el.classList.remove('pass', 'failed', 'borderNone')
                                    el.value = '';
                                })
                            })

                        } else {
                            console.warn(`Se han desabilitado los botones del contenedor ${container}`)
                        }
                        conteiner.appendChild(box)
                    }

                }

                itemDivText.map(content => {
                    let result = content.findIndex(item => item.textContent.match(searchBoard));

                    if (content[result]) {
                        content[result].setAttribute('data-board', content[result].textContent);
                        content[result].classList.add('defBoard', 'short-board', 'board-item');
                        content[result].classList.remove('textValInput');
                    } else {
                        content.length !== 0 ? console.warn('elementos vacio') : false;


                    }

                })

            }
            //Genera los 3 ejercicios del principio de pagina mas sus curvas validadas
            if (el[0] == 10) {

                let content = document.createElement('div');
                let contentArtefact = document.createElement('div');
                let arrayDivBoard = [];
                if (el[1].length > 0) {
                    for (i = 0; i < el[1].length; i++) {

                        let contentExampleText = document.createElement('div');
                        let example = document.createElement('div');

                        contentExampleText.appendChild(example);
                        contentArtefact.appendChild(contentExampleText);
                        example.className = 'defCurveBoard';
                        example.setAttribute('data-artifact', el[1][i]);
                        arrayDivBoard.push(contentExampleText);

                    }


                }
                content.classList.add('contenedorGrid');
                contentArtefact.className = "d-flex flex-wrap justify-content-center"
                content.appendChild(contentArtefact);
                conteiner.appendChild(content);

            }

        }
    } else {
        return false;
    }

}

function cleanDataJ() {

    let result = {};

    result[targetActive] = def[targetActive].dataInteraction;
    return result;



}
