const Guitar = ({cart, nombre, img, descripcion, precio }) => {

        const object = {nombre : nombre, img : img, precio : precio}

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
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase text-center">{nombre}</h3>
                    <p className="text-center">
                        {descripcion}
                    </p>
                    <p className="fw-black text-primary fs-3 text-center precio">{precio}</p>
                    <button type="button" className="btn btn-dark w-100 rounded-pill" onClick={() => cart(prevCart =>  [...prevCart, object])}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Guitar;
