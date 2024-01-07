import express from 'express'
import * as controller from '../controllers/controller.js'

const router = express.Router()

router.get('/skelbimai', controller.ad_get_all)
router.post('/skelbimai', controller.ad_post)
router.get('/skelbimai/:id', controller.ad_details_get);
router.put('/skelbimai/:id', controller.ad_put)
router.delete('/skelbimai/:id', controller.ad_delete)

export default router