const { error_message } = require("../error_message");

const contests = [
    {id:1, image: "https://www.datocms-assets.com/51952/1715938280-en.png"}, 
    {id:2, image: "https://www.datocms-assets.com/51952/1715931491-en.png"}, 
    {id:3, image: "https://www.datocms-assets.com/51952/1715758694-en.png"}, 
    {id:4, image: "https://www.datocms-assets.com/51952/1715930453-en.png"}, 
    {id:5, image: "https://www.datocms-assets.com/51952/1715676856-en.png"}, 
    {id:6, image: "https://www.datocms-assets.com/51952/1715667730-en.png"}, 
    {id:7, image: "https://www.datocms-assets.com/51952/1715247214-en.png"}, 
    {id:8, image: "https://www.datocms-assets.com/51952/1715224739-en.png"}, 
    {id:9, image: "https://www.datocms-assets.com/51952/1705285512-650x325_en.png"}, 
    {id:10, image: "https://www.datocms-assets.com/51952/1705399108-en.png"}, 
]

const handleGiveAway = (async(req, res)=>{
    try{
        res.status(200).json(contests)
    }
    catch(error){
        res.status(500).json({error: error_message[500]})
    }
})

module.exports = { handleGiveAway }