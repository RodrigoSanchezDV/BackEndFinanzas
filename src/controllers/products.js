import Articles from "../models/articles.js"
const controllers = {
    index : async (req,res)=>{
        let page = req.params.page;

        const articles = await Articles.paginate({},{page: page,limit: 10});

        res.send(articles)
    },
/*     one: async(req,res)=>{
        const oneProduct = await Product.findOne({price:req.params.price})
        return res.render("../views/detail",{data:oneProduct})
    },
    showCreate: async(req,res)=>{
        res.render("../views/create")
    },
    create: async (req,res)=>{
        await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount
        })
        res.redirect("/")
    },
    showEdit: async (req,res)=>{
        const oneProduct = await Product.findOne({_id:req.params.id})
        return res.render("../views/edit",{data:oneProduct})
    },
    edit: async(req,res)=>{
        await Product.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
            )
            res.redirect("/")
    } */
}

export default controllers;