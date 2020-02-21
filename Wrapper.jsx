import react from 'react';
import Title from './Title'
import Photo from './Photo'
import ichrak from "./photo/ichrak.pnj"

function Wrapper(props){
    return(
        <Photo src={ichrak} />
        <Title style={{
            color:'red'

        }}>Ichrak Ben Asker</Title>
        <Title small>Environmental Engineer</Title>
        </Wrapper>
    )
}
export default Wrapper;