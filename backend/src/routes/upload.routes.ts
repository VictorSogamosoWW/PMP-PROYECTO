import {Router, RequestHandler} from 'express';
import uploadController from '../controllers/upload.controller';
import multer from 'multer';

const router = Router();
const upload = multer({dest: 'uploads/'});

router.post('/', upload.single('file'), uploadController.uploadFile as RequestHandler);

export default router;