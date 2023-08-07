//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::|| Area de Definición ||:::::::::::::::::::::::::::::::::::::::::::;;:::::::;;

//_______________________________________________________________________________________________________/ Definicion de boards
//clase para los Boards : new Boars()

const board1 = new Boards()
board1.createBoard()
board1.boardSize(600, 400)
board1.setArtifact('artifact_1')
board1.createLine(1, [-4,1], [4,1] ) 

/* 
    board1.createLine(dahs, p1,p2...Pz)
    Con esto se van a crear las constantes o lineas por defecto dentro del board
    
    dash: nos deja controlar si la linea que vamos a crear es de punticos o si es una linea continua
    p1,p2...Px: son los puntos con los que se va a crear la linea. (se va a trazar una línea con esos puntos)
    
*/

const board2 = board1
board2.setArtifact('artifact_2')

const board3 = new Boards()
board3.createBoard()
board3.boardSize(600, 400)
board3.setArtifact('artifact_3')

board3.createLine(1, [-4,-1], [4,-1] )

const board4 = board2
board4.setArtifact('artifact_4')

const board5 = new Boards()
board5.createBoard()
board5.boardSize(600, 400)
board5.setArtifact('artifact_5')
board5.createLine(1, [-4,2], [4,2] )

const board6 = new Boards()
board6.createBoard()
board6.boardSize(600, 400)
board6.setArtifact('artifact_6')

board6.createLine(1, [-4,3], [4,3] )

const board7 = board5
board7.setArtifact('artifact_7')

const board8 = board7
board8.setArtifact('artifact_8')

//_______________________________________________________________________________________________________/ Definicion de artefactos

//clase para las operaciones f() + C : new ArtifactCartesian()

const artifact1 = new ArtifactCartesian()

//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact1.showMenuCurves(true)
artifact1.createGridDefault([-1, 2], [ -1, 2])

//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact1.addCurveToMenuCurves('sen', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('cos', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('tg', [-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact1.addCurveToMenuCurves('e', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('ln', 1, -4, -3, -2, -1, 0, 0.2, 0.5, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('-(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact1.addCurveToMenuCurves('|x|', 1, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact1.addCurveToMenuCurves('sqrt', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact1.addCurveToMenuCurves('constant')
artifact1.evaluateCurveSum('1/x',[-1,0],[1,2])
//artifact1.evaluateCurveMult(['sen','cos'], false, [[1,1], [2,2]])
//artifact1.evaluateCurveMult(['sen', 'constant'], true, [[1, 1], [2, 2]])


const artifact2 = new ArtifactCartesian()
artifact2.showMenuCurves(true)
artifact2.createGridDefault([1, 2], [1, 2])
artifact2.addCurveToMenuCurves('sen', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('cos', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('tg', [-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact2.addCurveToMenuCurves('e', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('ln', 1, -4, -3, -2, -1, 0, 0.2, 0.5, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('-(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact2.addCurveToMenuCurves('|x|', 1, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact2.addCurveToMenuCurves('sqrt', 1, 0, 0.1, 1, 2, 3, 4)
artifact2.addCurveToMenuCurves('constant')
artifact2.evaluateCurveSum('sen',[1,2])


const artifact3 = new ArtifactCartesian()
artifact3.showMenuCurves(true)
artifact3.createGridDefault([-1, 1], [-1, 1])
artifact3.addCurveToMenuCurves('sen', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('cos', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('tg', [-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact3.addCurveToMenuCurves('e', 0, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('ln', 1, -4, -3, -2, -1, 0, 0.2, 0.5, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('-(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact3.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact3.addCurveToMenuCurves('|x|', 1, -1,-2,-3,0,1, 2, 3, 4)
artifact3.addCurveToMenuCurves('sqrt', 1, 0, 0.1,  1, 2, 3, 4)
artifact3.addCurveToMenuCurves('constant')
artifact3.evaluateCurveSum('e',[0,0])


const artifact4 = new ArtifactCartesian()
artifact4.showMenuCurves(true)
artifact4.createGridDefault([-1, 1], [-1, 1])
artifact4.addCurveToMenuCurves('sen', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('cos', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('tg', [-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact4.addCurveToMenuCurves('e', 1, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('ln', 1, -4, -3, -2, -1, 0, 0.2, 0.5, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('-(x)', 1, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('1/x', [-1,1], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact4.addCurveToMenuCurves('|x|', 1, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact4.addCurveToMenuCurves('sqrt', 1, 0, 0.1, 1, 2, 3, 4)
artifact4.addCurveToMenuCurves('constant')
artifact4.evaluateCurveSum('-(x)',[1,0])

const artifact5 = new ArtifactCartesian()
 
//artifact1.evaluateCurve('curve1', [1,1],[3,1])
artifact5.showMenuCurves(true)
artifact5.createGridDefault([-2, 2], [-3.14, 3.14])
 
//artifact1.addCurveToMenuCurves('cos', 2, 1,2,3,4,5,6)
//artifact1.addCurveToMenuCurves('sen', null, 1,2,3)
artifact5.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('tg', [null], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact5.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.01, 0.2, 0.5, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)                                                                                            
artifact5.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('1/x', [null], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact5.addCurveToMenuCurves('|x|', null, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact5.addCurveToMenuCurves('sqrt', null, 0, 0.1, 1, 2, 3, 4)
artifact5.addCurveToMenuCurves('constant')
// artifact1.evaluateCurveSum('sen',[-1,0],[1,2])
artifact5.evaluateCurveMult(['constant','sen'],true,[[-3.14,0],[-1.57,-2],[0,0],[1.57,2],[3.14,0]])
//artifact1.evaluateCurveMult(['sen', 'constant'], true, [[1, 1], [2, 2]])

const artifact6 = new ArtifactCartesian()
artifact6.showMenuCurves(true)
artifact6.createGridDefault([-3, 3], [-3.14, 3.14])
artifact6.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('tg', [null-2,0,2], [-4,-2,-1.6],[-1.4, -1, 0, 1, 1.4],[1.7,2,4])
artifact6.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.01, 0.2, 0.5, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('1/x', [null], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact6.addCurveToMenuCurves('|x|', null, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact6.addCurveToMenuCurves('sqrt', null, 0, 0.1, 1, 2, 3, 4)
artifact6.addCurveToMenuCurves('constant')
// artifact2.evaluateCurveSum('constant', 'cos',[1,2])
artifact6.evaluateCurveMult(['constant','cos'],true ,[[-3.14,-3],[-1.57,0],[0,3],[1.57,0],[3.14,-3]])

const artifact7 = new ArtifactCartesian()
artifact7.showMenuCurves(true)
artifact7.createGridDefault([-3, 3], [-1.6, 1.6])
artifact7.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('tg', [null], [-1.4, -1, 0, 1, 1.4])
artifact7.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.01, 0.2, 0.5, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('1/x', [null], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact7.addCurveToMenuCurves('|x|', null, -1,-2,-3,0,1, 2, 3, 4)
artifact7.addCurveToMenuCurves('sqrt', null,  0, 0.1, 1, 2, 3, 4)
artifact7.addCurveToMenuCurves('constant')
// artifact3.evaluateCurveSum('constant', 'tg',[0,0])
artifact7.evaluateCurveMult(['constant','tg'],true ,[[-1,-3],[-0.5,-1.1],[0,0],[0.5,1.1],[1,3,]])

const artifact8 = new ArtifactCartesian()
artifact8.showMenuCurves(true)
artifact8.createGridDefault([0.2, 3], [-3, 3])
artifact8.addCurveToMenuCurves('sen', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('cos', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('tg', [null], [-1.4, -1, 0, 1, 1.4])
artifact8.addCurveToMenuCurves('e', null, -4, -3, -2, -1 ,0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('ln', null, -4, -3, -2, -1, 0, 0.01, 0.2, 0.5, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('-(x)', null, -4, -3, -2, -1, 0, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('1/x', [null], [-1, -2, -3, -4, -0.1],[0.2, 1, 2, 3, 4])
artifact8.addCurveToMenuCurves('|x|', null, -1,-2,-3, -4, 0,1, 2, 3, 4)
artifact8.addCurveToMenuCurves('sqrt', null,  0, 0.1, 1, 2, 3, 4)
artifact8.addCurveToMenuCurves('constant')
// artifact4.evaluateCurveSum('constant', 'e',[1,0])
artifact8.evaluateCurveMult(['constant','e'],true ,[[-2,0.2],[-1,0.7],[-0.5,1.2],[0,2],[0.5,3.3]])

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
