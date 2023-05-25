import { Router } from "express"
import create from "../controllers/authors/create.js"
import read from "../controllers/authors/read.js"

let authorsRouter = Router()

authorsRouter.post('/',create)
authorsRouter.get('/',read)
// *configurar las rutas para CRUD de authors
/*GET POST PUT DELETE*/

export default authorsRouter