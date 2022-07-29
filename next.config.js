/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://ghibliapi.herokuapp.com/films/',
      'image.tmdb.org',
      'www.themoviedb.org'
    ]
  }
}
