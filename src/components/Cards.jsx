import CardBody from "./CardBody"

export default function Cards(props) {
    return (
        <div>
            <div className="card col-md-5 mt-4">
                <div className="card-header">{props.header}</div>
                <CardBody body={props.body} />
            </div>
        </div>
    )
}