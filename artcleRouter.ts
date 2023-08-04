import express, { Router } from "express"
import { getOneArticle , deleteOneArticle, updateArticle, getArticle, createArticle} from "./articleController"

const router: Router = express.Router();

router.route("/getArticles").get(getOneArticle)
router.route("/deleteOneArticle").get(deleteOneArticle)
router.route("/updateArticle").get(updateArticle)
router.route("/getArticle").get(getArticle)
router.route("/getArticle").get(getArticle)
router.route("/createArticle").get(createArticle)