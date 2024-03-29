import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/cards/Card'
import CardSkeleton from '../Components/cards/CardSkeleton'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistsState } = useContext(ContextGlobal)
  return (
    <>
      <h1 >Profesionales Sobresalientes</h1>
      <div className='card-grid'>
        {dentistsState.dentistsList.length === 0 ? (
          <>
            {[...Array(10)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        ) : (
          dentistsState.dentistsList.map(dentist => (
            <Card key={dentist.id} {...dentist} />
          ))
        )}
      </div>
    </>
  )
}

export default Home