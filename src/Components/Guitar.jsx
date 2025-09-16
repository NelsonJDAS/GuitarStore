const Guitar = ({addToCart, cart, nombre, img, descripcion, precio, id }) => {

        const object = {nombre : nombre, img : img, precio : precio, id : id}

    return (
        <div className="col-4 my-4 align-items-center">
            <div className="row animacion-guitarra px-2 py-2">
                <div className="col-4">
                    <img
                        className="img-fluid"
                        src={img}
                        alt="imagen guitarra"
                    />
                </div>
                <div className="col-8 align-items-center d-flex flex-column justify-content-center">
                    <h3 className="text-black fs-2 fw-bold text-uppercase text-center ">{nombre}</h3>
                    <p className="text-center fs-4">
                        {descripcion}
                    </p>
                    <p className="fw-black text-primary fs-1 text-center precio">${precio}</p>
                    <button type="button" className="btn btn-dark w-100 rounded-pill py-2 fs-4" onClick={() => addToCart(object)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Guitar;
