import { Router } from 'express';
import ProvinceService from './../services/province-service.js'
import { provincias } from '../../index.js' 


export const ProvinceRouter = Router();
const svc = new ProvinceService(); // Instanciación del Service.
ProvinceRouter.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null) {
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(500).send(`Error interno.`);
    }
    return respuesta;
});

ProvinceRouter.get('/:id', async (req, res) => { 
    res.status(200).send('ok', rovincias);

});

ProvinceRouter.post('', async (req, res) => { 

});

ProvinceRouter.put('', async (req, res) => { 

});

ProvinceRouter.delete('/:id', async (req, res) => { 

});