import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import CustomCard from '../../Components/CustomCard/CustomCard';



const HomePage = () => {
  const [informacion, setInformacion] = useState([])

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=58')
      .then(res => res.json())
      .then(data => setInformacion(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
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
            
            />
          </Link>
        ))
      }
    </main>
  )
}

export default HomePage
