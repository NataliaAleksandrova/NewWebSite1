const {Router} = requare('express')
const router = Router()

router.post('/regicter', async(req, res) => {
    try{
        const{email, password} = req.body
    } catch(e){
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.post('/login', async(req, res) => {
    try{
        const{email, password} = req.body
    } catch(e){
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})


module.exports = router