//> INICIO________/\/\____/\/\________/\/\/\________/\/\___________/\/\________/\/\_________/\/\______/\/\_________/\/\_________/\/\__________ ...

//Documentación e información de Definiciones: https://docs.google.com/document/d/1EhjchD7XvrH148LPJC4sK1WNrSmJOPsBXtVtwLx28So/edit?usp=sharing 
//EJEMPLO: https://jsfiddle.net/h2gr9y34/2/
//Documentación de la librería: https://cortexjs.io/mathlive/

//CREAR RAMA EN REPOSITORIO

let icPreviousValidation = []

//=========================================================| Función Principal |==================================================================

function icMain(icDefParam, etwDefBoardsParam) {

    const tmp = document.querySelector("#tmp-inputCurves");
    const divs = document.querySelectorAll(".element-inputCurves");

    divs.forEach((div, i) => {

        const clone = tmp.content.firstElementChild.cloneNode(true);
        const $board = clone.querySelector(".inputArtifact__board");
        const btnAll = clone.querySelector(".inputArtifact__btn");

        const id = "inputArtifact__board-" + i;
        const refArtifact = `artifact_${i }`
       
        $board.setAttribute("id", id);
        clone.id = refArtifact

        const boardSelect = div.dataset.board;

        if (!etwDefBoardsParam[boardSelect]) {
            console.warn("<!> board undefined <!>");
            return;
        }

        if (!icDefParam[refArtifact]){
            console.warn('🧐 No hay defición', refArtifact, "");
            return
        }
        
        const artifactDefault = {
            debug: false,
            statusValidate: false,
            curves:[],
            pointsData: [],
            inputsElement:undefined,
            timeInteraction: 0,
            artifactNumber: i+1,
            ...icDefParam[refArtifact],
            conditions: {
                inputsToValidate:icDefParam[refArtifact].conditions.inputsToValidate || false,
            },
        };
        
        const style = etwDefBoardsParam[boardSelect].style;

        div.style =
            "width: " +
            (style.maxWidth || "") +
            "px; height: " +
            (style.maxHeight || "") +
            "px;";
            div.appendChild(clone);
            
            clone.addEventListener('click',()=> {
                if(!clone.classList.contains('shadow')) clone.classList.add('shadow')
            })
            btnAll.addEventListener('click', (e) => {
                if (e.target.classList.contains("inputArtifact__btnCreateCurve")) {
                gTime(icDefParam[refArtifact], false, false);
                icValidation(artifactDefault.conditions, board, artifactDefault,clone,icPreviousValidation)
                console.log('checked');
                e.stopPropagation()
            } else if (e.target.classList.contains("inputArtifact__btnReset")) {
                console.log('reset');
                resetArtifact(artifactDefault,board,clone,refArtifact)
            }
           
        })


        const board = etwDefBoard(icDefParam, etwDefBoardsParam, refArtifact, boardSelect, id, style,);
        elementOfArtifact(artifactDefault,etwDefBoardsParam,refArtifact,clone,board,icPreviousValidation)
        
        icDefParam[refArtifact] = artifactDefault;
    });
}

//======================================================== Función Para Pintar Boards |====================================================

function etwDefBoard(etwDefParam, etwDefBoardsParam, ref, boardSelect, id, style) {
    const elementReturned = gBoard(ref, etwDefBoardsParam[boardSelect], id, style)
    return elementReturned['board'];
}

//funcion para crear elementos por artefactos

function elementOfArtifact(artifactDefault, boardDefinition,refArtifact,clone,board, previousValues) {
    
    if(artifactDefault.conditions.inputsToValidate){
        icCreateInputs(artifactDefault.conditions,clone,board,artifactDefault,previousValues)
    }

    if(artifactDefault.helpMsg){
        document.querySelector(`#${refArtifact} .help-btn`).classList.remove('d-none')
        gHelpMsg(artifactDefault, clone,refArtifact)
    }

}


//===============================================| Función para crear inputs |==================================================================

function icCreateInputs({inputsToValidate} , dom,board, artifact, previousValues){

    const containerInputs = dom.querySelector('.inputArtifact__inputs')
    const tmpInputs = document.getElementById('tmp-coords')
    const fragment  = new DocumentFragment()
    const allInputs = []

    inputsToValidate.map( (inputObject, index, array) =>{

        const cloneInput = tmpInputs.content.firstElementChild.cloneNode(true)
        const coordX = cloneInput.querySelector('.defaultCoordX')
        const input = cloneInput.querySelector('.inputArtifact__inputCoord')

        inputObject.defaultYvalue = inputObject.defaultYvalue 
        inputObject.editable = inputObject.editable === false? false : true
        inputObject.pointObject = null
        inputObject.status = null
        
        coordX.textContent = inputObject.defaultXvalue

        if(inputObject.editable){
            input.addEventListener('input',()=>{
                inputObject.status = icValidateInputs(inputObject, input, cloneInput,artifact)
                const point = managePoints(inputObject, input,board,artifact,dom) 
                if(point != null && typeof point != 'number') inputObject.pointObject = point

            })
            
            input.addEventListener('change',(e)=>{
                console.log('change');
                const equalPreviousValues = equalValues(artifact.conditions,previousValues)
                
                if (!equalPreviousValues){
                    icPreviousValidation = array.map(input => input.status)
                    cleanData(artifact)
                }
                console.log(equalPreviousValues? 'es igual' :'es diferente');

            })
        }
        else{
            input.setAttribute('readonly','')
            input.textContent = inputObject.defaultYvalue || 'Y'
            inputObject.status = true
        }
      
        input.id = 'input-'+index
        allInputs.push(input)
        fragment.appendChild(cloneInput)
    })

    containerInputs.appendChild(fragment)
    setInputsOptions(allInputs)
    artifact.inputsElement = allInputs
}

function icValidateInputs ({succesValue }, input, element,artifact){
    

    if(!input.value){
        element.classList.remove('pass')
        element.classList.remove('failed')
        return false
    }

    if (succesValue === input.value){
        if(element.classList.contains('failed')) element.classList.remove('failed')
        element.classList.add('pass')
        return true
    }
    else{
        if(element.classList.contains('pass')) element.classList.remove('failed')
        element.classList.add('failed')
        return false
    }
    
}

function setInputsOptions (allInputs,band = 1){
    allInputs.forEach(input =>{
        
        if (band === 1){
            const optionsKeyboard = getKeyboardMath (window.screen.width)
            input.setOptions({
            "customVirtualKeyboardLayers": optionsKeyboard[0],
            "customVirtualKeyboards": optionsKeyboard[1],
            "virtualKeyboards": optionsKeyboard[2],
          });
        }
        
        if(band === 2){
            input.setAttribute('readonly','')
        }

    })
}

function managePoints({defaultXvalue,status, pointObject} = param, input,board,artifact,clone){
    const contentInput = input.value

    if(contentInput !== ''){
        if(pointObject === null){
            const point =  board.create('point',[parseFloat(defaultXvalue)|| 0,parseFloat(input.value) || 0],{fixed:true})
            artifact.pointsData.push(point)
            const newCurve = refreshCurve(board,artifact)
            if(newCurve !== undefined) artifact.curves.push(newCurve)
            return point    
        }
        else{

            pointObject.setPosition(JXG.COORDS_BY_USER, [pointObject.X(), parseFloat(input.value)])
            pointObject.setAttribute({visible:true})

            const findPoint = artifact.pointsData.findIndex(e => e === pointObject)
            if(findPoint === -1){artifact.pointsData.push(pointObject)}

            const newCurve = refreshCurve(board,artifact)
            if(newCurve !== undefined) artifact.curves.push(newCurve) 
            
            animationResponse(null, clone)
            board.update()
        }
    
    }
    else{
        if(pointObject !== null){
            
            pointObject.setAttribute({visible:false})
            artifact.pointsData = deletePoints(pointObject,artifact)
            
            const newCurve = refreshCurve(board,artifact)
            if(newCurve !== undefined) artifact.curves.push(newCurve) 
            
            animationResponse(null, clone)

            board.update()
        }else{
            return null
        }
    }
  
} 

function deletePoints(point, artifact){return artifact.pointsData.filter((e)=> e.id !== point.id)}

function refreshCurve(board,{curves, pointsData}){
    if(!curves.length){
        return
    }
    
    if(!pointsData.length) {
        curves.pop()
        return
    }

    const curvetoRemove = curves.shift()
    curvetoRemove.remove()

    pointsData.sort((p1,p2) => p2.X() - p1.X())
    const curva = board.create('cardinalspline', [pointsData, 1, 'centripetal'], { strokeColor: 'black', strokeWidth: 3 },)
    
    return curva
}


function icValidation({inputsToValidate},board, artifact,clone, previousValues){
    const {pointsData,curves, inputsElement} = artifact
    const inputsToValidation = inputsToValidate.filter((obj)=> obj.editable !== false)
    let newValues = null

    const response  = inputsToValidation.every(({status})=>{
        return status === true
    })
    
    pointsData.sort((p1,p2) => p2.X() - p1.X())

    if(!curves.length && pointsData.length > 0){
        const curva = board.create('cardinalspline', [pointsData, 1, 'centripetal'], { strokeColor: 'black', strokeWidth: 3 },)
        curves.push(curva)
    }

    const equalPreviousValues = equalValues(artifact.conditions,previousValues)

    if (!equalPreviousValues){
        icPreviousValidation = inputsToValidate.map(input => input.status)
        cleanData(artifact)
    }
    
    icPreviousValidation = inputsToValidate.map(input => {
        return input.status
    })

    animationResponse(response,clone)

}

function animationResponse(status,clone){

    const msg = clone.querySelector(".msg")
    if(status){
        msg.classList.remove('d-none')
        msg.classList.add('msg__succes')
        msg.classList.add('animateSucces')
        setTimeout(function(){
            msg.classList.add('animateSucces')

        },100)
    }
    else if(status === false){
        msg.classList.remove('d-none')
        msg.classList.add('msg__error')
        msg.classList.add('animateError')
        setTimeout(function(){
            msg.classList.add('animateError')

        },100)
    }
    else if(status === null){
        if(!msg.classList.contains('d-none')){
            msg.classList.add('d-none')  
            if(msg.classList.contains('msg__succes'))  msg.classList.remove('msg__succes')
            if(msg.classList.contains('msg__error'))  msg.classList.remove('msg__error') 

        }
    }

    setTimeout(function(){
        if(msg.classList.contains('animateSucces')) msg.classList.remove('animateSucces')
        if(msg.classList.contains('animateError')) msg.classList.remove('animateError')
    },500)
}


function resetArtifact(artifact,board,clone,refArtifact){
    const {inputsToValidate} = artifact.conditions
    const domInputs = document.querySelectorAll(`#${refArtifact} .inputArtifact__coord`)
    
    if(domInputs.length){
        domInputs.forEach(input => {
            if (input.classList.contains('pass')) input.classList.remove('pass')
            if (input.classList.contains('failed')) input.classList.remove('failed')
        })
    }

    if(artifact.inputsElement){
        artifact.inputsElement.forEach(input => input.value = '')
    }

    if(artifact.curves.length){
        const curves = artifact.curves.splice(0,artifact.curves.length)
        curves.forEach(curve => curve.remove())      
    }
        

    if(artifact.pointsData.length){
        console.log(artifact.pointsData);
        const points = artifact.pointsData.splice(0,artifact.pointsData.length)
        points.forEach(point => point.setAttribute({visible: false}))
    }

    inputsToValidate.forEach(input => {
        input.status = null
    })

    animationResponse(null,clone)
}


function cleanData({conditions, artifactNumber}){
    const data = {}
    const {inputsToValidate} = conditions
    const correct = inputsToValidate.filter(input => input.status === true).length
    const incorrect = inputsToValidate.filter(input => input.status === false).length
    const forAnswer = inputsToValidate.filter(input => input.status === null).length

    data.artifact = artifactNumber
    data.typeArtifact = 'Standar'
    data.results = {correct, incorrect, forAnswer}

    console.log(data);
}

function equalValues({inputsToValidate}, oldValues){
    const equal = inputsToValidate.every((input,i)=> input.status === icPreviousValidation[i])
    return equal
}

window.addEventListener("scroll", function() {
    // aquí puedes ejecutar la acción que desees
    console.log("El usuario ha realizado un scroll");
   
  });
/*
//==============================================| Función Para Agregar Color de Validación |===================================================

function addColorOfDefinition(inputValidated) {
    inputValidated.forEach((input, index) => {
        const stateAnswer = input[1]
        const element = input[0]

        if (stateAnswer !== 'default') {
            if (stateAnswer === 'correct') {

                if (element.classList.contains('failed')) element.classList.remove('failed')
                element.classList.add('pass')

            }
            else {

                if (element.classList.contains('pass')) element.classList.remove('pass')

                element.classList.add('failed')
                setTimeout(() => {
                    element.classList.remove('failed')
                }, 2000)

            }
        }

    })
}
//===================================================| Función Para Resetear Inputs |=================================================

function etwDefReset(ref, board, etwInputsCreatedParam) {
    let inputs = etwInputsCreatedParam[ref].inputsRef

    inputs.map((item, index) => {
        const isEditable = item[2]

        if (isEditable) {
            item[1].value = ' ';
            if (item[1].classList.contains('pass')) item[1].classList.remove('pass')
            if (etwDef[ref].textAlert) etwDef[ref].textAlert.remove()

            etwDef[ref].textAlert = null
        }
    })

}

//===================================================| Función Para Crear Estructura de Data |==================================================================

function rCleanData(refParam, stateInputs, numBoard, etwDefParam) { //modificar para que sea standar o example

    //obtención de elementos del board
    let dataResult = {}
    let inputBoardValidated = stateInputs.filter((element) => element[1] !== 'default' && element[2] === 'boardInput')
    let inputWayName = stateInputs.filter((element) => element[1] !== 'default' && element[2] === 'wayName')
    let correctResponse = stateInputs.filter((element) => element[1] == 'correct' && element[0].value != '')
    let incorrectResponse = stateInputs.filter((element) => element[1] == 'incorrect' && element[0].value != '')
    let forAnswer = stateInputs.filter((element) => element[0].value === '')

    dataResult.elementArtifact = { inputValue: {} }

    inputBoardValidated.forEach((item, index) => {
        dataResult.elementArtifact.inputValue[`input_${index + 1}`] = item[0].value || ''
    })

    if (inputWayName.length > 0) {
        dataResult.elementArtifact.inputWayNameValue = inputWayName[0][0].value
    }

    dataResult.artifact = numBoard
    dataResult.typeArtifact = 'Standard'
    dataResult.results = { correct: correctResponse.length, incorrect: incorrectResponse.length, forAnswer: forAnswer.length }
    dataResult.timeInteraction = etwDefParam[refParam].timeInteraction
    return dataResult
    //console.log(`dataResult ${refParam}:\n`, dataResult); //cambiar 'console.log' por 'return dataResult' en microservicio

} */

 //>FIN ...__/\___/\/ ___________________________________________________________________________________________________________________________|