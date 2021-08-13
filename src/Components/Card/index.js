import 'Components/Card/style.css'

const Card = ({City}) => {

    

    return (
        <div>
            <h2>{City?.name}</h2>
            <img className='principal_img' src='https://upload.wikimedia.org/wikipedia/commons/2/24/Bogot%C3%A1_Colpatria_Night.jpg' alt='Bogota'/>
        </div>
    )
}

export default Card;