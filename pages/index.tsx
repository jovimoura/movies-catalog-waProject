import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ListMovies } from '../components/ListMovies'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import useDebounce from '../hooks/useDebounce'
import { Pagination } from '../components/Pagination'
import { Spinner } from '../components/Spinner'

export async function getServerSideProps() {
  const api = 'http://localhost:3000/api/getMovies'
  const res = await fetch(`${api}`)
  const data = await res.json()

  return {
    props: {
      movies: data
    }
  }
}

const Home: NextPage = ({ movies }: any) => {
  const [movieName, setMovieName] = useState('')
  const debouncedMovieName = useDebounce(movieName, 500)
  const [page, setPage] = useState(1)

  const arr: any[] = []
  const [data, setData] = useState([])

  useEffect(() => {
    const getMovies = async (page: number): Promise<void> => {
      const api = `http://localhost:3000/api/movies/${page}`
      const res = await fetch(`${api}`)
      const data = await res.json()
      arr.push(data)
      setData(data)
    }
    getMovies(page)
  }, [page])

  console.log('arr', arr)
  console.log('data', data)

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
        <Title />
        <Input
          placeholder="search your movie..."
          icon="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          value={movieName}
          onChange={(e: any) => setMovieName(e.target.value)}
        />
        {data !== [] ? (
          <div className="flex">
            <ListMovies movies={data} movieName={debouncedMovieName} />
            <div className="fixed">
              <Pagination fnc={setPage} />
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default Home
