import express from "express";

import SchedulingController from "../controller/SchedulingController.js";

const schedulingController = new SchedulingController();

const router = express.Router();

router.get('/api/schedulings', schedulingController.index);

router.get('/api/schedulings/:id', schedulingController.getOne);

router.post('/api/schedulings', schedulingController.store);

router.put('/api/schedulings/:id', schedulingController.update);

router.delete('/api/schedulings/:id', schedulingController.remove);

export default router;
