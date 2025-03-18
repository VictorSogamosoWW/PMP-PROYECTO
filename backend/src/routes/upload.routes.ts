import { Router, RequestHandler } from 'express';
import uploadController from '../controllers/upload.controller';
import multer from 'multer';
import path from 'path';
import UploadController from '../controllers/upload.controller';

const router = Router();

// Configuración de multer para usar el nombre original del archivo
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads/'),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });
const controladorCarga = new UploadController();

console.log('Upload routes initialized');
router.post('/', upload.single('file'), (req, res, next) => {
  console.log('Upload route hit');
  next();
}, controladorCarga.uploadFile as RequestHandler);

export default router;