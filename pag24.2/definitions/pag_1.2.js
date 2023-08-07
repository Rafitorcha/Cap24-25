const etwDefBoards = {
   board_0: {
      //artifact: "artifact_2",
      style: {
          grid: false,
         //maxHeight: 300,
         //maxWidth: 300,
         boundingbox: [-1, 4, 4, -1],
         axis: [false, true, true],
         valueAxis: {
            yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
            xd: [[0, 0], [1, 0]],
            colory: "#000000",
            colorx: "#000000"
         }
      },
      lines: [
        {
           points: [[2, 2], [2, 0]],
           dash: 2,
           
        },
        
        {
           points: [[0, 2], [2, 2]],
           dash: 2,
        }
     ],
      curves: [
         {  
            points:[
             [-0.29, 3.3],[0, 2.7], [1, 2.2], [2,2], [3, 2]
         ]}
      ],
      
      points: [ 
         [2.5, 2.1, false, "ƒ^{-1}", true],
     ],

      inputsDefault:[[[-0.35, 2], false, 'y', 2], [[2, -0.2], true, ' ', 1]]
   },

   board_1: {
       style: {
          grid: false,
          boundingbox: [-1, 4, 4, -1],
          axis: [false, true, true],
          valueAxis: {
             yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
             xd: [[0, 0], [1, 0]],
             colory: "#000000",
             colorx: "#000000"
          },
       },
       lines: [
          {
             points: [[2, 2], [2, 0]],
             dash: 2,
          },
          {
             points: [[0, 2], [2, 2]],
             dash: 2,
          }
       ],
       curves: [
          {     
             points:[ 
              [-0.29, 3.3],[0, 2.7], [1, 2.2], [2,2], [3, 2]
          ]}
       ],
       points: [ 
             [2.5, 2.1, false, "ƒ", true],
         ],
         
         inputsDefault:[[[-0.66, 2.2], true, '', 1], [[2, -0.2], false, 'f^{-1}\\left(x\\right)', 2]]
    },

   board_2: {
     style: {
        grid: false,
        boundingbox: [-1, 4, 4, -1],
        axis: [false, true, true],
        valueAxis: {
           yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
           xd: [[0, 0], [1, 0]],
           colory: "#000000",
           colorx: "#000000"
        },
     },
     lines: [
        {
           points: [[2, 2], [2, 0]],
           dash: 2,
        },
        {
           points: [[0, 2], [2, 2]],
           dash: 2,
        }
     ],
     curves: [
        {     
           points:[ 
            [-0.29, 3.3],[0, 2.7], [1, 2.2], [2,2], [3, 2]
        ]}
     ],
     points: [ 
           [2.5, 2.1, false, "ƒ", true],

       ],
       inputsDefault:[[[-0.35, 2.18], true, '', 1], [[2, -0.2], false, 'g\\left(x\\right)', 2]]
  },

  board_3: {
     style: {
        grid: false,
        boundingbox: [-1, 4, 4, -1],
        axis: [false, true, true],
        valueAxis: {
           yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
           xd: [[0, 0], [1, 0]],
           colory: "#000000",
           colorx: "#000000"
        },
     },
     lines: [
        {
           points: [[2, 2], [2, 0]],
           dash: 2,
        },
        {
           points: [[0, 2], [2, 2]],
           dash: 2,
        }
     ],
     curves: [
        {     
           points:[ 
            [-0.29, 3.3],[0, 2.7], [1, 2.2], [2,2], [3, 2]
        ]}
     ],
     points: [ 
           [2.5, 2.1, false, "ƒ", true],

       ],
       inputsDefault:[[[-0.35, 2.18], true, '', 1], [[2, -0.2], false, 'f\\left(x\\right)', 2]]
  },
  board_4: {
     style: {
        grid: false,
        boundingbox: [-4, 4, 4, -3],
        axis: [false, true, true],
        valueAxis: {
           yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
           xd: [[0, 0], [1, 0]],
           colory: "#000000",
           colorx: "#000000"
        },
     },
     lines: [
        {
           points: [[-1.5, -0.9], [-1.5, 0]],
           dash: 2,
        },
        {
           points: [[-1.5, -1], [0, -1]],
           dash: 2,
        }
     ],
     curves: [
        {     
           points:[ 
            [-3, -0.5],[-2.5,-0.6],[-2,-0.75],[-1.5,-1],[-0.9,-1.5]
            ,[-0.6,-2],[-0.4,-2.5]
        ]}
     ],
     points: [ 
           [-2.5, -1, false, "g", true],

       ],
       inputsDefault:[[[-1.5, 0.3], false, 'x', 2], [[0.5, -1], true, '', 1]]
  },
  board_5: {
     style: {
        grid: false,
        boundingbox: [-4, 4, 4, -3],
        axis: [false, true, true],
        valueAxis: {
           yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
           xd: [[0, 0], [1, 0]],
           colory: "#000000",
           colorx: "#000000"
        },
     },
     lines: [
        {
           points: [[-1.5, -0.9], [-1.5, 0]],
           dash: 2,
        },
        {
           points: [[-1.5, -1], [0, -1]],
           dash: 2,
        }
     ],
     curves: [
        {     
           points:[ 
            [-3, -0.5],[-2.5,-0.6],[-2,-0.75],[-1.5,-1],[-0.9,-1.5]
            ,[-0.6,-2],[-0.4,-2.5]
        ]}
     ],
     
       inputsDefault:[[[-1.5, 0.3], true, '', 1], [[-2.5, -1], true, '', 2], [[0.7, -1], false, 'a\\left(d\\right)', 3]]
  },
  board_6: {
     style: {
        grid: false,
        boundingbox: [-4, 4, 4, -3],
        axis: [false, true, true],
        valueAxis: {
           yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
           xd: [[0, 0], [1, 0]],
           colory: "#000000",
           colorx: "#000000"
        },
     },
     lines: [
        {
           points: [[-1.5, 2.2], [-1.5, 0]],
           dash: 2,
        },
        {
           points: [[-1.5, 2.2], [0, 2.2]],
           dash: 2,
        }
     ],
     points: [ 
        [-2.5, 2, false, "f", true],

    ],
     curves: [
        {     
           points:[ 
            [-3.5, 0.2], [-2.7, 1.35], [-1.4, 2.3], [-0, 2.7], 
            [3, 3],
        ]}
     ],
     
       inputsDefault:[[[0.5, 2.2], false, 'y', 2], [[-1.5, -0.3], true, '', 1]]
  },
  board_7: {
     style: {
        grid: false,
        boundingbox: [-4, 4, 4, -3],
        axis: [false, true, true],
        valueAxis: {
           yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
           xd: [[0, 0], [1, 0]],
           colory: "#000000",
           colorx: "#000000"
        },
     },
     lines: [
        {
           points: [[-1.5, 2.2], [-1.5, 0]],
           dash: 2,
        },
        {
           points: [[-1.5, 2.2], [0, 2.2]],
           dash: 2,
        }
     ],
     points: [ 
        [-2.5, 2, false, "f", true],

    ],
     curves: [
        {     
           points:[ 
            [-3.5, 0.2], [-2.7, 1.35], [-1.4, 2.3], [-0, 2.7], 
            [3, 3],
        ]}
     ],
     
       inputsDefault:[[[0.5, 2.2], true, '', 1], [[-1.5, -0.3], false, 'x', 2]]
  },
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const etwDef = {
  
   artifact_1: {
      conditions: {
         valueInputs:[
           [1,"\\left(f^{-1}\\right)^{-1}\\left(y\\right)"],      
                 ],
      }
   },
   artifact_2: {
      conditions: {
         valueInputs:[
         [1,"f\\left(f^{-1}\\left(x\\right)\\right)"],                    
      ],
      }
      
   },
   artifact_3: {

      conditions: {
        
         valueInputs:[
           [1,'f\\left(g\\left(x\\right)\\right)'],
                     ],
      }
   },
   
   artifact_4: {

     conditions: {
       
        valueInputs:[
          [1,'f\\left(f\\left(x\\right)\\right)'],
                    ],
     }
  },
  artifact_5: {

     conditions: {
        valueInputs:[
           [1,"g\\left(x\\right)"],    
           ],
     }
  },
  artifact_6: {

     conditions: {
        valueInputs:[
           [1,"d"],
           [2,"a"]    
                    ],
     }
  },
  artifact_7: {

     conditions: {
        valueInputs:[
           [1,"f^{-1}\\left(y\\right)"],    
                    ],
     }
  },
  artifact_8: {

     conditions: {
        valueInputs:[
           [1,"f\\left(x\\right)"],    
                    ],
     }
  },
};

etwMain(etwDef, etwDefBoards);
