import express from 'express'
const router = express.Router();
import {
  authUser,
  registerUser,
  logOutUser,
  getUserById,
  getUsers,
  updateUsers,
  updateUserProfile,
  deleteUsers,
  getUserProfile,
} from '../controllers/userController.js';
import { protect, Admin } from '../middleWare/authMiddleware.js';
router.route('/').post(registerUser).get(protect,Admin,getUsers);
router.post('/logout', logOutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/:id').delete(protect,Admin,deleteUsers).get(protect,Admin,getUserById).put(protect,Admin,updateUsers);


export default router;