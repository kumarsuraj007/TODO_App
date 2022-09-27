import express from "express";
import {CreateToDo, GetToDo, DeleteToDoById, DeleteTodo, UpdateToDoById} from '../Controller/todo.js';

const router = express.Router();
router.route('/save-content').post(CreateToDo);
router.route('/get-content').get(GetToDo);
router.route('/delete-content/:id').delete(DeleteToDoById);
router.route('/deleteAll-content').delete(DeleteTodo);
router.route('/update-content/:id').put(UpdateToDoById);

export default router;