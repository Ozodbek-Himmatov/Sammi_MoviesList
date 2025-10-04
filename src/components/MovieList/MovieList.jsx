import './MovieList.css'
import MovieListItem from '../MovieListItem/MovieListItem'
import { useEffect, useRef, useState } from 'react'

const MovieList = ({ data, onDelete, toggle }) => {
  const ref = useRef(null)
  const [maxHeight, setMaxHeight] = useState('auto')

  useEffect(() => {
    if (ref.current && data.length >= 4) {
      const firstItem = ref.current.querySelector('li')
      if (firstItem) {
        const itemHeight = firstItem.offsetHeight
        setMaxHeight(itemHeight * 4)
      }
    } else {
      setMaxHeight('auto')
    }
  }, [data])

  return (
    <ul
      ref={ref}
      className={`movies-list ${data.length <= 0 && 'p-4'}`}
      style={{
        maxHeight: maxHeight,
        overflowY: data.length > 4 ? 'auto' : 'visible',
      }}
    >
      {data.map((x) => (
        <MovieListItem
          key={x.id}
          {...x}
          onDelete={() => onDelete(x.id)}
          toggle={(e) =>
            toggle(x.id, e.currentTarget.getAttribute('data-toggle'))
          }
        />
      ))}
    </ul>
  )
}

export default MovieList
