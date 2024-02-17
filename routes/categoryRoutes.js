import express from 'express'
import { isAdmin, requireSignIN } from '../middlewares/authMiddleware.js'
import { createCategoryController, updateCategoryController ,
    deleteCategoryCOntroller,
    singleCategoryController,
    categoryControlller,
} from '../controllers/categoryController.js'

const router=express.Router()

//routers
//create category
router.post('/create-category', requireSignIN,isAdmin,createCategoryController)


//update category
router.put("/update-category/:id", requireSignIN,isAdmin,
updateCategoryController)

//getALl category
router.get("/get-category", categoryControlller );

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIN,
  isAdmin,
  deleteCategoryCOntroller
);
export default router