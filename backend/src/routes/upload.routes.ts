<<<<<<< HEAD
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
=======
import {Router, RequestHandler} from 'express';
import uploadController from '../controllers/upload.controller';
import multer from 'multer';

const router = Router();
const upload = multer({dest: 'uploads/'});

router.post('/', upload.single('file'), uploadController.uploadFile as RequestHandler);
>>>>>>> 1238d59558643b1305fd11d6217fa0fc62254847

export default router;