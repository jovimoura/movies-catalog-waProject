import { NextApiRequest, NextApiResponse } from 'next'
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const api = 'https://ghibliapi.herokuapp.com/films'
        const data = await fetch(`${api}`)
        const movies = await data.json()
        const newArr: any = []
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
        res.status(200).json(newArr)
      } catch (err) {
        console.log('error', err)
        res.status(400).json({ error: err })
      }
      break
    default:
      break
  }
}
