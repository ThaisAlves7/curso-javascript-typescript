import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Normalmente não deveria existir => Didático apenas
router.get("/", userController.index); //Lista usuários
// router.get("/:id", userController.show); //Lista 1 usuário

//Rotas reais => São usados em modelos reais
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
/*
  Geralmente um controller tem até 5 métodos dentro dele que seriam:
    index -> Lista todos os usuários      => GET
    store/ create -> cria um novo usuário => POST
    delete -> apaga um usuário            => DELETE
    show -> mostra um usuário             => GET
    update -> atualiza um usuário         => PATCH ou PUT
*/
