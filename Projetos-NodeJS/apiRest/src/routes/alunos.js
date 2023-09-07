import { Router } from 'express';
import AlunosController from '../controllers/Alunos';

const router = new Router();

router.get('/', AlunosController.index);

export default router;
