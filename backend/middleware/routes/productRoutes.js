import { Router } from "express";

const router = Router();

router.get(
    "/api/products",
    asyncHandler(async function (req, res) {
        const products = await ProductModel
    })
)