import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail(props) {
    const { title } = useParams(); 
    const { state } = useLocation();
    console.log(title);
    console.log(state);
    const PosterUrl = `https://image.tmdb.org/t/p/w1280/${state.poster_path}`;

    return (
        <div>
            <img src={PosterUrl}></img>
            <p>{title}</p>
        </div>
    )
}