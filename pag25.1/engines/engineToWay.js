//> INICIO________/\/\____/\/\________/\/\/\________/\/\___________/\/\________/\/\_________/\/\______/\/\_________/\/\_________/\/\__________ ...

//Documentación e información de Definiciones: https://docs.google.com/document/d/1EhjchD7XvrH148LPJC4sK1WNrSmJOPsBXtVtwLx28So/edit?usp=sharing 
//EJEMPLO: https://jsfiddle.net/h2gr9y34/2/
//Documentación de la librería: https://cortexjs.io/mathlive/

//CREAR RAMA EN REPOSITORIO


let etwInputsCreated = {}
let etwPreviousElementValidated = {}
let previousBoardFocusRef = null

//=========================================================| Función Principal |==================================================================

function etwMain(etwDefParam, etwDefBoardsParam) {
   
   const tmp = document.querySelector("#tmp-way");
   const divs = document.querySelectorAll(".elementEtw");
   
   divs.forEach((div, i) => {
      const clone = tmp.content.firstElementChild.cloneNode(true);
      const $board = clone.querySelector(".etwBoard");
      const btnAll = clone.querySelector(".btn-all");
      const btnHelp = clone.querySelector(".help-btn")
      //const helpMsg = clone.querySelector(".etwArtifact__help-msg")
      const btnCloseHelp = clone.querySelector(".etwArtifact__help-msg-btnClose");
      const fieldName = clone.querySelector('.etwArtifact__elements')
      const containerTitle = clone.querySelector('.etwArtifact__title')


      const id = "etwBoard-" + i;
      $board.setAttribute("id", id);

      const boardSelect = div.dataset.board;
      const ref = `artifact_${i+1}`
      
      clone.id = ref

      fieldName.id = `${ref}-otherElements`
      containerTitle.id = `${ref}-titleElements`
      btnHelp.id = `${ref}-btnHelp`
      
      //btnCloseHelp.id = `${ref}-btnCloseHelp`


      etwInputsCreated[ref] = {
         board: $board,
         inputsRef: [],
         fieldInputWayName: false
      }

      if (!etwDefBoardsParam[boardSelect]) {
         console.warn("<!> board undefined <!>");
         return;
      }
     
      const artifactDefault = {
         debug: false,
         statusValidate: false,
         pointsData: [[]],
         timeInteraction: 0,
         ...etwDefParam[ref],
         conditions: {
            
            valueInputs: etwDefParam[ref].conditions.valueInputs || [null, null],
            valueWayName: etwDefParam[ref].conditions.valueWayName || false,
            
                  },
         buttonsActive: {
            points: etwDefParam[ref].buttonsActive?.points || false
         }
      };

      const style = etwDefBoardsParam[boardSelect].style;

      div.style =
         "width: " +
         (style.maxWidth || "") +
         "px; height: " +
         (style.maxHeight || "") +
         "px;";
      div.appendChild(clone);
      
      
      btnAll.addEventListener("click", (e) => {
         if (e.target.classList.contains("check")) {
            gTime(etwDefParam[ref], false, false);
            etwDefValidation(ref, i+1, etwPreviousElementValidated, id, etwDefParam, etwDefBoardsParam);          
            e.stopPropagation()
         } else if (e.target.classList.contains("reset")) {
            etwDefReset(ref, board, etwInputsCreated, etwDefParam, etwDefBoardsParam);
         } 
      });


      clone.addEventListener('click', (e)=>{
         etwDefParam[ref].statusValidate = false
         gTime(etwDefParam[ref], true)
      })
      
      clone.addEventListener('mouseenter', ()=>{
         gTime(etwDefParam[ref], true)
      })

      clone.addEventListener('mouseleave', ()=>{
         gTime(etwDefParam[ref], false, false)  
      })


      etwDefParam[ref] = artifactDefault;

      const board = etwDefBoard(etwDefParam, etwDefBoardsParam,ref, boardSelect, id, style, );
      elementOfArtifact(ref, etwDefParam, etwDefBoardsParam, board, id, clone)

   });
}

//======================================================== Función Para Pintar Boards |====================================================

function etwDefBoard(etwDefParam, etwDefBoardsParam, ref, boardSelect, id, style) {
   const elementReturned = gBoard(ref, etwDefBoardsParam[boardSelect], id, style)
   return elementReturned['board'];
}

//funcion para crear elementos por artefactos

function elementOfArtifact(refParam, etwDefParam, etwDefBoardsParam, board, id, artifact){
   //const content = etwDefParam[refParam].conditions.textOfHelp
    
   if(etwDefParam[refParam].showTitle){
      etwTitleofArtifact(refParam, id,etwDefParam, etwDefBoardsParam )
   }

   if(etwDefParam[refParam].inputsDefault){
      etwInputsDefault(etwDefParam[refParam].inputsDefault, board, refParam, id, etwDefParam)
   }
   
   if(etwDefParam[refParam].showWayNameInput){
      etwInputName(refParam, id, etwDefParam, etwDefBoardsParam)
   }

   if(etwDefParam[refParam].showText){
      //va con textOfExample
      etwShowText(refParam, id,etwDefParam, etwDefBoardsParam)
   }

   if(etwDefParam[refParam].helpMsg){
      document.querySelector(`#${refParam} .help-btn`).classList.remove('d-none')
      const content = etwDefParam[refParam].textOfHelp
      
      gHelpMsg(etwDefParam, artifact, refParam)
   }

}

//======================================================|| Creacion de Inputs por Defecto ||============================================


function etwInputsDefault(inputsRef, boardRef, refParam, idBoard,etwDefParam){

//::::::::::::::::::::::::::::::::::::::| creacion de campo |:::::::::::::::::::::::::::::::::    

   inputsRef.forEach((input, i)=>{
     
      let id ="input-"+i+"-"+idBoard;
      let readOrWritte = input[1] ? '' : "readonly"; // establece si los inputs pueden ser editados o no
      let contenido = input[2] ? input[2] : ''; // almacena el contenido pasado como parametro
      

      const mathFieldtoCreate = boardRef.create( //creación del input
         "text",
         [
            input[0][0],
            input[0][1],
            `<math-field virtual-keyboard-mode='onfocus' fonts-directory='fonts' keypress-sound = "none"  ${readOrWritte} class="input-for-way" id =${id}> </math-field>`
         ],
         {fixed: true, fontSize: 28, anchorX: "middle"}
      );

//::::::::::::::::::::::::::::::::::::| configuración de los campos |:::::::::::::::::::::::::::::::::::::::::::::::::::    

         const campo = document.querySelector(`#input-${i}-${idBoard}`);
         campo.textContent = contenido;
         
         const optionsKeyboard = getKeyboardMath (window.screen.width)
         campo.setOptions({
            "customVirtualKeyboardLayers": optionsKeyboard[0],
            "customVirtualKeyboards": optionsKeyboard[1],
            "virtualKeyboards": optionsKeyboard[2],
           
          });
         
        // campo.setAttribute('keypress-sound',"none");

//::::::::::::::::::::::| logica para que no se valide si es por defecto y guardado en variable global |::::::::::::::::::::::::::::::::::::::::::::::::

         let informationInput = [input[3],campo]
         
         if(readOrWritte === "readonly"){ //logica para que no se valide si es por defecto           
            informationInput.push(false)
            campo.classList.add('input-for-way--default')
         }else{
            informationInput.push(true)
         }
//::::::::::::::::::::::::::::::::::::| añadidura de los eventos a los inputs |::::::::::::::::::::::::::::::::::::::::

         campo.addEventListener("keydown", (evt) => { //evento para bloquear el teclado a excepción de las teclas direccionales y boton para borrar
            
            if (evt.key !== 'Backspace' && evt.key !== 'ArrowLeft' && evt.key !=='ArrowRight')  {
            evt.preventDefault() 
            }
         }, {capture: true})

         campo.addEventListener('focus',()=>{
            gTime(etwDefParam[refParam], true)
         })
      
      if(informationInput[2] !== false){
         campo.addEventListener('input', ()=>{
            etwDefParam[refParam].statusValidate = false;
            gTime(etwDefParam[refParam], true)
         }) 
      }
         
         campo.addEventListener('blur',()=>{
            gTime(etwDefParam[refParam], false,false)
         })

      etwInputsCreated[refParam].inputsRef.push(informationInput);
   })
  
}

//====================================================|| Creacion de Titulos de artefactos ||=============================================================

function etwTitleofArtifact(refParam, id,etwDefParam, etwDefBoardsParam ){
   const element =  document.getElementById(`${refParam}-titleElements`)
   const content =  etwDefParam[refParam].artifactTitle

   const containerTitle =  document.createElement('h5')

   containerTitle.textContent = content
   containerTitle.classList.add('p-1')

   element.appendChild(containerTitle)

}

//====================================================|| Creacion de Mensajes de Ejemplo ||=============================================================

function etwShowText(refParam, idRef, etwDefParam, etwDefBoardsParam){

   const element =  document.getElementById(`${refParam}-otherElements`)
   const content = etwDefParam[refParam].textOfExample

   let contentText = document.createElement('p')
   contentText.classList.add('p-1')
 
   if(typeof content === 'string'){
      contentText.textContent = content;
   }
  
   if(typeof content === 'object'){
      
      let contentTitle =  document.createElement('strong')
      let contentInfo = document.createElement('span')
      
      contentInfo.appendChild(document.createTextNode(content.info || '<insertar texto en definicion>' ))
      contentTitle.appendChild(document.createTextNode(content.title || '<insertar titulo>'))
      
      contentText.appendChild(contentTitle)
      contentText.appendChild(contentInfo)
   }

   element.appendChild(contentText)
}

//========================================|| creacion de inputs de nombre del camino ||============================================

function etwInputName(refParam, idRef,etwDefParam, etwDefBoardsParam){
   
      const element =  document.getElementById(`${refParam}-otherElements`)
      
      let mathField = document.createElement('math-field')
      let titleMath =  document.createElement('p')

      mathField.setAttribute('virtual-keyboard-mode', 'onfocus')
      mathField.classList.add('fieldNameInput')
      titleMath.textContent = 'Nombre del Camino'
      titleMath.classList.add('titleWayName') 


      element.appendChild(titleMath)
      element.appendChild(mathField)
      const field = element.querySelector('math-field')
      
      const keyboardOptions = getKeyboardMath(window.screen.width)

      field.setOptions({
         "customVirtualKeyboardLayers": keyboardOptions[0],
         "customVirtualKeyboards": keyboardOptions[1],
         "virtualKeyboards": keyboardOptions[2]
       });

      field.addEventListener('focus',()=>{
         gTime(etwDefParam[refParam], true)
      })

      field.addEventListener('input', ()=>{
         gTime(etwDefParam[refParam], true)
      })

      field.addEventListener('blur',()=>{
         gTime(etwDefParam[refParam], false,false)
      })
      etwInputsCreated[refParam].fieldInputWayName = mathField
 
}


//=========================================|| **VALIDACION** ||=================================================

function etwDefValidation(ref, numBoard, previousValuesParam,id,etwDefParam, etwDefBoardsParam) { 

   let diferentPreviousElementOnInput = false
   let inputsOfBoard = etwInputsCreated[ref].inputsRef
   let inputWayName = etwInputsCreated[ref].fieldInputWayName
   let stateInputs = []
   let definitioValueInputs =  etwDefParam[ref].conditions.valueInputs
   let definitionValueWayName = etwDefParam[ref].conditions.valueWayName

//ordenando inputs definidos para que coincidan entre ellos utilizando el id especificado

   inputsOfBoard.sort()
   definitioValueInputs.sort()
   
//:::::::::::::::::::::::::::::|| Validacion de los inputs del nombre del camino ||:::::::::::::::::::::::::::::::::::::
  
   if(definitionValueWayName !== false){ 
     
      const informationInput = [inputWayName] //información del input
     
      //inputWayName.value = inputWayName.value.replace(new RegExp(regex),'') //eliminando '\' para validar
      
      if (definitionValueWayName === inputWayName.value){
         informationInput.push('correct')  
      }
      else{
         informationInput.push('incorrect')
      }
      informationInput.push('wayName')
      stateInputs.push(informationInput)
   }
   else{ 
      //caso: si contiene input way name pero no se ha creado la definicion
      if(inputWayName){
         console.warn('|Advertencia: EL board contiene un input para el nombre de camino y la propiedad "valueWayName" no se ha creado o esta vacia en la definicion\nsi declaraste la propiedad puedes revisar si está afuera de conditions')
      }
      
   }
//:::::::::::::::::::::::::::::|| Validacion de los inputs del board ||:::::::::::::::::::::::::::::::::::::::::::::::::

   inputsOfBoard.map((item,index)=>{ //validacion de los inputs de los boards

      let valueOfBoardInput = item[1].value
      const isToValidate = item[2]
      const informationInput = [item[1]]

      if (isToValidate){ 
      
         let encontrado = definitioValueInputs.filter((e)=> e[0] === item[0])

         if(encontrado.length === 0){
            console.warn(`🤔🤔🤔🤔... 🤦‍♂️🤦‍♂️🤦‍♂️ el input definido en el objeto etwDefBoards con el id ${item[0]} no tiene validación disponible en etwDef>${ref}  `)
         }

         if(encontrado[0][1] == valueOfBoardInput){
            informationInput.push('correct')
         } 
         else{
            informationInput.push('incorrect') 
         }   
      }
      else{ // caso: si el input es por defecto

         informationInput.push('default')
      }

      informationInput.push('boardInput')
      stateInputs.push(informationInput)

   })


//::::::::::::::::::::::::|| Lógica para que envie data solo si es distinto los inputs ||:::::::::::::::::::::::::::::::::::::::::

   stateInputs.forEach((item, index)=>{
      
      const actualValue = item[0].value
      const previousValues = previousValuesParam[ref]? previousValuesParam[ref][index]: null;

      //verifica si algun valor cambia
      if (actualValue !== previousValues){
         diferentPreviousElementOnInput = true //bandera para enviar data
      }
   })


   //Se ejecuta si alguno de los valores de los inputs se cambia o si la bandera es true
   if(diferentPreviousElementOnInput === true){

      //copiar en objeto global por valor de los valores del board en distintos niveles del array
      previousValuesParam[ref] = stateInputs.map((item, index)=>{
         let subItem = item.map((subItem)=> subItem)
         return subItem[0].value
      })
   
     sendData(rCleanData(ref, stateInputs, numBoard,etwDefParam)) 
   }


   addColorOfDefinition(stateInputs)
   etwDefParam[ref].statusValidate = true
   const incorrectResponse = stateInputs.every((e)=> e[1] !== 'incorrect' && e != '')


   if(stateInputs.length > 0){
      if (incorrectResponse){
         gAlerts(etwDefParam[ref],id, 'Bien', 1, 26)
      }
      else{
         gAlerts(etwDefParam[ref],id, 'Algunas respuestas no son correctas', 2)
         setTimeout(()=>{
            etwDefParam[ref].textAlert.remove()
            etwDefParam[ref].textAlert = null
         },2000)
      }
   }

}

//==============================================| Función Para Agregar Color de Validación |===================================================

function addColorOfDefinition(inputValidated){
   inputValidated.forEach((input, index)=>{
      const stateAnswer = input[1]
      const element = input[0]
      
      if(stateAnswer !== 'default'){
         if(stateAnswer === 'correct'){

            if (element.classList.contains('failed')) element.classList.remove('failed')
            element.classList.add('pass')            

         }
         else{

            if (element.classList.contains('pass'))  element.classList.remove('pass')

            element.classList.add('failed')
             setTimeout(()=>{
               element.classList.remove('failed')
            },2000) 
            
         }
      }

   })
}
//===================================================| Función Para Resetear Inputs |=================================================

function etwDefReset(ref, board, etwInputsCreatedParam){
   let inputs  = etwInputsCreatedParam[ref].inputsRef

   inputs.map((item, index)=>{
      const isEditable = item[2]

      if (isEditable) {
         item[1].value = ' ';
         if(item[1].classList.contains('pass')) item[1].classList.remove('pass')
         if(etwDef[ref].textAlert) etwDef[ref].textAlert.remove()
         
         etwDef[ref].textAlert = null
      }
   })
  
}

//===================================================| Función Para Crear Estructura de Data |==================================================================

function rCleanData(refParam, stateInputs, numBoard,etwDefParam){ //modificar para que sea standar o example
   
   //obtención de elementos del board
   let dataResult = {}
   let inputBoardValidated = stateInputs.filter((element)=> element[1] !== 'default' && element[2] === 'boardInput')
   let inputWayName = stateInputs.filter((element)=> element[1] !== 'default' && element[2] === 'wayName') 
   let correctResponse = stateInputs.filter((element)=> element[1] == 'correct' && element[0].value != '')
   let incorrectResponse = stateInputs.filter((element)=> element[1] == 'incorrect'  && element[0].value != '')
   let forAnswer = stateInputs.filter((element)=> element[0].value === '')

   dataResult.elementArtifact = {inputValue:{}}

   inputBoardValidated.forEach((item, index)=>{
      dataResult.elementArtifact.inputValue[`input_${index+1}`] = item[0].value || ''     
   })
   
   if(inputWayName.length > 0){
      dataResult.elementArtifact.inputWayNameValue = inputWayName[0][0].value
   }

   dataResult.artifact = numBoard
   dataResult.typeArtifact = 'Standard'
   dataResult.results = {correct: correctResponse.length, incorrect: incorrectResponse.length, forAnswer: forAnswer.length}   
   dataResult.timeInteraction = etwDefParam[refParam].timeInteraction
   return dataResult
   //console.log(`dataResult ${refParam}:\n`, dataResult); //cambiar 'console.log' por 'return dataResult' en microservicio
   
}
 
 //>FIN ...__/\___/\/ ___________________________________________________________________________________________________________________________|