// import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <div className="container ">
            <div className="row" style={{ 'margin-top' : '40px' }}>

                <div className="input-group col-sm">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>

                <div className="input-group col-sm">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>
            </div>
        </div>
    )
}

export default Home;