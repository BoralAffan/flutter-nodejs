import express, { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    const data = req.url

    res.status(200).json({
        message: data,
        mss: "home"
    })
})


router.get("/info", (req: Request, res: Response) => {
    const data = req.url

    res.status(200).json({
        message: data,
        mss: "info page"
    })


})


router.post("/", (req: Request, res: Response) => {
    const data = req.body.name;
    console.log(data)
    res.json({
        data: data
    })
})



router.get("/profile", (req: Request, res: Response) => {
    const data = req.url

    res.status(200).json({
        message: data,
        mss: "profile page"
    })
})

export { router } 