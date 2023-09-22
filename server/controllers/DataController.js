'use strict'

class DataController {
    static async fetchData(req, res) {
        const page = `page=${req.query?.page || 1}`
        const description = req.query?.description ? `description=${req.query.description}` : null
        const location = req.query?.location ? `location=${req.query.location}` : null
        const fullTime = req.query?.full_time ? `full_time=${req.query.full_time}` : null

        const params = [page, description, location, fullTime].filter((item) => {
            return !!item
        })
        try {
            const response = await fetch(`https://dev6.dansmultipro.com/api/recruitment/positions.json?${params.join('&')}`)
            const data = await response.json()
            res.status(200).json(data)
        } catch (error) {
            console.log('ini error');
        }
    }

    static async fetchDetail(req,res) {
        try {
            const response = await fetch(`https://dev6.dansmultipro.com/api/recruitment/positions/${req.params.id}`)
            const data = await response.json()
            res.status(200).json(data)
        } catch (error) {
            console.log('ini error');
        }
    }

}

module.exports = DataController