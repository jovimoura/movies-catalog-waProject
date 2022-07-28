import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ListMovies } from '../components/ListMovies'
import { Title } from '../components/Title'
import { Input } from '../components/Input'

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
        />
        <ListMovies movies={movies} />
      </div>
    </div>
  )
}

export default Home
