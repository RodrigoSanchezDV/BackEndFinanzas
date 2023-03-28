import Articles from "../models/articles.js"
import Sectors from "../models/sectors.js"
const controllers = {
    index : async (req,res)=>{
        let page = req.params.page;

        const articles = await Articles.paginate({},{page: page,limit: 10});

        res.send(articles)
    },
    all : async (req,res) => {
        const articles = await Articles.find()
        res.send(articles)
    },
    sectors : async (req,res) => {
        const articles = await Sectors.find()
        res.send(articles)
    },
    section : async (req,res) => {
        let page = req.params.sectionName;
        const articles = await Articles.find({
            Sector:page
        })
        res.send(articles)
    },
    article : async (req,res) => {
        let page = req.params.articleID;
        const articles = await Articles.find({
            _id:page
        })
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