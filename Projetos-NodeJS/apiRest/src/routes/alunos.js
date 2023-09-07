import { Router } from 'express';
import AlunosController from '../controllers/Alunos';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunosController.index);
router.post('/', loginRequired, AlunosController.store);

router.get('/describe-student/:id', AlunosController.show);
router.put('/:id', loginRequired, AlunosController.update);
router.delete('/:id', loginRequired, AlunosController.delete);

export default router;
