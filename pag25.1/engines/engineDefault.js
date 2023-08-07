//https://jsfiddle.net/h2gr9y34/2/

const globalColor = ["green", "violet", "#4455FE", "#C85E91", "#ED543F"];

function rDefBoardDefault() {
   const tmp = document.querySelector("#tmp-road");
   const divs = document.querySelectorAll(".defRoad");
   divs.forEach((div, i) => {
      const clone = tmp.content.firstElementChild.cloneNode(true);
      const $board = clone.querySelector(".defRoadBoard");
      const btnAll = clone.querySelector(".btn-all");

      const id = "defRoadBoard_" + i;
      $board.setAttribute("id", id);

      const boardSelect = div.dataset.board;
      const ref = rDefBoards[boardSelect].artifact;

      if (!rDefBoards[boardSelect]) {
         console.warn("<!> board undefined <!>");
         return;
      }

      const artifactDefault = {
         debug: false,
         statusValidate: true,
         pointsData: [[]],
         ...rDef[ref],
         conditions: {},
         buttonsActive: {
            points: rDef[ref].buttonsActive?.points || false
         }
      };

      const style = rDefBoards[boardSelect].style;

      div.style =
         "width: " +
         (style.maxWidth || "") +
         "px; height: " +
         (style.maxHeight || "") +
         "px;";
      div.appendChild(clone);

      const board = rDefBoard(ref, boardSelect, id, style);

      btnAll.addEventListener("click", (e) => {
         if (e.target.classList.contains("check")) {
            rDefValidation();
            console.log("check");
         } else if (e.target.classList.contains("reset")) {
            console.log("reset");
            rDefReset(ref, board);
         } else if (e.target.classList.contains("back")) {
            console.log("back");
            rDefReturn(ref, board);
         } else if (e.target.classList.contains("move")) {
            console.log("move");
         } else if (e.target.classList.contains("pointClose")) {
            console.log("point close");
         }
      });

      rDef[ref] = artifactDefault;
   });
}

function rDefBoard(ref, boardSelect, id, style) {
   let board = JXG.JSXGraph.initBoard(id, {
      label: {visible: false},
      axis: style.axis[0] || false,
      boundingbox: style.boundingbox || [-4, 4, 4, -4],
      maxboundingbox: [-8, 8, 8, -8],
      grid: style.grid || false,
      grid: {strokeColor: !style.grid ? false : "grey"},
      showNavigation: false,
      showCopyright: false,
      keyboard: {
         enabled: false,
         dy: 30,
         panShift: true,
         panCtrl: false
      },
      pan: {
         needTwoFingers: true,
         enabled: false,
         needShift: true
      },
      zoom: {
         needShift: false,
         pinchHorizontal: false,
         pinchVertical: false,
         pinchSensitivity: 0,
         min: 1000,
         max: 0,
         factorX: 0,
         factorY: 0,
         wheel: false
      }
   });

   if (!style.axis[0] && style.axis[1]) {
      rDefAxies({
         ref,
         board,
         axie: style.valueAxis?.xd,
         position: style.valueAxis?.xp,
         values: style.valueAxis?.xv,
         color: style.valueAxis?.colorx
      });
   }

   if (!style.axis[0] && style.axis[2]) {
      rDefAxies({
         ref,
         board,
         axie: style.valueAxis?.yd,
         position: style.valueAxis?.yp,
         values: style.valueAxis?.yv,
         color: style.valueAxis?.colory
      });
   }
   //pintar lista de puntos par ordenado de x/y
   if (rDefBoards[boardSelect].points) {
      rDefAllPointsDefault({
         ref,
         board,
         points: rDefBoards[boardSelect].points
      });
   }
   //pintar lista de lineas
   if (rDefBoards[boardSelect].lines) {
      rDefLineDefault({ref, board, lines: rDefBoards[boardSelect].lines});
   }
   //pintar puntos
   if(rDefBoards[boardSelect].inputs){
      
      rDefInputsDefault(rDefBoards[boardSelect].inputs, board)
   }
   
   //pintar lista de curvas
   if (rDefBoards[boardSelect].curves) {
      rDefCurveDefault({
         ref,
         board,
         curves: rDefBoards[boardSelect].curves
      });
   }
   if (rDefBoards[boardSelect].polygon) {
      rDefPolygon(board, rDefBoards[boardSelect].polygon);
   }
   return board;
}

function rDefAxies({
   ref,
   board,
   axie,
   position,
   values,
   color = "#A19D9C"
} = {}) {
   if (!axie) {
      console.log("ponle una direction valueAxis:{ xd/yd: [[0, 0], [1, 0]],}");
      return;
   }
   const auxAxie = board.create("axis", axie);

   board.create("ticks", [auxAxie, position || false], {
      drawLabels: true,
      labels: values || false,
      label: {
         autoPosition: true,
         offset: [-5, 0],
         anchorX: "middle",
         anchorY: "top",
         visible: true
      }
   });

   auxAxie.setAttribute({
      color: color,
      ticks: {visible: false}
   });
}

function rDefAllPointsDefault({ref, board, points, ignore = false} = {}) {
   let pointsReference = [];
   points.forEach((p, i) => {
      //[x,y,visible,name,size,type]
      let point = board.create("point", [p[0], p[1]], {
         size: p[4] || 2,
         name: p[3] != undefined ? p[3] : "",
         label: {
            visible: undefined != p[3] && p[3] != "" ? true : false,
            autoPosition: true,
            offset: [0, 10]
         },
         fixed: true,
         visible: p[2] == undefined ? false : p[2],
         fillcolor: typeof p[5] == "string" ? p[5] : p[5] ? "white" : "#D55E00",
         strokeColor: typeof p[5] == "string" ? p[5] : "#D55E00"
      });
      point.ignore = ignore;
      pointsReference.push(point);
   });
   
   return pointsReference;
}

function rDefInputsDefault(inputsRef, boardRef){
   //console.log(inputs);
   let inputsReference = [];
   console.log(boardRef);
   inputsRef.forEach((input, i)=>{
      console.log(`pos_${i}`,input);
      id = "input-way-"+i
      contenido = input[2] ? input[2] : ''
      
      console.log(typeof dataset);
      
      let x = boardRef.create(
         "text",
         [
            input[0][0],
            input[0][1],
            `<math-field virtual-keyboard-mode='onfocus' class="mf" id =${id}>X</math-field>`
         ],
         {fixed: true, fontSize: 28, anchorX: "middle"}
      );
         const campo = document.querySelector(`#input-way-${i}`)
         campo.textContent = contenido
         console.log(campo.textContent);
   })
}

function rDefLineDefault({ref, board, lines, interactive = true} = {}) {
   const tempLines = [];
   lines.forEach((l) => {
      console.log(typeof l[0][0] == "object", typeof l[0][1] == "object");
      let line = board.create(
         "line",
         typeof l[0][0] == "object" && typeof l[0][1] == "object"
            ? l[0]
            : rDefAllPointsDefault({ref, board, points: l[0]}),
         {
            strokeColor: l[5] || "black",
            dash: l[1] || 0,
            straightFirst: false,
            straightLast: false,
            firstArrow: l[2] || false,
            lastArrow: l[3] || false,
            strokeWidth: l[4] || 2,
            label: {
               autoPosition: true
            },
            precision: {
               touch: 8,
               mouse: 3,
               pen: 5,
               hasPoint: 1
            }
         }
      );
      if (interactive) {
         line.on("down", (e) => rDefAddPoint(ref, board, line));
      }
   });
   
   return tempLines;
}

function rDefCurveDefault({ref, board, curves, interactive = true} = {}) {
   curves.forEach((c) => {
      const style = {
         strokeColor: c[1] ? c[1] : "black",
         strokeWidth: c[2] ? c[2] : 1.5,
         label: {autoPosition: true},
         precision: {
            touch: 8,
            mouse: 3,
            pen: 5,
            hasPoint: 1
         }
      };

      let curva = board.create(
         "cardinalspline",
         [rDefAllPointsDefault({ref, board, points: c[0]}), 1, "centripetal"],
         style
      );

      if (interactive) {
         curva.on("down", (e) => rDefAddPoint(ref, board, curva));
      }
   });
}

function rDefPolygon({ref, board, polygon} = {}) {
   polygon.forEach((points) => {
      const newPolygon = board.create("polygon", points, {
         fixed: true,
         withLines: false,
         fillColor: "grey",
         fillOpacity: 0.1,
         vertices: {visible: false, fixed: true}
      });
   });
}

function rDefAddPoint(ref, board, attractor) {
   pointData = [];
   const elementIn = board.getAllUnderMouse();

   if (
      elementIn.findIndex(
         (p) =>
            (!Array.isArray(p) && p.elType === "point") ||
            (p.ignore != undefined && !p.ignore)
      ) !== -1
   ) {
      rDefAddCurv(ref, board);
      return;
   }

   let coords = board.getUsrCoordsOfMouse(),
      x = coords[0],
      y = coords[1];

   // if (states == "pointVoid") {
   // var p2 = board.create('glider', [x, y, attractor]);
   const point = board.create("glider", [x, y, attractor], {
      size: 2,
      fillcolor: globalColor[rDef[ref].pointsData.length - 1],
      strokeColor: globalColor[rDef[ref].pointsData.length - 1],
      opacity: 0.8,
      name: ""
      // visible: false
      /*     fixed: true; */
   });

   point.ignore = false;
   pointData[0] = point;

   // };
   board.update();
   if (rDef[ref].pointsData.at(-1).length > 0) {
      const last = rDef[ref].pointsData.at(-1).at(-1)[0];
      const lines = [
         [
            [point, last],
            2,
            true,
            false,
            2,
            globalColor[rDef[ref].pointsData.length - 1]
         ]
      ];
      /* last.setAttribute({ visible: false });
      point.setAttribute({ visible: false }); */
      rDefLineDefault({ref, board, lines, interactive: false});
   }
   rDef[ref].pointsData.at(-1).push(pointData);
}

function rDefAddCurv(ref, board) {
   const p = rDef[ref].pointsData.at(-1).at(-1)[0];
   const text1 = board.create(
      "text",
      [
         function () {
            return p.X() + 0.15;
         },
         function () {
            return p.Y();
         },
         "$$X$$"
      ],
      {fontsize: 10, fixed: true, parse: false, useMathJax: true}
   );
   //rDef[ref].pointsData.at(-1).at(-1).push( board.create('input', [function () {return p.X()+0.15} , function () {return p.Y()}  , " ", ""], {anchor: p, layer: 100, name: " ", cssStyle: 'width: 30px;', fixed: true }));

   text1.on("down", () => {
      console.log("agregar funcion  para dezplegar panel para escribir");
   });

   rDef[ref].pointsData.push([]);
}

function rDefReturn(ref, board) {
   board.removeObject(rDef[ref].pointsData.at(-1).pop());
   if (
      rDef[ref].pointsData.at(-1).length == 0 &&
      rDef[ref].pointsData.length > 1
   ) {
      rDef[ref].pointsData.pop();
   }
   board.update();
}

function rDefReset(ref, board) {
   board.removeObject(rDef[ref].pointsData.flat());
   rDef[ref].pointsData = [[]];
   board.update();
}

function rDefValidation(argument) {
   console.log("validado");
}

document.addEventListener("keyup", function (event) {
   if (event.keyCode === 13) {
      console.log("hol");
   }
});

/*
const board = JXG.JSXGraph.initBoard('jxgbox', {
                        boundingbox: [-5, 5, 5, -5],
                  axis: true
              });


 var a = board.create('slider', [[-4, -2], [3, -2], [-4, 1, 4]], {snapWidth:1, precision: 0, name: 'a' });
  var b = board.create('slider', [[-4, -3], [3, -3], [-4, 0, 4]], {snapWidth:1, precision: 0,  name: 'b' });
  var c = board.create('slider', [[-4, -4], [3, -4], [-4, 0, 4]], {snapWidth:1, precision: 0,  name: 'c' });

 var f = board.create('functiongraph', [
    function (x) {
      return a.Value() * Math.pow(x, 2) + b.Value() * x + c.Value();
    }, -6, 6 ]);
  


var text1 = board.create('text', [1, 4, '$$\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$'], {fontsize: 20,fixed: true, parse: false, useMathJax:true});
          
var text2 = board.create('text', [-3, 4, function () {
    var aS ="",bS="",cS="";

    if(a.Value() == 1)
        aS = "x^2";
    else if(a.Value() == -1) 
        aS = "-x^2";
    else if(a.Value() === 0) 
        aS = "";
    else
        aS = a.Value() + "x^2";
        
    if(b.Value() == 1)
        bS = "+x";
    else if(b.Value() == -1) 
        bS = "-x";
    else if(b.Value() === 0) 
        bS = "";
    else if(b.Value() > 1)
        bS = "+"+b.Value() + "x";
    else
        bS = b.Value() + "x";
    
    
    if(c.Value() > 0)
        cS = "+"+c.Value();
    else if(c.Value() === 0)
        cS = "";
    else
        cS = c.Value();
        
    if(a.Value()===0 && b.Value()===0 && c.Value()===0)
        aS = "0";

    
                return '$$y='+aS+bS+cS +'$$'
            }], {
                fontsize: 20,
                layer: 7,
                 fixed: true,
                parse: false,
                useMathJax:true
            });


*/
