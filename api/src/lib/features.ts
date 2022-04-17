// Constructor and object instance
export function APIfeatures(query, queryString) {
    this.query = query; // Products.find()
    this.queryString = queryString; // req.query

    this.paginating = () => {
        const page = this.queryString.page * 1 || 1; // 1 is the default value
        const limit = this.queryString.limit * 1 || 5; // 5 is the default value
        const skip = (page - 1) * limit; // 0 is the default value
        this.query = this.query.limit(limit).skip(skip); // find all products

        return this;
    }
     // this.query = Products.find().limit(limit).skip(skip);

    this.sorting = () => {
        const sort = this.queryString.sort || '-createdAt';
        this.query = this.query.sort(sort); // find all products

        return this;
    }
    // this.query = Products.find().limit(limit).skip(skip).sort(sort);

    this.searching = () => {
        const search = this.queryString.search;
        if(search) {
            this.query = this.query.find({ $text: { $search: search } });
        } else {
            this.query = this.query.find();
        }

        return this;
    }
    // this.query = Products.find().limit(limit).skip(skip).sort(sort).find({ $text: { $search: search } });

    this.filtering = () => {
        const queryObj = {...this.queryString};

        const excludedFields = ['page', 'limit', 'sort', 'search'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));
        
        return this
    }
}