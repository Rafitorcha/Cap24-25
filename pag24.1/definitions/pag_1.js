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
         },
         
      },
      lines: [
         {
            points: [[2, 2], [2, 0]],
            dash: 2,
            firstArrow: true,
         },
         
         {
            points: [[0, 2], [2, 2]],
            firstArrow: true,
            dash: 2,
         }
      ],
      curves: [
         {  
            
            points:[
            
             [-0.29, 3.3],[0, 2.7], [1, 2.2], [2,2], [3, 2]
         ]}
      ],
      polygons: [{
         points: [[0, 2], [0, 0], [2, 0], [2, 2]],
         /*  styles: {
             withLines: 2,
             fillColor: 'red',
          } */
      }],
      points: [ 
            [2.5, 2.1, false, "ƒ", true],

        ],
      showText:true,
      showTitle: true,
      inputsDefault:[[[-0.56, 2], true, '', 1], [[2, -0.5], false, 'x', 2]]
   },
   
   board_1: {
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
            points: [[1.5, 2], [1.5, 0]],
            firstArrow: false,
            lastArrow: true,
            dash: 2,
         },
         
         {
            points: [[0, 2], [1.5, 2]],
            firstArrow: false,
            lastArrow: true,
            dash: 2,
         }
      ],
      curves: [
         {  
            points:[
            
             [-0.29, 3.3],[0, 2.7], [1, 2.2], [2,2], [3, 2]
         ]}
      ],
      polygons: [{
         points: [[0, 2], [0, 0], [1.5, 0], [1.5, 2]],
         
      }],
      points: [ 
         [2.5, 2.1, false, "ƒ", true],

     ],
      showTitle: true,
      showText:true,
      inputsDefault:[[[-0.56, 2], false, 'y', 2], [[1.5, -0.5], true, ' ', 1]]
   },
   board_2: {
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
         },
         reflectionAxie: {
            B: true}
      },
      lines: [
         {
            points: [[1.15, 1.15], [1.15, 0]],
            dash: 2,
            firstArrow: true,
         },
         
         {
            points: [[0, 1.15], [1.15, 1.15]],
            firstArrow: true,
            dash: 2,
         },
         {
            points: [[2.3, 2.3], [2.3, 0]],
            dash: 2,
            firstArrow: false,
            lastArrow: true,
         },
         {
            points: [[0, 2.3], [2.3, 2.3]],
            dash: 2,
            firstArrow: false,
            lastArrow: true,
         },
      ],
      
      polygons: [{
         points: [[0, 1.15], [0, 0], [1.15, 0], [1.15, 1.15]],
         /*  styles: {
             withLines: 2,
             fillColor: 'red',
          } */
      }],
      showText:true,
      showTitle: true,
      inputsDefault:[
       [[-0.5, 2.3], false, 'h', 1],
       [[-0.5, 1.2], true, '', 2],
       [[1.15, -0.3], false, 'b', 3],
       [[2.3, -0.3], true, ' ', 4]
      ],
       
   },
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const etwDef = {
   
   artifact_1: {
      debug: true,
      buttonsActive: {points: true},
      
      conditions: {
         artifactTitle: 'Ida',
         valueInputs:[
                        [1,'f\\left(x\\right)'],
                        [2,'f\\left(\\right)']               
                     ],
         textOfExample: {
               title:'Nombre del punto final: ',
               info:'va del eje x al eje y. Se pone entre parentesis el nombre del punto inicial. Y a la izquierda del paréntesis se pone el nombre de la curva'
         },
         textOfHelp:"Cuando el camino va desde el eje 'x' al eje 'y' se dice que es un camino de 'ida'."
           
      }
   },
   artifact_2: {
      debug: true,
      buttonsActive: {points: true},
      conditions: {m: 33,
         artifactTitle: 'Vuelta',
         valueInputs:[
         [1,"f^{-1}\\left(y\\right)"]                    
      ],
         textOfExample: {
            title: 'Nombre del punto final: ',
            info: 'va del eje y al eje x. Se pone entre parentesis el nombre del punto inicial y a la izquierda del paréntesis el nombre de la curva, con -1 en la posición del exponente.(Esto para distinguirlo de los nombres de los caminos de ida)'
         },

         textOfHelp:"Cuando el camino va desde el eje 'y' al eje 'x' se dice que es un camino de 'vuelta'."
           
      }
   },
   artifact_3: {
      debug: true,
      buttonsActive: {points: true},
      
      conditions: {
         artifactTitle: 'Por la bisectriz',
         valueInputs:[
                        
                        
                        [2,'b'],
                        [4,'h']              
                     ],
         textOfExample: {
               title:'Nombre del punto final: ',
               info:'se pone entre parentesis el nombre del punto inicial. Y a la izquierda del paréntesis se pone el nombre de la curva'
         },
         
      }
   },
   
   
};

etwMain(etwDef, etwDefBoards);

