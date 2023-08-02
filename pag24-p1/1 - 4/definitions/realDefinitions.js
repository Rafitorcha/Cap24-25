//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::|| Area de Definición ||:::::::::::::::::::::::::::::::::::::::::::;;:::::::;;

//_______________________________________________________________________________________________________/ Definicion de boards
//clase para los Boards : new Boars()

const board1 = new Boards()
board1.createBoard()
board1.boardSize(600, 400)
board1.setArtifact('artifact_1')

board1.createLine(0, [-4,1], [4,1] ) 

/* 
    board1.createLine(dahs, p1,p2...Pz)
    Con esto se van a crear las constantes o lineas por defecto dentro del board
    
    dash: nos deja controlar si la linea que vamos a crear es de punticos o si es una linea continua
    p1,p2...Px: son los puntos con los que se va a crear la linea. (se va a trazar una línea con esos puntos)
    
*/

const board2 = new Boards()
board2.createBoard()
board2.boardSize(600, 400)
board2.setArtifact('artifact_2')

board2.createLine(0, [-4,2], [4,2] ) 

const board3 = new Boards()
board3.createBoard()
board3.boardSize(600, 400)
board3.setArtifact('artifact_3')

board3.createLine(0, [-4,2], [4,2] ) 

const board4 = new Boards()
board4.createBoard()
board4.boardSize(600, 400)
board4.setArtifact('artifact_4')

board4.createLine(0, [-4,-1], [4,-1] ) 

//_______________________________________________________________________________________________________/ Definicion de artefactos

//clase para las operaciones f() + C : new ArtifactCartesian()

const artifact1 = new ArtifactCartesian()

//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact1.showMenuCurves(true)
artifact1.createGridDefault([1, 2], [1, 2])

//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact1.addCurveToMenuCurves('sen', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('cos', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('(x)', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('-(x)', 1, 4, 3, 2, 1, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact1.addCurveToMenuCurves('|x|', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact1.addCurveToMenuCurves('constant')
artifact1.evaluateCurveSum('(x)',[1,2])
//artifact1.evaluateCurveSum('sen',[1,2])
//artifact1.evaluateCurveMult(['sen','cos'], false, [[1,1], [2,2]])
//artifact1.evaluateCurveMult(['sen', 'constant'], true, [[1, 1], [2, 2]])



const artifact2 = new ArtifactCartesian()
artifact2.showMenuCurves(true)
artifact2.createGridDefault([1, 2], [1, 2])

artifact2.addCurveToMenuCurves('sen', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('cos', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('(x)', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('-(x)', 1, 4, 3, 2, 1, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact2.addCurveToMenuCurves('|x|', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact2.addCurveToMenuCurves('constant')
artifact2.evaluateCurveSum('(x)',[1,3])

const artifact3 = new ArtifactCartesian()
artifact3.showMenuCurves(true)
artifact3.createGridDefault([1, 2], [1, 2])

artifact3.addCurveToMenuCurves('sen', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact3.addCurveToMenuCurves('cos', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact3.addCurveToMenuCurves('(x)', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact3.addCurveToMenuCurves('-(x)', 1, 4, 3, 2, 1, 0, -1, -2, -3, -4)
artifact3.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact3.addCurveToMenuCurves('|x|', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact3.addCurveToMenuCurves('constant')
artifact3.evaluateCurveSum('-(x)',[1,1])

const artifact4 = new ArtifactCartesian()
artifact4.showMenuCurves(true)
artifact4.createGridDefault([1, 2], [1, 2])

artifact4.addCurveToMenuCurves('sen', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact4.addCurveToMenuCurves('cos', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact4.addCurveToMenuCurves('(x)', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact4.addCurveToMenuCurves('-(x)', 1, 4, 3, 2, 1, 0, -1, -2, -3, -4)
artifact4.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -0.1],[0.2, 1, 2, 3])
artifact4.addCurveToMenuCurves('|x|', 1, 1, 2, 3, 4, 0, -1, -2, -3, -4)
artifact4.addCurveToMenuCurves('constant')
artifact4.evaluateCurveSum('-(x)',[1,-2])
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|| Objetos de Agrupacion ||::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


const definitionBoars = {
    board_0: board1.builder(),
    board_1: board2.builder(),
    board_2: board3.builder(),
    board_3: board4.builder()
}
const definitionArtifact = {
    artifact_1: artifact1.builder(),
    artifact_2: artifact2.builder(),
    artifact_3: artifact3.builder(),
    artifact_4: artifact4.builder()
}

mainOperation(definitionBoars, definitionArtifact);
