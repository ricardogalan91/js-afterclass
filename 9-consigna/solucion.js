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

function bajaCurso(idDeEstudiante, idDeCurso){
    //Se busca el index del estudiante en cuestión
    const estudianteiD=arrOfEstudiantes.findIndex(x=>x.id===idDeEstudiante);
    //Se busca el curso del estudiante a dar baja
    const cursoId=arrOfEstudiantes[estudianteiD].cursos.findIndex(x=>x.comision===idDeCurso);
    //Se remueve del array de cursos, el curso encontrado con el id;
    arrOfEstudiantes[estudianteiD].cursos.splice(cursoId,1)
    console.log(arrOfEstudiantes[estudianteiD].name + ' dio de baja el curso de ' + arrOfCursos[cursoId].curso);
}

function altaCurso(idDeEstudiante,idDeCurso){
    //Se busca el index del estudiante en cuestión
    const estudianteiD=arrOfEstudiantes.findIndex(x=>x.id===idDeEstudiante);
    //Se busca el curso del estudiante a dar alta
    const cursoId=arrOfCursos.findIndex(x=>x.comision===idDeCurso);
    //Se pushea el curso al array de cursos del estudiante
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