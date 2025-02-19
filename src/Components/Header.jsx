import { useEffect, useState } from "react";

const Header = ({ estado, funcion }) => {
  const [userLoad, setUserLoad] = useState(false);

  useEffect(() => {
    setUserLoad(true)
  }, [])

  return (
    <div>
      <button onClick={() => {
        funcion(!estado)
      }}>click me</button>
      <header className="py-5 header align-content-center contenedor-header" style={{ height: estado ? "200px" : "700px" }}>
        <div className="container-xl">
          {
            estado ?
            <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div
                className="carrito"
              >
                <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />
                <div id="carrito" className="bg-white p-3">
                  <p className="text-center">El carrito esta vacio</p>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                        </td>
                        <td>SRV</td>
                        <td className="fw-bold">
                          $299
                        </td>
                        <td className="flex align-items-start gap-4">
                          <button
                            type="button"
                            className="btn btn-dark"
                          >
                            -
                          </button>
                          1
                          <button
                            type="button"
                            className="btn btn-dark"
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            type="button"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                  <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                </div>
              </div>
            </nav>
          </div>
              :
              <>
              <div className={`container w-50 ${userLoad ? "contenido-principal-header activo" : "contenido-principal-header"}`}>
                <div className="row">
                <a href="index.html">
                  <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
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
