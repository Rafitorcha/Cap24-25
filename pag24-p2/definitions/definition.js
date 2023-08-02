const defBoards = {
  board_0: {
    artifact: "artifact_1",
    style: {
      grid: true,
      width:600,
      height:1000,
      maxHeight: 200,
      maxWidth: 200,
      boundingbox: [-5, 5, 5, -5],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },
    
    asymptotes : [
     { x: -3 },
  ]

  },
  board_1: {
    artifact: "artifact_2",

    style: {
      grid: true,
      maxHeight: 200,
      maxWidth: 200,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: "black",
        points: [
          [1, 1],
          [8, 2],
        ],
      },
      {
        interactive: true,
        strokeColor: "black",
        flex: 0,
        //  points: [[-3, -1], [-2, 1], [-1, -1]],
        points: [
          [1, 0],
          [2.02, -0.39],
          [3, 0],
          [4, 0.58],
          [5, 0],
          [6.02, -0.43],
          [7, 0],
        ],
      },
    ],

    points: [
      [1, 0, true, "", true, "black"],
      [3, -0, true, "", true, "black"],
      [5, 0, true, "", true, "black"],
      [7, 0, true, "", true, "black"],

      [1, 1, true, "", true, "black"],
      [3, 1.3, true, "", true, "black"],
      [5, 1.6, true, "", true, "black"],
      [7, 1.9, true, "", true, "black"],
    ],

    lines: [
      {
        points: [
          [1, 0],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [3, 0],
          [3, 1.3],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [5, 0],
          [5, 1.6],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [7, 0],
          [7, 1.9],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
  },
  board_2: {
    artifact: "artifact_3",
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: "black",
        points: [
          [1, 1],
          [8, 2],
        ],
      },
      {
        interactive: true,
        strokeColor: "black",
        flex: 0,
        //  points: [[-3, -1], [-2, 1], [-1, -1]],
        points: [
          [1, 0],
          [2, 0.5],
          [3, 0],
          [4, -2],
          [5, 0],
          [6, 0.5],
          [7, 0],
        ],
      },
    ],
    points: [
      [1, 0, true, "", true, "black"],
      [3, 0, true, "", true, "black"],
      [5, 0, true, "", true, "black"],
      [7, 0, true, "", true, "black"],

      [1, 1, true, "", true, "black"],
      [3, 1.3, true, "", true, "black"],
      [5, 1.6, true, "", true, "black"],
      [7, 1.9, true, "", true, "black"],
    ],

    lines: [
      {
        points: [
          [1, 0],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [3, 0],
          [3, 1.3],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [5, 0],
          [5, 1.6],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [7, 0],
          [7, 1.9],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
  },
  board_3: {
    artifact: "artifact_4",
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: "black",
        points: [
          [1, 1],
          [8, 2],
        ],
      },
      {
        interactive: true,
        strokeColor: "black",
        flex: 0,
        points: [
          [1, 0],
          [2, -0.47],
          [3, 0],
          [3.83, 2.32],
          [5, 0],
          [6, -1.89],
          [7, 0],
        ],
      },
    ],

    points: [
      [1, 0, true, "", true, "black"],
      [3, 0, true, "", true, "black"],
      [5, 0, true, "", true, "black"],
      [7, 0, true, "", true, "black"],

      [1, 1, true, "", true, "black"],
      [3, 1.3, true, "", true, "black"],
      [5, 1.6, true, "", true, "black"],
      [7, 1.9, true, "", true, "black"],
    ],

    lines: [
      {
        points: [
          [1, 0],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [3, 0],
          [3, 1.3],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [5, 0],
          [5, 1.6],
        ],
        lastArrow: true,
        dash: 2,
      },
      {
        points: [
          [7, 0],
          [7, 1.9],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
  },
  board_4: {
    artifact: "artifact_5",
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: "black",
        points: [
          [0.6, 2.95],
          [0.63, 2.22],
          [0.78, 1.31],
          [1.43, 0.69],
          [2.6, 0.44],
          [3.76, 0.44],
        ],
      },
      {
        interactive: true,
        strokeColor: "black",
        flex: 0,
        points: [
          [0.5, 0.53],
          [3.1, 2.84],
        ],
      },
    ],
  },
  board_5: {
    artifact: "artifact_6",
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: "black",
        points: [
          [1.13, -0.38],
          [1.32, -1.31],
          [1.8, -1.97],
          [2.39, -2.26],
          [3.13, -2.35],
          [3.99, -2.35],
        ],
      },
      {
        interactive: true,
        strokeColor: "black",
        flex: 0,
        points: [
          [1.15, -2.48],
          [3.56, -0.42],
        ],
      },
    ],
  },
  board_6: {
    artifact: "artifact_7",
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: "black",
        points: [
          [0.96, 3],
          [1.15, 2.12],
          [1.58, 1.52],
          [2.15, 1.06],
          [2.82, 0.68],
          [3.65, 0.44],
          [4.63, 0.32],
          [5.51, 0.34],
          [6.51, 0.4],
        ],
      },
      {
        interactive: true,
        strokeColor: "black",
        flex: 0,
        points: [
          [1.24, -0.99],
          [2.31, -1.02],
          [3.57, -0.99],
          [4.1, -1.61],
          [4.4, -1.95],
          [4.76, -2.37],
          [5.26, -2.98],
          [6.12, -3.95],
        ],
      },
    ],
  },
};







//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: "operationCurves",
        contents: [
          {
            dataSet: {
              board: "board_0",
            },
          },
          {
            dataSet: {
              board: "board_1",
            },
          },
          {
            dataSet: {
              board: "board_2",
            },
          },
          {
            dataSet: {
              board: "board_3",
            },
          },
          
        ],
      },
      [
        1,
        `3- Si ninguna de las dos curvas sumados tiene punto de corte con el eje x solo se puede 
        tomar en cuenta sus signos, para saber si va encima de u8na o de la otra, o entre las dos, ...etc.`,
      ],
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: "operationCurves",
        contents: [
          {
            dataSet: {
              board: "board_4",
            },
          },
          {
            dataSet: {
              board: "board_5",
            },
          },
          {
            dataSet: {
              board: "board_6",
            },
          },
        ],
      },
    ],
  
  },
  
 // artifact_1:testArtifact.builder(),

 artifact_1: {
    config: {
      curves: {
        flex: 1,
      },
    },
    buttonsActive: { curves: true, infinities:true },
    
    numero:1,

    menuCurves:{
     
     curves:[

     //['funcion', [[[],pm], [[],pm] ]],
     
     ['(x)', [ [ [,0,1,2,3],null] ] ],   
     ['sen', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
     ['cos', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
     ['1/x', [ [[-5,-3,-2,-1,-0.2],-1] , [[0.2,1,2,3,5],1]] ],
     ['constant']
   ]
     
   }, 
 


   gridDefault:{
     vertical:[-3.14,3.14],
     horizontal:[1.5,-1.5]
    }, 

    
    conditions:{
     aditionConstant: [

       {
         operation: '1/x',
         values: [[-1,-1], [1,2]]
       }
     ],
 


    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma, los puntos de corte estan definidos",
    },

   }

},
/* artifact_2: {
 config: {
   curves: {
     flex: 1,
   },
 },
 buttonsActive: { curves: true, infinities:true },
 
 numero:2,

 menuCurves:{
  viewPoints: true, 
  curves:[

  //['funcion', [[[],pm], [[],pm] ]],
  
  ['(x)', [ [ [,0,1,2,3],null] ] ],   
  ['sen', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
  ['cos', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
  ['1/x', [ [[-5,-3,-2,-1,-0.2],-1] , [[0.2,1,2,3,5],1]] ],
  ['constant']
]
  
}, 

gridDefault:{
  vertical:[-3.14,3.14],
  horizontal:[3,-1.5]
 }, 

/*  helpMsg: {
   title: "suma de curva",
   text: "Grafique la curva suma, los puntos de corte estan definidos",
 }, 

 conditions:{
/* 
   curveMultiplications:[
     {
       firstCurves:['sen','constant'],
       grids:true,
       points:[[[-1,2],[2,2]],[[-1,-2],[2,-2]]]
     },
   ], 
   aditionConstant: [

     {
       operation: 'sen',
       values: [[3.14,2]]
     }
   ],


}

}, */ 

/* artifact_2:artifact2.builder(),

artifact_3:testArtifact.builder(), */

}

   /// conditions: {


     
   /*    curveMultiplication:{
       firstCurves:['sen','constant'],
       grids:true,
       points:[[-1,2],[2,2]]
     }, */

/*       curveMultiplications:[
       {
         firstCurves:['sen','constant'],
         grids:true,
         points:[[[-1,2],[2,2]],[[-1,-2],[2,-2]]]
       },
     ], */

     // curveAlone:[
     //   {
     //     points:[[-3,3],[3,3]],
     //     infinities: false
     //   },
     //  ],
     
     //  pointsWithInputs:[
     //   {
     //   coord:1,
     //   value:'1'
     //   },
     //   {
     //     coord:2,
     //     value:'2'
     //   },
     //   {
     //     coord:3,
     //     value:'3'
     //   }
 
     // ],

     // }}, 


     /* aditionConstant: [
       {
         operation: '(x)',
         values: [[2,3]]
       }], */
 /* 
       pointsWithInputs:[
         {
         coord:1,
         value:'1'
         },
         {
           coord:2,
           value:'2'
         },
         {
           coord:3,
           value:'3'
         }

       ],

      aditionConstant: [
       {
         operation: 'sen',
         values: [[3,1]]
       },  */
  /*      {
         operation: 'cos',
         values:[[3,2]]
       },

       {
         operation: '1/x',
         values:[[-1,-2], [1,2]]
       } */

      //]
     /* 
      curveAlone:[
       {
         points:[[1,1],[2,2],[3,3]],
         infinities: [[8, 9, 10], [1]]
       },
      ],

      pointsWithInputs:[
       {
       coord:1,
       value:'1'
       },
       {
         coord:2,
         value:'2'
       },
       {
         coord:3,
         value:'3'
       }

     ],*/
/* 
      aditionConstant: [
       {
         operation: 'sen',
         values: [[3,1]]
       },  ]


    },
  }, */
  /* artifact_2: {
    config: {
      curves: {
        flex: 0,
      },
    },
    debug: true,
   // buttonsActive: { points: false },
    curveMod: {
      color: "red",
      interactive: true,
    },
    //maxCurves: 2,
    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma, los puntos de corte estan definidos",
    },

    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
      },
    },
  },
  artifact_3: {
    config: {
      curves: {
        flex: 0,
      },
    },
    // debug: true,
    buttonsActive: { points: true },
    curveMod: {
      color: "red",
      interactive: true,
    },
    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma, los puntos de corte estan definidos",
    },

    conditions: {
      text: "texto error definido 2",

      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
      },
    },
  },
  artifact_4: {
    config: {
      curves: {},
    },
    // debug: true,
    buttonsActive: { points: true },
    curveMod: {
      color: "red",
      interactive: true,
    },
    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma, los puntos de corte estan definidos",
    },

    conditions: {
      text: "texto error definido 2",

      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
      },
    },
  },
  artifact_5: {
    config: {
      curves: {
        flex: 0,
      },
    },
    // debug: true,
    buttonsActive: { points: true },
    curveMod: {
      color: "red",
      interactive: true,
    },
    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma.",
    },

    conditions: {
      text: "texto error definido 2",

      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
      },
    },
  },
  artifact_6: {
    config: {
      curves: {
        flex: 0,
      },
    },
    // debug: true,
    buttonsActive: { points: true },
    curveMod: {
      color: "red",
      interactive: true,
    },
    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma.",
    },

    conditions: {
      text: "texto error definido 2",

      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
      },
    },
  },
  artifact_7: {
    config: {
      curves: {
        flex: 0,
      },
    },
    //debug: true,
    buttonsActive: { points: true },
    curveMod: {
      color: "red",
      interactive: true,
    },
    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma.",
    },

    conditions: {
      text: "texto error definido 2",

      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
      },
    },
  }, */


  /* const testDefinition ={ 
   artifact_0:testArtifact.builder()
  } */


//generator(rDef);
mainOperation(defBoards, rDef);
