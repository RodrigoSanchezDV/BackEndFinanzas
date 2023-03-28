import express from "express"
import productsController from "../controllers/products.js"
const router = express.Router();

router.get("/categories", productsController.all)
router.get("/categories/:page",productsController.index);

router.get("/sectors",productsController.sectors);
router.get("/sections/:sectionName",productsController.section);
router.get("/article/:articleID",productsController.article);

/* router.get("/create",productsController.showCreate);

router.get("/one/:price",productsController.one);

router.get("/edit/:id",productsController.showEdit)

router.post("/",productsController.create);

router.post("/edit/:id",productsController.edit) */

export default router;