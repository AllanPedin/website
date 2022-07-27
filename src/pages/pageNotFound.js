import pageNotFound from "../pageNotFound.png"

export default function PageNotFound() {
    return (
        <div>
             <h1>Unfortunately we couldnt find what you were looking for </h1>
            <img src = {pageNotFound} alt = "SadFace"></img>
        </div>
    )
}