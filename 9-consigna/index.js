let arrOfCursos=[
    {
        curso:'Angular',
        comision:1
    },
    {
        curso:'Angular',
        comision: 2
    },
    {
        curso:'React',
        comision:3
    },
    {
        curso:'Node',
        comision:4
    },
    {
        curso:'UX',
        comision:5
    }
]

let arrOfEstudiantes=[
    {
        name:'Ricardo',
        id:1,
        cursos:[
            {
                curso:'Angular',
                comision:1
            }
        ]
    },
    {
        name:'Mariana',
        id:2,
        cursos:[
            {
                curso:'React',
                comision:3
            }
        ]
    },
    {
        name:'Jose',
        id:3,
        cursos:[]
    }
]

/*Ricardo quiere dar de baja el curso de Angular,
Mariana quiere dar de baja el de React y entrar al de Node,
Jose quiere inscribirse en el de UX
TENIENDO ESTO EN CUENTA, 
HACER UN METODO PARA DAR DE BAJA
DONDE AL FINAL HAGA UN CONSOLE.LOG() {NOMBRE DE ESTUDIANTE} DIO DE BAJA AL CURSO DE {TITULO DEL CURSO},
OTRO PARA DAR DE ALTA
DONDE AL FINAL HAGA UN CONSOLE.LOG() {NOMBRE DE ESTUDIANTE} DIO DE ALTA AL CURSO DE {TITULO DEL CURSO},
 Y UNO ULTIMO PARA LISTAR ESTUDIANTES Y CURSOS
 LISTANDO SU OBJETO O EN DADO CASO QUE NO ESTÉ EN NINGUN CURSO DAR LA SIGUIENTE ALERTA
 {NOMBRE} NO SE ENCUENTRA EN NINGUN CURSO*/

 /* METODOS A UTILIZAR
 bajaCurso(idDeEstudiante, idDeCurso)
 altaCurso(idDeEstudiante, idDeCurso)
 listado()
 */

function bajaCurso(idDeEstudiante, idDeCurso){
    const estudianteiD=arrOfEstudiantes.findIndex(x=>x.id===idDeEstudiante);
    const cursoId=arrOfEstudiantes[estudianteiD].cursos.findIndex(x=>x.comision===idDeCurso);
    arrOfEstudiantes[estudianteiD].cursos.splice(cursoId,1)
    console.log(arrOfEstudiantes[estudianteiD].name + ' dio de baja el curso de ' + arrOfCursos[cursoId].curso);
}

function altaCurso(idDeEstudiante,idDeCurso){
    const estudianteiD=arrOfEstudiantes.findIndex(x=>x.id===idDeEstudiante);
    const cursoId=arrOfCursos.findIndex(x=>x.comision===idDeCurso);
    arrOfEstudiantes[estudianteiD].cursos.push(arrOfCursos[cursoId])
    console.log(arrOfEstudiantes[estudianteiD].name + ' dio de alta el curso de ' + arrOfCursos[cursoId].curso);
}

function listado(){
    arrOfEstudiantes.forEach(estudiante=>{
        if(estudiante.cursos.length){
            console.log(estudiante);
        }else{
            console.log(estudiante.name + ' no se encuentra en ningun curso')
        }
    })
}

bajaCurso(1,1)
bajaCurso(2,3)
altaCurso(2,4)
altaCurso(3,5)
listado()