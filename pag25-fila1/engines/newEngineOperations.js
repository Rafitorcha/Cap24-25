const globalColor = ['#f16413', 'violet', '#4955FE', '#ffa420', '#083964', '#9e0000', '#0073e8', '#31379a', '#004f57'];

/* conditions: {
   operation: {
      curves: [[0, 1]],
         type: 2,//suma: 1 / Multipicacion: 2
            noise: 25;
   },
   reciprocalCurves: {
      curves: [
         {
            points: [[-1.5, 1], [1.5, 1]]
         }
      ],
      },
} */

function mainOperation(defBoards, allDef) {
   const tmp = document.querySelector('#tmp-SRP');
   const divs = document.querySelectorAll('.operationCurves');
   const callback = {
      allbtn: {
         road: () => document.querySelectorAll(".road"),
         curve: () => document.querySelectorAll(".curve"),
         finishRoad: () => document.querySelectorAll(".finishRoad"),
         back: () => document.querySelectorAll(".back")

      },
      default: (params = {}) => {
         params.def.iMod ??= params.def.pointsData.length - 1;
         oDefAddPoint(params);
      },
      point: ({ def, i, point } = {}) => {
         def.iMod = i;
         if (def.mode != 1) {
            return;
         };
         const colorSet = def.iMod == point.iMod ? globalColor[i] : "#000000";
         callback.allbtn.curve()[point.artifactNumber].style.setProperty('--color', colorSet);
         callback.allbtn.road()[point.artifactNumber].style.setProperty('--color', colorSet);
         callback.allbtn.finishRoad()[point.artifactNumber].style.setProperty('--color', colorSet);
         callback.allbtn.back()[point.artifactNumber].style.setProperty('--color', colorSet);
      },
   };

   console.log(divs);

   divs.forEach((div, i) => {
      const iconst = i;
      const clone = tmp.content.firstElementChild.cloneNode(true);
      const $board = clone.querySelector('.jxgbox');
      const btnAll = clone.querySelector('.btn-all');
      const id = 'defRoadBoard_' + i;
      $board.setAttribute('id', id);
      // Por defecto apunta a un artifact_0 y defBoard_0
      const boardSelect = div.dataset.board || allDef[div.dataset?.artifact || "artifact_0"].defBoard || "board_0";
      const refArtifact = div.dataset.artifact || defBoards[boardSelect || "board_0"]?.artifact || "artifact_0";

      console.log(refArtifact);

      clone.setAttribute("id", refArtifact);

      if (!defBoards[boardSelect]) {
         console.warn('<!> board undefined <!>');
         return;
      };
      let artifactDefault = {
         firsPointsDefault: false,
         dataInteraction: { incorrect: 0, correct: 0 },
         timeInteraction: 0,
         statusValidate: false,
         pointsConfig: false,
         asymptotes: [],

         /* aqui creado por eliezer revisar despues*/

         validateCurves: true,
         pointsOfCurves: false,
         pointsAndInputs:[],
         errorCurves: 0.2,
         curvesInfinity: [],
         arrowCurves: [],
         gridActive:false,
         
         /* /////////////////////////////// */

         pointsData: [[]],
         samePoints: [[]],
         textAlert: null,
         maxCurves: 3,
         curveMod: false,
         visible: true,
         memory: [],
         points: [[]],
         curves: [],
         other: [],
         debug: false,
         mode: 10,
         iMod: null,
         ...allDef[refArtifact],
         conditions: {
            /* aqui condicion de las resiprocas */
            reciprocalCurves: false,
            aditionConstant : allDef[refArtifact].conditions.aditionConstant || null,
            pointsWithInputs: allDef[refArtifact].conditions.pointsWithInputs || false,

            /* /////////////////////////// */
            ...allDef[refArtifact].conditions,
            asymptotes: {
               line: true,
               ...allDef[refArtifact]?.conditions?.asymptotes
            },
            operation: {
               curveResult: [],
               ...allDef[refArtifact]?.conditions?.operation
            },
         },

         config: {
            curves: {
               flex: 1,
               color: "black",
               ...allDef[refArtifact].config?.curves
            },
         },
         buttonsActive: {
            curves: true,
            asymptotes: true,
            ...allDef[refArtifact].buttonsActive
         },
      };
      const style = defBoards[boardSelect].style;
      div.appendChild(clone);
      const dataBoard = gBoard(artifactDefault, defBoards[boardSelect], id, style, callback, i);
      const board = dataBoard.board;

      clone.style.width = style.width ?? "300px";
      clone.style.maxWidth = style.maxWidth ?? "550px";
      clone.style.minWidth = style.minWidth ?? "300px";

      clone.style.height = style.height ?? "400px";
      clone.style.maxHeight = style.maxHeight ?? "550px";
      clone.style.minHeight = style.minHeight ?? "300px";


      if (artifactDefault.conditions?.operation?.curves?.length > 0) {
         const operation = allDef[refArtifact].conditions.operation;
         if (dataBoard?.resultObj?.curves) {
            operation.curves.forEach((curve) => {
               const curveCreate = gOperationCurves({
                  def: artifactDefault,
                  board,
                  curve_1: dataBoard.resultObj.curves[curve[0]],
                  curve_2: dataBoard.resultObj.curves[curve[1]],
                  ...operation
               });
               artifactDefault.conditions.operation.curveResult.push(curveCreate);
            });
         };
      };

      if (dataBoard?.resultObj?.asymptotes) {
         const asyns = dataBoard?.resultObj?.asymptotes;
         asyns.forEach(asyn => {
            asyn[1].on('down', () => {
               gAddPoint(artifactDefault, board, null, asyn[1]);
            });
         });
         artifactDefault.asymptotes = asyns;
      };

      allDef[refArtifact] = artifactDefault;
      btnAll.addEventListener('click', (e) => {

         const button = e.target;
         if (button.classList.contains('check')) {
            console.log(artifactDefault.numero);
            oDefValidation(artifactDefault, defBoards[boardSelect], board, refArtifact, board, iconst);
         } else if (button.classList.contains('reset')) {
            oDefReset(artifactDefault, board, true, iconst);
         } else if (button.classList.contains('back')) {
            oDefReturn(artifactDefault, board);
         } else if (button.classList.contains('curve')) {
            if (artifactDefault.points.at(-1).length > 1) {

               const curve = gAddCurv(artifactDefault, board); //creacion de la curva
               const curveAllPoints = Object.values(curve.ancestors);
               const params = { def: artifactDefault, board, curve, curveAllPoints };
               //agregar los events drag y down para crear las flechas o infinitos
               pointInteraction({ ...params, point: curveAllPoints[0], pointMode: false });
               pointInteraction({ ...params, point: curveAllPoints.at(-1), pointMode: true });

               artifactDefault.other.push(curve);

            };
         } else if (button.classList.contains('gear')) {
            displayConfig({ def: artifactDefault, id: refArtifact });
         } else if (button.classList.contains('pointClose')) {
            gButtonToggle({ def: artifactDefault, button: button, mode: 4 });
         } else if (button.classList.contains('btnAsymptotes')) {
            gButtonToggle({ def: artifactDefault, button: button, mode: 5 });
         } else if (e.target.classList.contains('infinite')) {
            gButtonToggle({ def: artifactDefault, button: e.target, mode: 6 });
         }else if (button.classList.contains('pointInput')) {
            gButtonToggle({ def: artifactDefault, button: button, mode: 7 });
            console.log(artifactDefault.mode);
         }else if (button.classList.contains('btnGrid')) {
            gButtonToggle({ def: artifactDefault, button: button, mode: 8 }); 
         }
      });

      clone.addEventListener("change",
         (e) => {
            if (e.target.classList.contains("rangeConfig")) {
               artifactDefault.config.curves.flex = Number(e.target.value);
            } else if (e.target.classList.contains("colorConfig")) {
               artifactDefault.config.curves.color = e.target.value;
            };
         });
      if (artifactDefault.helpMsg) {
         gHelpMsg(artifactDefault, clone, refArtifact);
         
      };


      /* llamar menu de curvas */
      if(artifactDefault.menuCurves){
        gMenuCurves(artifactDefault, clone, board)
     }

     if(artifactDefault.gridDefault){
      const btnGrid = clone.querySelector('.btnGrid')
      btnGrid.addEventListener('click',()=>{
         const data = {
            x:artifactDefault.gridDefault.vertical || [],
            y:artifactDefault.gridDefault.horizontal || []
         }
         console.log(artifactDefault.numero);
      artifactDefault.gridActive = gCreateGrid(board,data,artifactDefault)
         
      })
     }
   
      board.on("down", (e) => {
         if (artifactDefault.mode === 4 || artifactDefault.mode === 5) {
            console.log('puuunto');
            gAddPoint(allDef[refArtifact], board);
         };
         if(artifactDefault.mode === 7){
            
            cDefAddPointWhithInputs(artifactDefault, board, null,{
               input: {
                   noiseY: 1,
                   noiseX:0.5
                }})
         }
         if (artifactDefault.statusValidate) {
            artifactDefault.statusValidate = false;
         };
         gTime(artifactDefault);
      });

      
      if (!artifactDefault.helpMsg) {
         btnAll.querySelector(".help").style.display = "none";
      };

      if (!artifactDefault.menuCurves) {
        btnAll.querySelector(".menuCurvesShow").style.display = "none";
     };

      if (!artifactDefault.buttonsActive?.curves) {
         btnAll.querySelector(".curve").style.display = "none";
         btnAll.querySelector(".pointClose").style.display = "none";
      };

      if (!artifactDefault.buttonsActive.asymptotes) {
         btnAll.querySelector(".btnAsymptotes").style.display = "none";
      }
      if (!artifactDefault.buttonsActive?.infinities) {
         btnAll.querySelector(".infinite").style.display = "none";
      }

      clone.addEventListener("mouseenter", () => {
         gTime(artifactDefault);
      });

      clone.addEventListener("click", (e) => {
         if (e.target.classList.contains("btnClose")) {
            displayConfig({ def: artifactDefault, id: refArtifact });
         };

         if (!(e.target.classList.contains('check')) && e.target.tagName != "DIV") {
            artifactDefault.statusValidate = false;
         };
         gTime(artifactDefault);

      });

      clone.addEventListener("mouseleave", () => {
         gTime(artifactDefault, false, false);
      });
   });
};

function oDefAddPoint({ def, board, id, attractor, float = false, x, y }) {

   let last = null;
   let last2 = null;
   let firstP = null;

   const arrayPoints = def.pointsData;
   const arraySelect = def.iMod != undefined ? arrayPoints[def.iMod] : arrayPoints.at(-1);
   pointData = [];

   if (arraySelect.length > 0 && arraySelect.at(-1)[1] == "finish") {
      if (def.debug) {
         console.warn("Se retorno por que ya tiene un final");
      };
      return;
   };

   const elementIn = board.getAllUnderMouse();
   const match = elementIn.findIndex((p) => (!Array.isArray(p) && p.elType === 'point') || (p.ignore != undefined && !p.ignore));
   if (!float && def.mode == 3 && match != -1) {
      oDefAddCurv(def, board, id, arraySelect, def.iMod, elementIn[match]);
      gButtonToggle({ def, button: def.buttonActive, toggleResect: true, mode: 3 });
      return;
   };

   if (!float && (def.mode != 1 || elementIn.findIndex(
      (p) => !Array.isArray(p) && ["glider", 'point'].includes(p.elType)) !== -1)) {
      return;
   };

   // el indice del camino
   const iConst = (def.iMod != undefined) ? def.iMod : arrayPoints.length - 1;
   def.memory.push(iConst);

   if (arraySelect.length > 0) {

      if (arraySelect.length > 1) {
         last2 = arraySelect.at(-2)[0];
      };

      last = arraySelect.at(-1)[0];
      firstP = arraySelect[0][0];

      if (float) {
         format = false;
         if (!gInterPoint(last.Y(), firstP.Y())) {
            if (gInterPoint(last2.X(), last.X(), 0.2)) {

               x = function () { return firstP.X(); };
               y = function () { return last.Y(); };

            } else {
               if (!gInterPoint(last2.X(), last.X(), 0.2)) {
                  x = function () { return last.X(); };
                  y = function () { return firstP.Y(); };
               };
            };
         } else {
            y = function () { return last.Y(); };
         };

         if (!gInterPoint(last.X(), firstP.X())) {
            if (gInterPoint(last2.Y(), last.Y(), 0.2)) {
               x = function () { return last.X(); };
               y = function () { return firstP.Y(); };
            } else {
               if (!gInterPoint(last2.Y(), last.Y(), 0.2)) {
                  x = function () { return firstP.X(); };
                  y = function () { return last.Y(); };
               };
            };
         } else {
            x = function () { return last.X(); };
         };
      };
   };

   let coords = board.getUsrCoordsOfMouse();

   x = float ? x() : coords[0];
   y = float ? y() : coords[1];

   if (last) {
      if (
         gInterPoint(last.X(), x) && !gInterPoint(last.Y(), y)
         ||
         !gInterPoint(last.X(), x) && gInterPoint(last.Y(), y)
      ) {
         last.setAttribute({ color: globalColor[iConst] });
      } else {
         if (def.mode == 1) {
            last.setAttribute({ color: "red" });
         };
         return;
      };
   };
   //si coincide con el index del array 0 lo deja poner
   const dataposition = !float ? [x, y, attractor] : [x, y];
   const coincidencia = arraySelect.findIndex((p) =>
      gInterPoint(p[0].X(), typeof dataposition[0] == "function" ? dataposition[0]() : dataposition[0]) &&
      gInterPoint(p[0].Y(), typeof dataposition[1] == "function" ? dataposition[1]() : dataposition[1])
   );

   if (coincidencia != 0 && -1 != coincidencia) { return; };

   const color = def.iMod == null ? globalColor[arrayPoints.length - 1] : globalColor[iConst];
   const point = board.create(!float ? 'glider' : 'point', dataposition, {
      strokeColor: color,
      fillcolor: color,
      opacity: 0.8,
      size: 2,
      name: '',
      visible: () => {
         if (def.iMod != iConst) {
            return (() => def.visible)();
         } else { return true; };
      },
   });

   point.ignore = false;
   point.iMod = iConst;
   point.getDelete = !def.firsPointsDefault || arraySelect.length > 0 ? true : false;

   pointData[0] = point;
   pointData[1] = float ? "finish" : attractor?.typeCurve ? attractor?.typeCurve : "none";
   board.update();

   if (arraySelect.length > 0) {
      const lines = {
         interactive: true,
         strokeColor: color,
         firstArrow: true,
         points: [point, last],
         dash: 2,
         visible: () => {
            if (def.iMod != iConst) { return (() => def.visible)(); } else { return true; };
         },
      };

      const callback = () => {
         def.iMod = def.iMod;
         if (def.mode == 3) {
            oDefAddCurv(def, board, id, arraySelect, def.iMod, elementIn[match]);
         };
      };

      gLineDefault({ callback, def, board, lines, iMod: iConst });

   };
   arraySelect.push(pointData);
};

function oDefAddCurv(def, board, id, arraySelect, iMod = false, newp = false) {
   if (arraySelect.at(-1) && arraySelect.at(-1)[1] === "finish" || !def.pointsData.at(-1).at(-1) && iMod === false) {
      return;
   };

   if (arraySelect.length > 1 || newp == false) {
      oDefAddPoint({ def, board, id, float: true });
   };

   arraySelect.at(-1)[1] = "finish";
   arraySelect.at(-1)[0].setAttribute({
      size: 4,
      strokeColor: "green"
   });
   board.update();
   if (def.pointsData.length - 1 == def.iMod) {
      def.pointsData.push([]);
      def.iMod = null;
   };
};

function oDefReturn(refArtifact, board) {

   let arraySelect = refArtifact.pointsData;
   switch (refArtifact.mode) {
      case 4:
         if (refArtifact.points.length > 0) {
            if (refArtifact.points.length > 1 && refArtifact.points.at(-1).length == 0) {
               refArtifact.points.pop();
               refArtifact.curves.pop();
               oDefReturn(refArtifact, board);
            } else {
               board.removeObject(refArtifact.points.at(-1).pop());
            };
         }
         break;
      case 5:
         board.removeObject(refArtifact.asymptotes.pop());
         break;
      case 6:
         break;
      default:
         if ([1, 2, 3].includes(refArtifact.mode)) {
            if (refArtifact.memory.length > 0) {
               if (arraySelect[refArtifact.memory.at(-1)].at(-1)[0].getDelete) {
                  board.removeObject(arraySelect[refArtifact.memory.pop()].pop()[0]);
               };
            } else {
               return;
            };
         };
         break;
   };

   board.update();

};

function oDefReset(refArtifact, board, option = true, iconst) {

   if (refArtifact.iMod) {

      refArtifact.pointsData[refArtifact.iMod][0][0].setAttribute({ size: 2 });
      const curve = document.querySelectorAll(".curve");
      const back = document.querySelectorAll(".back");

      if (curve[iconst]) { curve[iconst].style.setProperty('--color', null); }
      if (back[iconst]) { back[iconst].style.setProperty('--color', null); }

   };

   let aux;
   if (option) {

      if (refArtifact.firsPointsDefault) {
         aux = refArtifact.pointsData.filter((p) => {
            if (p[0]) {
               return p[0][0].interactive;
            } else {
               return false;
            };
         }).map((p) => [p.shift()]);
      };


  if(refArtifact.points){
   const aux = [[]]
   refArtifact.points.forEach(pointArray => {
      console.log(pointArray);
      pointArray.forEach(point => {
         
         board.removeObject(
            point
         )
        // point.remove()
      })
   })

   refArtifact.points = aux.map(x => x)

   board.fullUpdate()

}


  if(refArtifact.mobileCurves.length){
   refArtifact.mobileCurves.forEach(curveArray => {
      curveArray.forEach(curveObject => {
         curveObject.curveObject.remove()
      })
   })
   board.fullUpdate()

}



      board.removeObject(refArtifact.asymptotes.flat());
      board.removeObject(refArtifact.pointsData.flat());
      refArtifact.pointsData = aux ? [...aux, []] : [[]];
      refArtifact.memory = [];
      board.removeObject(refArtifact.samePoints);
      board.removeObject(refArtifact.points);
      board.removeObject(refArtifact.other.flat());

      refArtifact.points = [[]];
      refArtifact.samePoints = [[]];
      refArtifact.curves = [];
      refArtifact.asymptotes = [];
      board.update();
   };

   if (refArtifact.textAlert) {
      refArtifact.textAlert.remove();
      refArtifact.textAlert = null;
   };


   if(refArtifact.pointsAndInputs.length){
      const aux = []

      refArtifact.pointsAndInputs.forEach((item)=>{
          board.removeObject(
              item.point
          )
          item.mathfield.remove()
      })
         
      board.fullUpdate()
      refArtifact.pointsAndInputs = aux.map(x => x)
  }


   refArtifact.iMod = null;
};

function oDefValidation(def, defBoard, board, refKey, board, i) {
   const points = def.points;
   const conditions = def.conditions;
   let textError = "Revisa los siguentes elementos \n";
   let resp = null;
   let responseChapterFour = null;

console.log("ahjdslakjsdañlskñal");
console.log(def.statusValidate);
   if (!def.statusValidate) {
      console.log("pasa 1");
      if (def.conditions?.operation?.curves?.length > 0) { // este revisa que para cada curva resultante de las operaciones te de un resultado en lo que el usuario ingresa
         
         const conditionCurvesResult = [...def.conditions.operation.curveResult];
         const createCurves = points.slice(0, points.length - 1);
         //manera usada originalmente esta la hizo carlos del pasado para validar una sola operacion pero al dejar los en array se peude convertir en la validacion de varios intervalos 
         //resp = resp != false && def.conditions.operation.curveResult[0][0] && points[0] && gCompareCurves(def.conditions.operation.curveResult[0][0], points[0]);
         //si la cantidad de curvas creadas y la cantidad de condiciones son iguales entonces es valido
         resp = resp != false && createCurves.length == conditionCurvesResult.length && createCurves.length == def.curves.length;
         //itero de manera inversa ya que estoy eliminando de la ultima posicion el elemento
         for (let i = conditionCurvesResult.length - 1; i > -1; i--) {
            const curveResult = conditionCurvesResult[i][0];
            const macth = createCurves.findIndex((points) => gCompareCurves(curveResult, points));// si encuentra una curva que consida con los puntos 
            if (def.debug) {
               console.log("coincidencia", macth);
            };
            if (macth != -1) {// en el caso que sea un indice valido saca el ultimo elemento del array y elimina ese indice de las curvas creadas por el usuario
               conditionCurvesResult.pop();
               createCurves.splice(macth, 1);
            } else {
               break;
            };
         };
         resp = resp != false && conditionCurvesResult.length === 0 && createCurves.length === 0;
         textError += !resp ? def.conditions?.operation?.text || "Error en la curva creada" : "";

         console.log('acaaa');
      };
      if (def.conditions?.asymptotes?.positions?.length > 0) {
         console.log('acaa');
         const asymResponse = asymptotesValidation(def.asymptotes.map((p1) => p1[0].X()).sort(),
            def.conditions.asymptotes.positions.sort());
         resp = resp != false && asymResponse;
         textError += !asymResponse ? def.conditions?.asymptotes?.text || "Error en las Asintotas" : "";

      } else {
         console.log('acaa', resp);

         if (conditions?.asymptotes && !conditions?.asymptotes?.positions && !conditions?.asymptotes?.positionY) {
            // esta aqui me da peo
            // resp = resp != false && conditions.asymptotes.positions.length == 0 && def.asymptotes.length == 0;
            resp = resp != false && def.asymptotes.length == 0 && def.asymptotes.length == 0;
            textError += !resp ? def.conditions?.asymptotes?.text || "Error en las Verticales" : "";
            console.log('acaa', resp);

         };
         console.log('acaa', resp);

      };
      console.log("pasa 2");

      if (def.conditions?.asymptotes?.positionY) {
         //ordenando tanto las posiciones creadas por el usuario como las de la condition
         const asyntotesUser = def.asymptotes.map((asy) => {//ordena las asintotas del usuario y sus puntos para ser comparados mas facilmente
            return [asy[0].X(), asy[1].pointsData.map(p => p.Y()).sort()];
         }).sort((a, b) => a[0] - b[0]);

         const conditionY = def.conditions?.asymptotes.positionY.sort((a, b) => a[0] - b[0]);
         const asymResponsePoints = conditionY.every((asynC, index) => {
            const asynU = asyntotesUser[index];
            //valida que la asintota validada este en la posicion correcta &&
            //accede a cada una de las posiciones de la condicion y valida que este en las posiciones correctas con una olgura de 0.05
            return gInterPoint(asynU[0], asynC[0], 0.05) && asynU[1].length === asynC[1].length && asynC[1].every((posCond, index) => gInterPoint(asynU[1][index], posCond, def.conditions?.asymptotes?.noise ?? 0.15));
         });
         resp = resp != false && asymResponsePoints;
         textError += !asymResponsePoints ? def.conditions?.asymptotes?.text || "Error en los Puntos creados en las Asyntotas" : "";
      };


      if (def.conditions.reciprocalCurves) {
         const noise = def.conditions.reciprocalCurves?.noise ?? 0.2;
         const curvesToValidate = def.conditions?.reciprocalCurves?.curves || null;
         const respCurve = curvesToValidate.every((currentCurve) => {  //recorre las curvas pasadas en definicion
            if (currentCurve.infinities) { // si contiene infinitos
               const response = validateInfinities(def, currentCurve, def.curves, noise);
               return response;
            };

            //valida flechas\_______________________________________________________________________________________________________________         
            if (currentCurve.arrows) {
               const response = validateArrows(def, currentCurve, def.curves, noise);
               return response;
            };
            //valida solo puntos de la curva\_______________________________________________________________________________________________
            if (!currentCurve.infinities && !currentCurve.arrows && currentCurve.points) {
               const response = validateCurves(def, board, currentCurve, def.curves, noise);
               return response;
            };
         });
         resp = (resp == null || resp) && respCurve;

         console.log(resp);
      };
      
      /* Agregado para el 4to cap */
      if(def.conditions?.aditionConstant){ 
         const aux = validatePoint(def,textError) 
         resp = (resp == null || resp) && aux[0]
         textError = aux[1]

      }

      console.log('haiojsodia',def.conditions );
      if(def.conditions?.pointsWithInputs){
         console.log('respuestaaaaaaaaaaaaaaaasdkasldjalksjdakdslas');
         const pointsWithInputs = def.conditions.pointsWithInputs

         const response =  pointsWithInputs.every((objectDefinition) => {
            const coordDefinition = objectDefinition.coord
            const value = objectDefinition.value

            const auxPoint = def.pointsAndInputs.some(object => {
                console.log(object.mathfield.value);
                return (gInterPoint(object.point.coords.usrCoords[1], coordDefinition)) && (value === object.mathfield.value)
            })
            console.log(auxPoint);
            objectDefinition.status = auxPoint
            
            return auxPoint
        })
        console.log('respuesta de los inputs',resp);
        resp = (resp == null || resp) && response
         textError += !response && "Error en los valores de los inputs."

      }

      if(def.conditions?.curveAlone){

         const noise = def.conditions.reciprocalCurves?.noise ?? 0.2;
         allCurveToValidate = def.conditions.curveAlone
         const responseCurves = allCurveToValidate.every((currentCurve)=>{
            let response = validateCurves(def, board, currentCurve, def.curves, noise);
            console.log(currentCurve);
            if(currentCurve.infinities && response){
               console.log('entra acaaaaaa');
               const aux = validateInfinitiesForSector(currentCurve.idSuccesCurves,def,currentCurve.infinities)
               response = response && aux
            }
            console.log('despues del iff');
            console.log('aasdasdacaaa');
            console.log('Mi pana, la curva es ', response ? 'correcta' : 'incorrecta ' );
            return response 
         })

         resp = (resp == null || resp) && responseCurves
         //textError += !resp && ' La curva creada es incorrecta'
         textError += !responseCurves && 'La curva creada es incorrecta. '

      }

      if(def.conditions?.curveMultiplications){
      console.log("pasa 21121");
         
         console.log('curve', def.conditions?.curveMultiplications);

         const allOperations = def.conditions?.curveMultiplications

        const generalResponse =  allOperations.every(objectDefinition => {
            const noise = objectDefinition.noise?? 0.2;

            const {firstCurves, grids, points} = objectDefinition
         
            let responsesMult = []

            responsesMult.push(def.gridActive === grids ? true : false)

            console.log(responsesMult,firstCurves);
            
            console.log(def.mobileCurves.filter(objectCurves => objectCurves[0].initialCurve === 'constant'));    
            
            const responseCurves = firstCurves.every(curveName => {
               const aux = def.mobileCurves.filter(objectCurves => objectCurves[0].initialCurve === curveName)
               console.log(curveName, aux);
               return aux.length ? true : false
            })

            responsesMult.push(responseCurves)

            const resCurves = points.every( arrayPoints => {
               const resultCurves = validateCurves(def,board,{points:arrayPoints},def.curves,noise)
               return resultCurves
            })
            responsesMult.push(resCurves)

            console.log('responses', responsesMult);

            const generalResponse = responsesMult.every(res => res === true)

            return generalResponse

         })
         resp = (resp == null || resp) && generalResponse
         textError = !resp && 'revisa las curvas seleccionadas para la operación o el resultado. '

         console.log('todas las respuestas', generalResponse);

      }

      /* Agregado para el 4to cap */


      def.dataInteraction.incorrect = resp ? 0 : 1;
      def.dataInteraction.correct = resp ? 1 : 0;

      if (resp) {
         gAlerts(def, refKey, "Excelente", 1, 26);
      } else {
         
         gAlerts(def, refKey, textError, 2, 26);
         setTimeout(() => { oDefReset(def, board, false, i); }, 1000);
      };

      if (def.debug) {
         console.table(cleanData(def, refKey));
      } else {
         sendData(cleanData(def, refKey));
      };

      gTime(def, false);
      def.statusValidate = true;
   };
};

function asymptotesValidation(asymptotes, positions) {
   asymptotes.sort();
   positions.sort();
   return (asymptotes.length === positions.length) && positions.every((p, i) => gInterPoint(asymptotes[i], p));
};

function cleanData(refArtifact, refKey) {
   let auxResult = {};
   auxResult = { results: refArtifact.dataInteraction };
   auxResult.elementArtifact = {
      pointsData: [[]],
      samePoints: [[]],
      curves: [],
   };
   auxResult.artifact = Number(refKey.split("_").at(-1));
   auxResult.typeArtifact = "Standard";
   auxResult.seconds = refArtifact.timeInteraction;
   auxResult.idMoodle = !refArtifact.debug ? $idMoodle : "debug";
   if (refArtifact.yellow) {
      auxResult.typeArtifact = "Yellow";
      delete auxResult.results;
   };
   return auxResult;
};

/* esto es lo que arme yo para los eventos de los puntos para lo que estaba haciendo eliezer*/
//agrega la interaction a los puntos
function pointInteraction(params) {
   CallInteractions({ pointMode: false, ...params, drag: true });
   params.point.on("down", (e) => {
      CallInteractions(params);
   });
   params.point.on("drag", () => {
      CallInteractions({ pointMode: false, ...params, drag: true });
   });
};

//aqui esto es para el llamado de infinitos y las flechas
function CallInteractions(p = {}, params = { ...p, }) {

   let twoDointpointMode = params.pointMode ? params.curveAllPoints[1] : params.curveAllPoints.at(-2);
   const direcction = params.point.Y() < twoDointpointMode.Y() ? 'down' : 'up'; //establecimiento de la dirección

   if (params.drag) {
      recdrawArrow({ ...params, direcction }); //función que crea flechas
      return;
   };

   switch (params.def.mode) {
      case 6:

         if (p.pointMode === true && p.curve.infinities !== undefined && p.curve.infinities[1] !== undefined) {
            return;
         };

         if (p.pointMode === false && p.curve.infinities !== undefined && p.curve.infinities[0] !== undefined) {
            return;
         };
         const point2 = params.board.create('point',
            [
               () => (params.pointMode) ? params.curve.points.at(-18).usrCoords.slice(1)[0] : params.curve.points[18].usrCoords.slice(1)[0],
               () => (params.pointMode) ? params.curve.points.at(-18).usrCoords.slice(1)[1] : params.curve.points[18].usrCoords.slice(1)[1]
            ], { name: "", visible: false, color: "red" });

         //crea el infinito independientemente del punto final  y retorna un array con todos los puntos del infiito
         const infinityPoints = [params.point, ...infinityDrawing(params, point2)];
         params.point.setAttribute({ color: "#2196f3" });
         const infiniteDrawng = params.board.create(
            'cardinalspline',
            [infinityPoints, 0.8, 'centripetal'],
            { strokeColor: 'black', strokeWidth: 2 },
         );

         params.curve.infinities = params.curve.infinities ?? [];
         if (!params.pointMode) {
            params.curve.infinities[0] = infinityPoints;
         } else {
            params.curve.infinities[1] = infinityPoints;
         };
         break;

      case 7:
         recdrawArrow({ ...params, direcction }); //función que crea flechas
         break;
   };

};

/* funciones del infinito */

//aqui esta ya esta lista
// { params.def, params.board, params.point, params.curve, direcction; }
function recdrawArrow(params = {}) {
   const boundingbox = params.board.attr.boundingbox;
   params.point.setAttribute({ size: 8 });
   params.curve.arrowsPoints = params.curve.arrowsPoints || [null, null];

   if ((params.point.Y() < boundingbox[3] + 0.5) && params.direcction === 'down') {
      params.point.setAttribute({ face: "v" });
      params.curve.arrowsPoints[0] = false;
   } else if (((params.point.Y() > boundingbox[1] - 0.5) && params.direcction === 'up')) {
      params.point.setAttribute({ face: "^" });
      params.curve.arrowsPoints[1] = true;
   } else {

      if (params.direcction === 'up') params.curve.arrowsPoints[1] = null;
      else if (params.direcction === 'down') params.curve.arrowsPoints[0] = null;

      params.point.setAttribute({ size: 3, face: "o" });
   };

};
//infinityDrawing(params.board, params.curve, params.point, p2)
function infinityDrawing(params = {}, point2, count = 0, element = [], style = { visible: false }) {
   if (count >= 2) { return element; }

   const p1 = params.board.create('mirrorpoint', [point2, params.point], style);

   const c1 = params.board.create('circle', [params.point, p1], { visible: false });
   const c2 = params.board.create('circle', [p1, params.point], { visible: false });

   const i1 = params.board.create('intersection', [c1, c2, 0], style);
   const i2 = params.board.create('intersection', [c1, c2, 1], style);

   const arc = params.board.create('circumcirclearc', [i1, p1, i2], { visible: false });
   const p2 = params.board.create('glider', [p1.X(), p1.Y(), arc], { name: '', color: "#2196f3" });

   return infinityDrawing({ ...params, point: p2 }, params.point, count + 1, [...element, p2]);
};

// funtion de eliezer para crear la curva reciproca
function reciprocalCurve(curves = [[1, 1], [1.8, 0.5], [2.5, 0.5], [2.9, 0.9], [3, 1]]) {
   if (!curves.converted) {
      curves.curvesPoints.map((pointsCurve) => {
         pointsCurve.map((element, index) => {
            element[1] = 1 / element[1];
            return element;
         });
      });
      curves.converted = true;
   } else {
   };
   return curves;
};

/// aqui funciones creadas por eliezer para validar curvas infinitos y flechas

function validateInfinities(objectArtifact, currentCurve, curvesCreatedForUser, errorCurves) {

   //si la curva tiene infinito


   if (currentCurve.arrows) {
      console.warn('😬 flechas e infinitos no pueden estar declaradas al mismo tiempo');
      return;
   }

   let response = false;
   const conditionInfinities = currentCurve.infinities;

   /* busca dentro de las curvas creadas por el usuario una cohincidencia.  aun falta que haga algo si no se encuentra*/

   const curveWithInfinities = curvesCreatedForUser.filter((curveUser) => {
      return gCompareCurves(curveUser, currentCurve.points, false, errorCurves, errorCurves);
   });

   if (curveWithInfinities.length === 0 || curveWithInfinities[0].infinities === undefined) {
      console.warn('no tiene infinitos o la curva no cohincide');

      return false;
   }


   const infinities = curveWithInfinities[0].infinities.map((element, index) => {
      return [[element[1].X(), element[1].Y()], [element[2].X(), element[2].Y()]];
   });


   let notExistNull = conditionInfinities.every((element) => element !== null);
   const anglesInfinities = infinities.map(infinities => {
      return gAngle(infinities[0][0], infinities[0][1], infinities[1][0], infinities[1][1]);
   });


   if (notExistNull) { // si no existe un valor nulo, es decir que los dos infinitos estan declarados 

      conditionInfinities.forEach((succesAgles, index) => { //70 - 85  98 - 104
         let validInterval = [];

         if (succesAgles) {
            validInterval = index === 0 ? [70, 85] : [98, 104];

            if (anglesInfinities[index] >= validInterval[0] && anglesInfinities[index] <= validInterval[1]) {
               response = true;
            }

         } else {
            validInterval = index === 0 ? [-70, -85] : [-98, -104];
            if (anglesInfinities[index] <= validInterval[0] && anglesInfinities[index] >= validInterval[1]) {
               response = true;
            }
         }


      });

   } else { // si existe un valor null es decir que algunos de los dos no se va a validar

      if (anglesInfinities.length > 1 && anglesInfinities[0] !== undefined) {
         console.warn('hay mas de dos infinitos y necesito uno solo');
         return false;
      }

      const index = conditionInfinities.findIndex((element) => element !== null); // busca el indice del elemento distinto de null
      let angleToValidate = [];

      if (index === -1) {
         console.warn('🙊 la declaracion del infinito solo tiene valores null 🤓 si desea declarar curva sin infinito elimine la propiedad "infinities" y solamente declare los puntos  ');
         return false;
      }

      const angleOfUser = anglesInfinities[0] !== undefined ? anglesInfinities[0] : anglesInfinities[1];


      if (conditionInfinities[index]) {
         angleToValidate = index === 0 ? [65, 85] : [98, 114];
         if (angleOfUser >= angleToValidate[0] && angleOfUser <= angleToValidate[1]) {
            response = true;
         }
         else response = false;
      }
      else {
         angleToValidate = index === 0 ? [-65, -85] : [-98, -114];
         if (angleOfUser <= angleToValidate[0] && angleOfUser >= angleToValidate[1]) {
            return true;
         } else response = false;
      }

   }
   return response;
}

function validateArrows(objectArtifact, currentCurve, curvesCreatedForUser, errorCurves) {

   const conditionArrows = currentCurve.arrows;

   if (currentCurve.infinities) {
      console.warn('😬 flechas(arrows) e infinitos no pueden estar declaradas al mismo tiempo');
      return false;
   }

   let response = false;

   //verificamos que exista la curva
   const curveFound = curvesCreatedForUser.filter((curveUser) => {
      return gCompareCurves(curveUser, currentCurve.points, true, errorCurves, errorCurves);
   });


   if (!curveFound.length) { // si no existe la curva sale
      console.warn('la curva correcta no ha sido creada');
      return false;
   }

   //obtiene el objeto en el que se encuentra la curva y la información de las flechas creadas

   const arrowCurves = curveFound[0].arrowsPoints;

   if (arrowCurves.findIndex(e => e !== null) === -1) { //si no hay ningun objeto con información de las flechas
      console.warn('no ha sido creada la flecha');
      return false;
   }

   const notExistNull = conditionArrows.every((element) => element !== null);

   if (notExistNull) {
      //valido los dos debe tener flecha hacia arriba y abajo
      const succesValue = [false, true]; // valores para filtrar

      const res = succesValue.every((value, index) => {
         return arrowCurves[index] === value;
      });
      response = res; // retorno
   }
   else {

      //si algun elemento del array es null

      const aux = conditionArrows.findIndex(element => element !== null);

      if (aux === -1) { //si existen dos null
         console.warn('🤔 la propiedad arrows contiene más de un null 🤓 si no quiere utilizar flechas, elimine la propiedad "arrows"');
         return;
      }

      if (arrowCurves.every((e) => e !== undefined && e !== null)) {
         console.warn('mas de una flecha');
         return false;
      }


      const band = aux === 0 ? false : true; // bandera que cambia dependiendo del elemento que sea distinto de null

      if (arrowCurves[aux] === band) { // si se encuentra el elemento en el objeto de las flechas
         response = true;
      } else { //si no
         response = false;
      }

   }

   return response;

}

function validateCurves(def, board, currentCurve, curvesCreatedForUser, errorCurves) {
   //validar curva sin infinitos
   const curveFound = curvesCreatedForUser.filter((curveUser) => {
      console.log(currentCurve.points);
      const pointsUser = Object.values(curveUser.ancestors).map(p => [p.X(), p.Y()]);
      
      const auxCurveValidate = gCurveDefault({
         def, board,
         curves: [{
            visible: true,
            strokeColor: "red",
            points: currentCurve.points,
         }],
      });
    
      const resp = gCompareCurves(auxCurveValidate[0], pointsUser, false, errorCurves, errorCurves);
      if(resp) currentCurve.idSuccesCurves = curveUser.id
      board.removeObject(auxCurveValidate[0]);
      return resp;
   });
   return curveFound.length > 0;
};



/* ::::::::::::::::::::::::::::::::::::::::::| FUNCIONES DE INTEGRACION CAP. 4 ||::::::::::::::::::::::::::::;;;;;;; */


function validatePoint(objectDefinition, textError, resp = null){

   const {mobileCurves} = objectDefinition
   const aditionConstantDefinition = objectDefinition.conditions.aditionConstant
         
   resp = aditionConstantDefinition.every(({operation, values}, index)=>{

      const objectToValidate = mobileCurves.filter(arrayObjectsPoints =>{ //obteniendo los objetos si los hay
         return arrayObjectsPoints[0].initialCurve === operation
      })

      if(!objectToValidate.length) {
         textError += ": Error, falta agregar algunas curvas" ;
         return false

      }

      const coordPointsToValidate = objectToValidate.length && objectToValidate[0].map(Object =>{ //limpiando la data 
         console.log('(',Object.anclaPointObject.X(),',',Object.anclaPointObject.Y(),')');
         return [Object.anclaPointObject.X(), Object.anclaPointObject.Y()]
      })

      const response = values.every(coordDefinition => {               
         const aux = coordPointsToValidate.some((coord)=>{
            return gInterPoint(coord[0], coordDefinition[0]) === true && gInterPoint(coord[1], coordDefinition[1])
         })
      
         return aux
      })
      
      textError += !response ? objectDefinition.conditions?.asymptotes?.text || ": Error, curva mal posicionada" : "";
      
      console.log('resp =>', response);
      return response
   })

   return [resp, textError]

}

function cDefAddPointWhithInputs(def, board, position, sty, style = {
   disabled: false,
   ...sty,
   input: {
      precision: {
         touch: 20,
         touchMax: 8,
         mouse: 5,
         pen: 2,
         hasPoint: 1,
         
      },
      layer: 3,
      fixed: false,
      ...sty?.input,
      noiseX: sty?.input.noiseX ?? 1,
      noiseY: sty?.input.noiseY ?? 1,
   },
   point: {
      opacity: 0.8,
      size: 2,
      name: '',
      layer: 2,
      fixed: false,
      ...sty?.point,
      color: sty?.point?.color ?? "black",
   },

}) {
   if (!position) {
      board.update()
      const elementIn = board.getAllUnderMouse();
      if (def.mode != 7 || elementIn.findIndex((p) => !Array.isArray(p) && !p.ignore && [ 'point', "text"].includes(p.elType)) !== -1) {
         return;
      };
   };


   const coords = position ?? board.getUsrCoordsOfMouse();
   const point = board.create('point', [coords[0],0], {
      ...style.point,
      precision: {
         touch: 2,
         touchMax: 3,
         mouse: 3,
         pen: 2,
         hasPoint: 1,
      },
   });
   
   board.on('move',function(){
       point.moveTo([point.X(), 0])
    })


      const input = board.create('text',
         [
            () => point.X() - style.input.noiseX,
            () => point.Y() - style.input.noiseY
            , 
           `<math-field virtual-keyboard-mode='onfocus' fonts-directory='fonts' keypress-sound = "none"  class="inputsToPoints"> </math-field>`

         ], style.input)
      
      //  
      const mathfield = input.rendNode.childNodes[0];
      
      const optionsKeyboard = getKeyboardMath(window.screen.width);
      mathfield.value = style?.input?.value || "";
      mathfield.setOptions({
         "customVirtualKeyboardLayers": optionsKeyboard[0],
         "customVirtualKeyboards": optionsKeyboard[1],
         "virtualKeyboards": optionsKeyboard[2]
      });

     
      def.pointsAndInputs.push({point, mathfield});
   };


function validateInfinitiesForSector(idCurve, objectDefinition, infiniteOfDefinition = []) {

      let response = false
      console.log('en validateInfinities -------------------------------------------------------------');
      const curve = objectDefinition.curves.filter(curve => curve.id === idCurve)
  
      const infinitiesToValidate = objectDefinition.infinities
      const infiniteOfUser = curve[0].infinities
  
      infiniteOfUser?.length === 1 ? infiniteOfUser[1] = undefined : infiniteOfUser
      infiniteOfDefinition?.length === 1 ? infiniteOfDefinition[1] = undefined : infiniteOfDefinition
  
      if (infiniteOfUser === undefined) {
          console.log('undefineddadsad');
          return false
      }
      console.log('pasaaa',infiniteOfUser,infiniteOfDefinition );
      const positionOfUndefinedDef = infiniteOfDefinition.findIndex(item => item === undefined || item === null)
      const positionOfUndefinedUser = infiniteOfUser.findIndex(item => item === undefined)
      console.log('positionOfUndefinedDef',positionOfUndefinedDef,'positionOfUndefinedUser',positionOfUndefinedUser );
      if (positionOfUndefinedUser !== positionOfUndefinedDef) {

          return false
      }
      else if (positionOfUndefinedDef === positionOfUndefinedUser) {
          let index = null
          if (positionOfUndefinedDef !== -1) index = positionOfUndefinedDef === 0 ? 1 : 0
          const elementsToEvaluate = index != null ? infiniteOfUser[index] : infiniteOfUser
  
          console.log('elementsToEvaluate', elementsToEvaluate);
          if (Array.isArray(elementsToEvaluate[0])) {
              const auxResponse = elementsToEvaluate.every((point, index) => {
  
                  const p1 = point[1]
                  const p2 = point[2]
  
                  formatInfinites = [[p1.X(), p1.Y()], [p2.X(), p2.Y()]]
  
                  const angle = defAngle(p1.X(), p1.Y(), p2.X(), p2.Y())
                  const sectorOfInfinite = getOrientation(angle)
  
  
                  console.log(infiniteOfDefinition[index], 'angle', angle, 'sector', sectorOfInfinite);
  
                  const res = infiniteOfDefinition[index].some((value) => value === sectorOfInfinite)
  
                  return res
  
              })
  
              response = auxResponse
  
          }
          else {
  
              const p1 = elementsToEvaluate[1]
              const p2 = elementsToEvaluate[2]
  
  
              formatInfinites = [[p1.X(), p1.Y()], [p2.X(), p2.Y()]]
  
              const angle = defAngle(p1.X(), p1.Y(), p2.X(), p2.Y())
              const sectorOfInfinite = getOrientation(angle)
  
  
              console.log(infiniteOfDefinition);
              const res = infiniteOfDefinition[index].some((value) => value === sectorOfInfinite)
  
              console.log(infiniteOfDefinition[index], 'angle', angle, 'sector', sectorOfInfinite);
  
              response = res
              console.log('es un array de puntos y su respuesta es >> ', res);
              console.log(elementsToEvaluate);
          }
      }
  
      return response
}

function defAngle(x1, y1, x2, y2) {
   return (Math.atan2(y2 - y1, -1 * x2 - -1 * x1) * 180) / Math.PI;
};

  function getOrientation(angle) {

   if (angle > 90 && angle <= 120) {
       return 1
   }
   else if (angle > 120 && angle <= 180) {
       return 2
   }
   else if (angle > -180 && angle <= -120) {
       return 3
   }
   else if (angle > -120 && angle <= -90) {
       return 4
   }
   else if (angle > -90 && angle <= -60) {
       return 5
   }
   else if (angle > -60 && angle <= -30) {
       return 6
   }
   else if (angle > -90 && angle <= 0) {
       return 7
   }
   else if (angle > 0 && angle <= 30) {
       return 8
   }
   else if (angle > 0 && angle <= 30) {
       return 9
   }
   else if (angle > 30 && angle <= 90) {
       return 10
   }
}
