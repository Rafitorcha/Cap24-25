class Boards {
  constructor() {
    this.artifact = 'artifact_1'
    this.asymptotes = []
    this.lines =false
    this.texts = false
    this.points = false
    this.curves = false
    this.top = 4
    this.bottom = -4
    this.left = -4
    this.right = 4
    this.style = {
      axis: [false, true, true],
      boundingbox:[-4,4,4,-4]
    }
  }
/* 
    lines: [
      {
        points: [
          [10, 1],
          [-10, 1],
        ],
        dash: 2,
      },
      {
        points: [
          [11, -1],
          [-11, -1],
        ],
        dash: 2,
      },
    ],

*/
  

  setArtifact(artifactName){
     this.artifact = artifactName
  }


  /* 
     {
              typeCurve: "curve",
              interactive: true,
              flex: 0,
              points: [[-3, -3], [-2, -1], [0, 0], [2, 1], [3, 3]],
           },
           
           */

  createCurveInteractive(flex = 0,...pointOfCurves){
     const data = {
        typeCurve: "curve",
        interactive: true,
        flex,
        points:[],
     }

     pointOfCurves.forEach(coord => {
        data.points.push(coord)
     })

     this.curves = !this.curves ? [] : this.curves
     this.curves.push(data)
     console.log(this.curves);
  }

  setGrid(boolean = true) {
    this.style['grid'] = boolean
  }

  /* texts: [
          
        {
          x: 1.3,
          y: 1.37,
          text: "1",
          style: {
            color: "green",
            fontWeight: "bold",
            fontSize: 12,
          },
        },
        {
          x: 1.29,
          y: 0.74,
          text: "W",
          style: {
            color: "green",
            fontWeight: "bold",
            fontSize: 12,
          },
        },
        {
          x: -2.96,
          y: 5.2,
          text: "POSICION VERTICAL",
          style: {
            color: "black",
            fontWeight: "bold",
            fontSize: 9,
          },
        },
  
      ],
   * 
   */
      
  createPointsToRoads(coords = [0,0], visible = true, interactive = true, fixed = true){
     /* 
              points: [
        { x: -3, y: 0, visible: true, interactive: true, fixed: true },
        { x: -2, y: 0, visible: true, interactive: true, fixed: true },
      
     ],
     */

     const data = {
        x: coords[0],
        y:coords[1],
        visible,
        interactive,
        fixed
     }

     this.points = !this.points ? [] : this.points

     this.points.push(data)

     return
  }

  createText(textParam = '<texto>', coords = [1,1], styleParam = { color: "black", fontWeight: "bold", fontSize: 12,}){
    this.texts = !this.texts ? [] : this.texts

    const data  = {
      x: coords[0],
      y: coords[1],
      text: textParam,
      style:styleParam,
    }
    this.texts.push(data)

  }

  createLine(dashParam = 2, ...points){

    this.lines = !this.lines ? [] : this.lines

    const data = {
      points: [],
      dash: dashParam,
     
    }
    points.forEach(coord => {
      data.points.push(coord)
    })
    this.lines.push(data)
  }

  createAsymptotes(dashParam = 2,...asymptotesParams){
   /*  asymptotes.forEach((x)=>{
      this.asymptotes.push(x)
    })
    return */

    asymptotesParams.forEach((coordX)=>{
      this.createLine(dashParam, [coordX, this.top], [coordX, this.bottom])
    })
    

    console.log(asymptotesParams);

  }

  boardSize(width, height) {
    this.style['width'] = width;
    this.style['height'] = height
  }

  boardMaxSize(maxWidth, maxHeight){
    this.style['maxWidth'] = maxWidth;
    this.style['maxHeight'] = maxHeight
  }

  setOrigin(boolean = true) {
    this.style['origin'] = boolean
  }

  setBourdingBox(x1 = -4, y1 = 4, x2 = 4, y2 = -4) {
    this.left = x1
    this.top = y1
    this.right = x2
    this.bottom = y2
    this.style['boundingbox'] = [x1, y1, x2, y2]
  }

  createBoard(type = 1) {
    if (type === 1) {

      this.setGrid()
      this.setOrigin()
      this.setBourdingBox()
      this.style['valueAxis'] = {
        yd: [[0, 0], [0, 1]], //dirección del eje y
        xd: [[0, 0], [1, 0]],
        colory: "#000",
        colorx: "#000",
        color:'#000'
      }
    }
  }

  builder() {
    return {
        curves:this.curves,
      artifact: this.artifact,
      style: this.style,
      texts:this.texts,
      points:this.points,
      lines:this.lines,
      asymptotes: this.asymptotes
    }
  }
}


/*
artifact_1: {
    config: {
      curves: {
        flex: 1,
      },
    },
    buttonsActive: { curves: true, infinities:true },
    
    gridDefault:{
     vertical:[-3.14,3.14],
     
    },

    helpMsg: {
      title: "suma de curva",
      text: "Grafique la curva suma, los puntos de corte estan definidos",
    },

    menuCurves:{
     visiblePoints: true, 
     curves:[
    ['sen', [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],1.5], 
     ['COS',[0,1.5,3.14,4.71,6.28,7.8]],
     ['1/x',[[-8,-7,-3,-2,-1,-0.05],[0.5,1,2,3,7,8]], 2],
     ['(x)',[-5,-4,-3,-2,-1,0,1,2,3,4,5,6], 2],
     
     //['funcion', [[[],pm], [[],pm] ]],
     
     ['(x)', [ [ [,0,1,2,3],null] ] ],   
     ['sen', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
     ['cos', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
     ['1/x', [ [[-5,-3,-2,-1,-0.2],-1] , [[0.2,1,2,3,5],1]   ] ],
     ['constant']
   ]
     
   },

    conditions: {

     buttonsActive: { curves: true },
     
     curveMultiplication:{
       firstCurves:['sen','constant'],
       grids:true,
       points:[[-1,2],[2,2]]
     }, 

     curveMultiplications:[
       {
         firstCurves:['sen','constant'],
         grids:true,
         points:[[[-1,2],[2,2]],[[-1,-2],[2,-2]]]
       },
     ],

    /*  curveAlone:[
       {
         points:[[-3,3],[-2,2],[-1,1],[0,0],[1,1],[2,2],[3,3]],
         infinities: [[9, 10], [1,2]]
       },
      ], */
     
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
*/

    //},
  //},

class ArtifactCartesian {
    constructor(){
        this.helpMsg = false
        this.pointsWhitInputs = false
        this.curveAlone = false
        this.aditionConstant = false
        this.curveMultiplications = false
        this.config = false
        this.menuCurves = {}
        this.conditions = {}
    }

/*     pointsWithInputs:[
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

      ], */
/* 
    curveMultiplications:[
      {
        firstCurves:['sen','constant'],
        grids:true,
        points:[ [ [-1,2],[2,2] ]  ,[ [-1,-2],[2,-2] ] ]
      },
    ], */
 //

      curveAparience(number = 1){
        const data  = {
          curves:{
            flex: number
          }
        }

        this.config = data
      } 

      evaluateCurveMult(curves = [], grids = true, ...point){
        //point debe ser del tipo [ [x,y], [x,y] ],
        console.log('hiiii');
        const data = {
          firstCurves: curves,
          grids,
          points: []
        }

        point.forEach(pointsOfCurves => {
          data.points.push(pointsOfCurves)
        })

        this.curveMultiplications = !this.curveMultiplications ? [] : this.curveMultiplications 
        this.curveMultiplications.push(data)

      }

      evaluateCurveSum(curveName, ...coordPoints){
        /* aditionConstant: [

          {
            operation: 'sen',
            values: [[3.14,2]]
          }], */

          const data = {
            operation: curveName,
            values:[]
          }
          
          coordPoints.forEach(coord => {
            data.values.push(coord)
          })

          console.log('la dataaaaadsadasa',data, coordPoints);
          console.log(this.aditionConstant);
          this.aditionConstant = !this.aditionConstant ? [] : this.aditionConstant 
          this.aditionConstant.push(data)
      }


      showMenuCurves(show = false){
        if (show){
          const data = {
            curves:[
            //['sen', [ [ [-7.8,-6.28,-4.71,-3.14,-1.5,0,1.5,3.14,4.71,6.28,7.8],3.14 ] ] ],   
            
            ]
          }
          this.menuCurves = data
        }
      }

      addCurveToMenuCurves(curveName = '', anchor = null, ...points){
         //['funcion', [ [[],pm], [[],pm] ]],
        //['1/x', [ [[-5,-3,-2,-1,-0.2],-1] , [[0.2,1,2,3,5],1]] ],

        points =points.sort((a,b)=>{
          return a - b
        })

        const aux = this.menuCurves.curves.filter(curve => curve[0] == curveName)
        
        if(curveName === '1/x' || curveName === 'tg'){
          console.log(curveName,points);
          /* 
              ['1/x', [ [[-5,-3,-2,-1,-0.2],-1] , [[0.2,1,2,3,5],1]]   ],
          */
          /* 
            anchor: [1,2]
            points: [[],[]]
          */
            const data = [curveName, []]
            points.forEach((pointCurves, index) => {
              //[ [-5,-3,-2,-1,-0.2],-1]
              console.log(pointCurves);

              pointCurves = pointCurves.sort((a,b)=> {
                return a-b
              })

              const dataCurve = [pointCurves, anchor === null ? null : anchor[index] ?? null ]
              console.log('la data esss', dataCurve);

              data[1].push(dataCurve)

            })

            this.menuCurves.curves.push(data)

            return 
        }

        if(curveName == 'constant'){
        this.menuCurves.curves = this.menuCurves.curves.length ? this.menuCurves.curves : []
        this.menuCurves.curves.push(['constant'])
        return
        }

        if(aux.length){

          console.log('la curva ya esta creada',curveName);
           const curve = aux[0]
          const auxPoints = curve[1]
          const data = [points, anchor]
          auxPoints.push(data) 
          return false
        }

        console.log('la curva no se encuentra creada',curveName);
        const data = [curveName, [[points,anchor]]]

        this.menuCurves.curves = this.menuCurves.curves.length ? this.menuCurves.curves : []
        this.menuCurves.curves.push(data)
        return 

      }

      addPointWithInputs(...inputs){
        console.log(inputs);
        this.pointsWhitInputs = this.pointsWhitInputs ? this.pointsWhitInputs : []
        //[coord, valueLatex]
        inputs.forEach((input)=>{
          const data = {
            coord:input[0],
            value:input[1] || '1'
          }
    
          this.pointsWhitInputs.push(data)
        })

        console.log(this.pointsWhitInputs);
        
      }

      addInfinities(idParam,firstPoint = null, lastPoint = null){
        const aux = this.curveAlone.filter(curve => curve.id === idParam)
        console.log('curva encontrada', aux);

        if(!aux.length){
          alert(`la curva ${idParam}, no se encuentra creada`)
          return
        }

        const curveFound = aux[0]

        curveFound.infinities =  curveFound.infinities ? curveFound.infinities : []

        console.log(curveFound);

        const auxFirstPoint = !Array.isArray(firstPoint) ? [firstPoint] : firstPoint 
        const auxLastPoint = !Array.isArray(lastPoint) ? [lastPoint] : lastPoint 

        console.log(auxFirstPoint);
        console.log(auxLastPoint);

        curveFound.infinities[0] = auxFirstPoint[0] === null ? auxFirstPoint[0] : auxFirstPoint
        curveFound.infinities[1] = auxLastPoint[0] === null ? auxLastPoint[0] : auxLastPoint

/* 
        curveFound.infinities[0] = auxFirstPoint
        curveFound.infinities[1] = auxLastPoint */


        return
      }

/* 

 curveAlone:[
       {
         points:[[1,1],[2,2],[3,3]],
         infinities: [[8, 9, 10], [1]]
       },
      ],

*/

      evaluateCurve(idParam,...points){
        this.curveAlone = this.curveAlone ? this.curveAlone : []

        const data = {
            id: idParam || this.curveAlone.length,
            points : [],
            infinities:false
        } 

        points.forEach((point)=>{
            data.points.push(point)
        })

        this.curveAlone.push(data)
      }

      createGridDefault(horizontal = [],vertical = []){
        
        const verticalLines = []
        const horizontalLines =[]

        horizontal.forEach(coord => {
          horizontalLines.push(coord)
        })

        vertical.forEach(coord => {
          verticalLines.push(coord)
        })

        this.gridDefault = !this.gridDefault ? {} : this.gridDefault
        this.gridDefault.horizontal = horizontalLines
        this.gridDefault.vertical = verticalLines
      }

    builder(){
        console.log(this.pointsWhitInputs);
        return {
            helpMsg:this.helpMsg,
            menuCurves:this.menuCurves,
            config:this.config,
            gridDefault:this.gridDefault,

            conditions:{
                curveAlone:this.curveAlone,
                curveMultiplications:this.curveMultiplications,
                aditionConstant: this.aditionConstant,
                pointsWithInputs: this.pointsWhitInputs, 

            }
        }
    }
}
/* 
const testArtifact = new ArtifactCartesian

//testArtifact.evaluateCurve('curve1', [1,1],[3,1])
testArtifact.showMenuCurves(true)

//testArtifact.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)

//testArtifact.addCurveToMenuCurves('sen', null, 1,2,3)
testArtifact.addCurveToMenuCurves('sen', null, 1,2,3)
testArtifact.addCurveToMenuCurves('cos', null, 1,2,3)
testArtifact.addCurveToMenuCurves('(x)', null, 1,2,3)
testArtifact.addCurveToMenuCurves('1/x', null, 1,2,3)

//testArtifact.addCurveToMenuCurves('sen', 2, 1,2,3)
/* testArtifact.addCurveToMenuCurves('cos', 2, 1,2,3)
testArtifact.addCurveToMenuCurves('(x)', 2, 1,2,3)
testArtifact.addCurveToMenuCurves('|x|', 2, 1,2,3)
testArtifact.addCurveToMenuCurves('cos', 2, 1,2,3)
 

//testArtifact.evaluateCurveSum('sen',[1,2])
//testArtifact.evaluateCurveMult(['sen','cos'], false, [[1,1], [2,2]],)

testArtifact.evaluateCurveMult(['sen','cos'], true, [[1,1], [2,2]],[[1,-1], [2,-2]])

console.log('acaaa',testArtifact.builder());

const artifact2 = new ArtifactCartesian()
artifact2.showMenuCurves(true)

artifact2.addCurveToMenuCurves('sen', 1, 1,2,3,4,5,6)
artifact2.evaluateCurveSum('sen',[1,2])
 */

