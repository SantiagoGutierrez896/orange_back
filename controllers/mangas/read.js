import Manga from '../../models/Manga.js'

export default async(req,res)=>{
    try {
        let all = await Manga.find()
        if(all){
            return res.status(200).json({
                message:'done', 
                response: all
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:'error'
        })
    }
}