import crudController from "../controllers/crudController";
import router from express.router();
import express from 'express';


router.post('/', crudController.create);
router.get('/:id', crudController.read);
router.put('/:id', crudController.update);
router.delete('/:id', crudController.delete);

module.exports = router;