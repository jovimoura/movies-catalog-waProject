import { NextApiRequest, NextApiResponse } from 'next'
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req
  const { MovieID } = req.query

  switch (method) {
    case 'GET':
      try {
        const api = `${process.env.DB_URL}/films/?limit=50`
        const data = await fetch(`${api}`)
        const movies = await data.json()
        const newArr: any = []
        let filterArr
        movies.filter((item: any) => {
          let obj = {
            id: item.id,
            title: item.title,
            movie_banner: item.movie_banner,
            description: item.description,
            director: item.director,
            producer: item.producer
          }
          newArr.push(obj)
        })
        switch (MovieID) {
          case '1':
            filterArr = newArr.slice(0, 10)
            res.status(200).json(filterArr)
            break
          case '2':
            filterArr = newArr.slice(10, 19)
            res.status(200).json(filterArr)
            break
          case '3':
            filterArr = newArr.slice(19, 29)
            res.status(200).json(filterArr)
            break
          case '4':
            filterArr = newArr.slice(29, 39)
            res.status(200).json(filterArr)
            break
          case '5':
            filterArr = newArr.slice(39, 49)
            res.status(200).json(filterArr)
            break
          case 'all':
            res.status(200).json(newArr)
            break
          default:
            break
        }
      } catch (error) {
        console.log('error', error)
        res.status(400).json({ error: error })
      }
      break

    default:
      break
  }
}
