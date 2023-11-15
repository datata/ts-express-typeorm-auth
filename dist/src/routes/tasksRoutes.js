"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const tasksController_1 = require("../controllers/tasksController");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', auth_1.auth, tasksController_1.createTask);
router.get('/', auth_1.auth, tasksController_1.getAllTasksByUserId);
router.get('/user/assigned', auth_1.auth, tasksController_1.getTasksAssignedByUser);
router.get('/:id', auth_1.auth, tasksController_1.getTaskByUserId);
router.put('/:id', auth_1.auth, tasksController_1.updateTaskById);
