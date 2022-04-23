export const checkProductData = async (req, res, next) => {
    const { title, image, banner, description, category, price } = req.body;
    const errors = [];

    for(const key in req.body){
        if(!req.body[key]){
            errors.push(`${key} is required.`);
        }
    }

    if(errors.length > 0) return res.status(401).json({ message: errors });

    next();
}