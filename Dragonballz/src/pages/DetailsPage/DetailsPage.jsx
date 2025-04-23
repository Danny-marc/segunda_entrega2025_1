import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CustomCard1 from '../../Components/CustomCard1/CustomCard1'

const DetailsPage = () => {
  const [informacion, setInformacion] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters/' + id)
      .then(response => response.json())
      .then(json => setInformacion(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);



  return (
    <>
      <main >

        <CustomCard1

          key={informacion.id}
          img={informacion.image}
          name={informacion.name}
          raza={informacion.race}
          genero={informacion.gender}
          poder={informacion.ki}
          totalpoder={informacion.maxKi}
          afiliacion={informacion.affiliation}

        />
 

      </main>
    </>
  )
}

export default DetailsPage