import { useEffect, useState } from "react";

const Header = ({ estado, funcion, cart, remove, disminuir, incrementar, vaciar, isEmpty,cartTotal  }) => {
  const [userLoad, setUserLoad] = useState(false);

  useEffect(() => {
    setUserLoad(true)
  }, [])

  return (
    <div>
      <header className="py-5 header align-content-center contenedor-header " style={{ height: estado ? "200px" : window.innerHeight }}>
        <div className="container-xl">
          {
            estado ?
              <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                  <a href="index.html">
                    <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                  </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                  <div className="d-flex">

                    <div
                      className="carrito"
                    >
                      <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                      <div id="carrito" className="bg-white p-3">
                        {isEmpty ? <p className="text-center">El carrito esta vacio</p> :
                          <>
                            <table className="w-100 table">
                              <thead>
                                <tr>
                                  <th className="text-center">Imagen</th>
                                  <th className="text-center">Nombre</th>
                                  <th className="text-center">Precio</th>
                                  <th className="text-center">Cantidad</th>
                                  <th className="text-center"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  cart.map(elem => {
                                    return (
                                      <tr>
                                        <td>
                                          <img className="img-fluid" src={elem.img} alt="imagen guitarra" />
                                        </td>
                                        <td className="align-content-center">{elem.nombre}</td>
                                        <td className="fw-bold align-content-center">
                                          {elem.precio}
                                        </td>
                                        <td className="flex align-items-start align-content-center gap-4">
                                          <button
                                            type="button"
                                            className="btn btn-dark"
                                            onClick={() => disminuir(elem.id)}
                                          >
                                            -
                                          </button>
                                          {elem.quantity}
                                          <button
                                            type="button"
                                            className="btn btn-dark"
                                            onClick={() => incrementar(elem.id)}
                                          >
                                            +
                                          </button>
                                        </td>
                                        <td className="align-content-center">
                                          <button
                                            className="btn btn-danger"
                                            type="button"
                                            onClick={() => remove(elem.id)}
                                          >
                                            X
                                          </button>
                                        </td>
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </table>
                          <p className="text-end">Total pagar:<span className="fw-bold">{cartTotal.toFixed(2)}</span></p>
                          <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => vaciar()}>Vaciar Carrito</button>
                          </>}
                      </div>
                    </div>
                    <div>
                      <span>1</span>
                    </div>

                  </div>
                </nav>
              </div>
              :
              <>
                <div className={`container w-75 ${userLoad ? "animacion activo" : "animacion"}`}>
                  <div className="row">
                    <a href="index.html">
                      <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="text-center text-warning pt-5 fw-bold fs-6">
                        Explora una variedad de modelos eléctricos,
                        acústicos y clásicos, cada uno con su propio
                        estilo y sonido. Ya seas principiante o profesional,
                        aquí encontrarás la guitarra que se adapte a tus necesidades.
                        ¡Haz clic y descubre tu próxima guitarra en Guitarla! 🎸
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center pt-5" onClick={() => {
                      funcion(!estado)
                    }}>
                      <button className="btn-inicio w-50">Ver mas</button>
                    </div>
                  </div>
                </div>
              </>
          }

        </div>
      </header>
    </div>
  );
};

export default Header;
