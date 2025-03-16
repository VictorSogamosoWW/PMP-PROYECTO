import {Request, Response, Express} from 'express';
import {analyzeFile} from '../utils/FileAnalyzer';

class UploadController {
    public async uploadFile(req: Request & { file: Express.Multer.File }, res: Response): Promise<void> {
        try{
            if (!req.file) {
                res.status(400).json({message: 'No se ha cargado un archivo'});
                return;
            }
            console.log('Archivo recibido: ', req.file);

            //Logica de procesado de archivos
            const filePath = req.file.path;

            analyzeFile(filePath);

            res.status(200).json({message: 'Archivo cargado con exito'});
        }catch (error) {
            console.error(error);
            res.status(500).json({message: 'Error del servidor interno'});
        }
    }
}

export default new UploadController();