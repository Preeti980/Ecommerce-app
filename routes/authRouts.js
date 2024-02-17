import express from 'express';
import {registerController,loginController,testController,
   forgotPasswordController, updateProfileController,
    getOrdersController,
     getAllOrdersController, orderStatusController
    } from '../controllers/authController.js';
import { isAdmin, requireSignIN } from '../middlewares/authMiddleware.js';
//router object
const router=express.Router();



//routing
//register post
router.post('/register',registerController)

//login ||post
router.post('/login',loginController)

//Forgot Password
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get('/test',requireSignIN,isAdmin,testController);

//protected user route auth
router.get("/user-auth", requireSignIN, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //protected admin route auth
router.get("/admin-auth", requireSignIN,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIN, updateProfileController);

//orders
router.get("/orders", requireSignIN, getOrdersController);

//all orders
router.get("/all-orders", requireSignIN, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIN,
  isAdmin,
  orderStatusController
);
export default router