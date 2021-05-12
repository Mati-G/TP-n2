const moduloTareas = require('./Tareas')
const process = require('process');

const comando = process.argv[2];

switch (comando) {
    case 'agregar':
        let titulo = process.argv[3];
        if(!titulo) {
            console.log('Debes especificar un titulo, por favor.');
            break
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
    case "listar":
        moduloTareas.listarTareas()
        break;
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3])        

    default:
        break;
}

