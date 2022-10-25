import { Router } from "express";
import * as PageContoller from '../controllers/pageController'
import * as SearchContoller from '../controllers/searchController'

const router = Router();

router.get('/', PageContoller.home);
router.get('/dogs', PageContoller.dogs);
router.get('/cats', PageContoller.cats);
router.get('/fishes', PageContoller.fishes);

router.get('/search', SearchContoller.search);

export default router;