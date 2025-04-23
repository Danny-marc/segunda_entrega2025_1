import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CustomCard from '../../Components/CustomCard/CustomCard';


const FilterPage = () => {
  let { genero } = useParams()
  const [informacion, setInformacion] = useState([])

  useEffect(() => {
    const fetchInformacion = async () => {
      fetch('https://dragonball-api.com/api/characters?limit=58')
        .then(response => response.json())
        .then(json => {
          const filtered = json.items.filter((item) => item.gender === genero)
          setInformacion(filtered)
        })
        .catch(error => console.error('Error fetching data:', error))
    }
    fetchInformacion()
  }, [genero])


  return (
    <main>
      {
        informacion.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <CustomCard
              key={item.id}
              img={item.image}
              name={item.name}
              raza={item.race}
              genero={item.gender}
              poder={item.ki}
              totalpoder={item.maxKi}
              afiliacion={item.affiliation}
            />
          </Link>
        ))
      }
    </main>
  )
}

export default FilterPage
