import { Request, Response } from 'express';
import { Express } from 'express-serve-static-core';
import { analizarArchivo } from '../utils/FileAnalyzer';
import { esArchivoValido } from '../utils/FileValidator';
import * as path from 'path'; 

export default class UploadController {
  public async uploadFile(req: Request & { file: Express.Multer.File }, res: Response): Promise<void> {
    console.log("Solicitud recibida en upController");
    try {
      if (!req.file) {
        console.log('No file received');
        res.status(400).json({ message: 'No se ha cargado un archivo' });
        return;
      }
      console.log('Archivo recibido: ', req.file);

      // Normalizamos la ruta del archivo y le agregamos la extención.
      const filePath = path.normalize(req.file.path);
      console.log('File Path:', filePath);

      if (!esArchivoValido(filePath)) {
        res.status(400).json({ message: 'Tipo de archivo no valido ' });
        return;
      }

      // Logica de procesado de archivos
      await analizarArchivo(filePath);

      res.status(200).json({ message: 'Archivo cargado con exito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error del servidor interno' });
    }
  }
}
