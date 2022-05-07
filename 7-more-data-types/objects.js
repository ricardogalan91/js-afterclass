//Objetos, data mostrada en key/value pairs
let servicesStatus={
    active:1,
    inactive:2,
    pursuit:3,
    working:4
}
let servicesList=[
    {
        key:'CATA',
        statusId:1
    },
    {
        key:'PFIC',
        statusId:2
    },
    {
        key:'RSA',
        statusId:3,
    },
    {
        key:'RSW',
        statusId:1
    }
]

//POSIBLES SERVICIOS A INTEGRAR: PFIC O CATA

let optionsForDropdown=[];

function checkIfPficOrCataIsActive(){
    servicesList.forEach(
        service=>{
            if(service.key==='PFIC' && service.statusId===servicesStatus.active){
                optionsForDropdown.push(service);
            }
            if(service.key==='CATA' && service.statusId===servicesStatus.active){
                optionsForDropdown.push(service);
            }
        }
    )
    console.log(optionsForDropdown);
}

checkIfPficOrCataIsActive();
//ARROW FUNCTIONS
//NOTA: IMPLICIT RETURN
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length));
//NOTA: EXPLICIT RETURN
const materialsExplicit = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materialsExplicit.map(material =>{
    return material.length
}));
//OJO: DOS OBJETOS POR MAS QUE TENGAN LA MISMA PROPIEDAD, NO SON IGUALES
