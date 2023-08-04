import {Request, Response} from "express"
import iArticleData from "./articleModel"
import artis

export const createArticle = async (req: Request, res: Response ) => {
    try {
        const {content, description, title, category} = req.body

        const article: iArticleData = await artisticModel.create({
            content,
            description,
            title,
            category

        });

        res.status(200).json
    } catch (error) {
        res.status(404).json({
            message: "Error"
        })
    }
}
export const getArticle = async (req: Request, res: Response ) => {
    try {
        const {content, description, title, category} = req.body

        const article: iArticleData[] = await artisticModel.find()

        return res.status(200).json({
            message: "get all Article",
            data: Article,
        })
    } catch (error) {
        res.status(404).json({
            message: "Error"
        })
    }
}


export const updateArticle = async (req: Request, res: Response ) => {
    try {
        const {articleID} = req.params

        const {content, title} = req.body

        const article: iArticleData | null= await artisticModel.findByIdAndUpdate(
            articleID,
            {
                content,
                title
            },
            {new: true},
        ),
        res.status(200).json({
            message: "updated"
        })
    } catch (error) {
        res.status(404).json({
            message: "Error"
        })
    }
}



export const getOneArticle  = async (req: Request, res: Response ) => {
    try {
        const {articleID} = req.params

        const {content, description, title, category} = req.body

        const article: iArticleData | null= await artisticModel.findByIdAndUpdate(articleID)

        return res.status(200).json({
            message: "get One",
            data: article
        })
    } catch (error) {
        res.status(404).json({
            message: "Error"
        })
    }
}


export const deleteOneArticle  = async (req: Request, res: Response ) => {
    try {
        const {articleID} = req.params

        const {content, description, title, category} = req.body

        const article: iArticleData | null= await artisticModel.findByIdAndUpdate({
            articleID,

        })
    } catch (error) {
        res.status(404).json({
            message: "Error"
        })
    }
}