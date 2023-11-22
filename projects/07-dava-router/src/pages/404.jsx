import { Link } from "../Link"

export default function Page404() {
    return (
        <>
            <div>
                <h1>this is NOT fine</h1>
                <iframe src="https://giphy.com/embed/QMHoU66sBXqqLqYvGO" width="480" height="270"  className="giphy-embed" allowFullScreen></iframe>     
            </div>
            <Link to={'/'}>Volver a la Home</Link>
        </>
    )
}