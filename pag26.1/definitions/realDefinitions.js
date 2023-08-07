//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::|| Area de Definición ||:::::::::::::::::::::::::::::::::::::::::::;;:::::::;;

//_______________________________________________________________________________________________________/ Definicion de boards
//clase para los Boards : new Boars()

const board1 = new Boards()
board1.createBoard()
board1.boardSize(600, 400)
board1.setArtifact('artifact_1')

board1.createLine(1, [-4,-1], [4,-1] ) 

/* 
    board1.createLine(dahs, p1,p2...Pz)
    Con esto se van a crear las constantes o lineas por defecto dentro del board
    
    dash: nos deja controlar si la linea que vamos a crear es de punticos o si es una linea continua
    p1,p2...Px: son los puntos con los que se va a crear la linea. (se va a trazar una línea con esos puntos)
    
*/

const board2 = board1
board2.setArtifact('artifact_2')

const board3 = board1
board3.setArtifact ('artifact_3')

const board4 = board1
board4.setArtifact ('artifact_4')

const board5 = board1
board5.setArtifact('artifact_5')

const board6 = board1
board6.setArtifact('artifact_6')

const board7 = board1
board7.setArtifact('artifact_7')

const board8 = board7
board8.setArtifact('artifact_8')
//_______________________________________________________________________________________________________/ Definicion de artefactos

//clase para las operaciones f() + C : new ArtifactCartesian()

const artifact1 = new ArtifactCartesian()

//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact1.showMenuCurves(true)
artifact1.createGridDefault([-1, 1], [-3, 3])

//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact1.addCurveToMenuCurves('sen', null, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('cos', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('(x)', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('-(x)', 1, 4, 3, 2, 1, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact1.addCurveToMenuCurves('|x|', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('constant')
//artifact1.evaluateCurveSum('-(x)',[1,0])
//artifact1.evaluateCurveSum('sen',[1,2])
artifact1.evaluateCurveMult(['sen'], true, [[0,0], [1,-0.84], [2,-0.91], [3,-0.14], [-1,0.84], [-2,0.91], [-3,0.14]])
//artifact1.evaluateCurveMult(['sen', 'constant'], true, [[1, 1], [2, 2]])

const artifact2 = new ArtifactCartesian()
artifact2.showMenuCurves(true)
artifact2.createGridDefault([-1, 1], [-3, 3])

artifact2.addCurveToMenuCurves('sen', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('cos', null, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('(x)', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('-(x)', 1, 4, 3, 2, 1, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact2.addCurveToMenuCurves('|x|', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('constant')
artifact2.evaluateCurveMult(['cos'], true, [[0,-1], [1,-0.54], [2,0.42], [3,0.99], [-1,-0.54], [-2,0.42], [-3,0.99]])

const artifact3 = new ArtifactCartesian()
  
//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact3.showMenuCurves(true)
artifact3.createGridDefault([-3,-2,-1], [-3,-2,-1,1,2,3])
//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact3.addCurveToMenuCurves('sen', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('cos', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('tg', null,[-1.4, -1, 0, 1, 1.4])
artifact3.addCurveToMenuCurves('e', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('ln', 1, -4, -3, -2, -1, 0, 0.2, 0.5, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('-(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)                                                                                              
artifact3.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact3.addCurveToMenuCurves('|x|', 1, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact3.addCurveToMenuCurves('sqrt', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('constant')
artifact3.evaluateCurveMult(['tg'],true,[[-2,4],[-1,1.4],[0,0],[1,-1.4],[2,-4]])

const artifact4 = new ArtifactCartesian()
artifact4.showMenuCurves(true)
artifact4.createGridDefault([1, 2], [1, 2])
artifact4.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('tg', [-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact4.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.2, 0.5, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact4.addCurveToMenuCurves('|x|', null, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact4.addCurveToMenuCurves('sqrt', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('constant')                                                                                                                            
artifact4.evaluateCurveMult(['e'],true,[[-4,0],[-3,-0.10],[-2, -0.13],[-1,-0.36],[0,-1],[1,-2.7],[2,-4]]) //establece

const artifact5 = new ArtifactCartesian()
  
//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact5.showMenuCurves(true)
artifact5.createGridDefault([-3,-2,-1], [-3,-2,-1,1,2,3])
  
  
//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact5.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('cos', null, 1, 2, 3)
artifact5.addCurveToMenuCurves('(x)', null, 1, 2, 3)
artifact5.addCurveToMenuCurves('ln', null ,0.009, 0.09,0.5,1,2,3.5)
//artifact1.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact5.addCurveToMenuCurves('|x|', null, -1,-2,-3,0,1, 2, 3)                                                                                                       
artifact5.addCurveToMenuCurves('constant')
//artifact1.evaluateCurveSum('ln',[1,-1])
artifact5.evaluateCurveMult(['|x|'], true, [[-3,-3],[-2,-2],[-1,-1],[0,0],[2,-2],[1,-1],[3,-3]])
//artifact1.evaluateCurveMult(['sen', 'constant'], true, [[1, 1], [2, 2]])

const artifact6 = new ArtifactCartesian()
artifact6.showMenuCurves(true)
artifact6.createGridDefault([1,1.5,1.8], [-1, -2,-3])
artifact6.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('cos', null, 1, 2, 3)
artifact6.addCurveToMenuCurves('(x)', null, 1, 2, 3)
artifact6.addCurveToMenuCurves('ln', null ,0.009, 0.09,0.5,1,2,3.5)
artifact6.addCurveToMenuCurves('sqrt',null,0,1,2,3)                                                                                                                   
//artifact2.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact6.addCurveToMenuCurves('|x|', null, -1,-2,-3,0,1, 2, 3)
artifact6.addCurveToMenuCurves('constant')
artifact6.evaluateCurveMult(['sqrt'],true,[[0,0],[-1,1],[-2,1.41],[-3,1.73]]) //establece

const artifact7 = new ArtifactCartesian()
  
//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact7.showMenuCurves(true)
artifact7.createGridDefault([-3], [-3, 3])

//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact7.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('tg', [null], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact7.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.01, 0.2, 0.5, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('1/x', [null], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])                                                                               
artifact7.addCurveToMenuCurves('|x|', null, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact7.addCurveToMenuCurves('sqrt', null, 0, 0.1, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('constant')
// artifact1.evaluateCurveSum('sen',[-1,0],[1,2])
artifact7.evaluateCurveMult(['constant','|x|'],true,[[-2,-4],[-1,-1],[0,0],[1,-1],[2,-4]])
//artifact1.evaluateCurveMult(['sen', 'constant'], true, [[1, 1], [2, 2]])

const artifact8 = new ArtifactCartesian()
artifact8.showMenuCurves(true)
artifact8.createGridDefault([3], [-3, 3])
artifact8.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('tg', [null-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact8.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.01, 0.2, 0.5, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('1/x', [null], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact8.addCurveToMenuCurves('|x|', null, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact8.addCurveToMenuCurves('sqrt', null, 0, 0.1, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('constant')
// artifact2.evaluateCurveSum('constant', 'cos',[1,2])
artifact8.evaluateCurveMult(['constant','|x|'],true ,[[-2,4],[-1,1],[0,0],[1,1],[2,4]])

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|| Objetos de Agrupacion ||::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


const definitionBoars = {
    board_0: board1.builder(),
    board_1: board2.builder(),
    board_2: board3.builder(),
    board_3: board4.builder(),
    board_4: board5.builder(),
    board_5: board6.builder(),
    board_6: board7.builder(),
    board_7: board8.builder()
}

const definitionArtifact = {
    artifact_1: artifact1.builder(),
    artifact_2: artifact2.builder(),
    artifact_3: artifact3.builder(),
    artifact_4: artifact4.builder(),
    artifact_5: artifact5.builder(),
    artifact_6: artifact6.builder(),
    artifact_7: artifact7.builder(),
    artifact_8: artifact8.builder()
}

mainOperation(definitionBoars, definitionArtifact);
