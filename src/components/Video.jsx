export default function Video() {
    return (
        <div className="col-md-4 mt-4">
            <div className="card">
                <div className="card-header">
                    <h4>Latest Video</h4>
                </div>
                <div className="card-body">
                    <iframe width="100%" src="https://www.youtube.com/embed/nIEwLdFeVuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}