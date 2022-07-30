import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ListMovies } from '../components/ListMovies'
import { Title } from '../components/Title'
import { Pagination } from '../components/Pagination'
import { Spinner } from '../components/Spinner'

const Home: NextPage = () => {
  const [page, setPage] = useState<any>(1)

  const arr: any[] = []
  const [data, setData] = useState([])

  useEffect(() => {
    const getMovies = async (page: number): Promise<void> => {
      const api = `http://localhost:3000/api/movies/${page}`
      console.log('aoi', api)
      const res = await fetch(`${api}`)
      const data = await res.json()
      arr.push(data)
      setData(data)
    }
    getMovies(page)
  }, [page])

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Movies Catalog</title>
        <link
          rel="icon"
          href="https://img.icons8.com/ios-glyphs/30/000000/movie--v1.png"
        />
      </Head>
      <div className="flex justify-center items-center flex-col">
        <Title firstWord="movies" secondWord="catalog" />
        {data !== [] ? (
          <div className="flex w-full">
            <div className="fixed">
              <Pagination fnc={setPage} />
            </div>
            <ListMovies movies={data} />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default Home
