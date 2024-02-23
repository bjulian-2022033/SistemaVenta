'use strict'

import { Router } from 'express'
import { deleteP, productUpdate, saveProduct, get } from './product.controller.js'
import { validateJwt , isAdmin} from '../../middlewares/validate-jwt.js'

const api = Router()

api.post('/saveProduct', saveProduct)
api.put('/productUpdate/:id', productUpdate)
api.delete('/deleteP/:id', deleteP)

api.get('/get', [validateJwt], get)

export default api