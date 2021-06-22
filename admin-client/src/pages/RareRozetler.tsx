import Layout from "../components/layout";
import img1 from "../images/sample-icon.png";

export default function RareRozetler() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          <div className="card m-b-30">
            <div className="card-header bg-white">
              <h5 className="card-title text-black mb-0">Rare Rozetler</h5>
            </div>
            <div className="card-body">
              <div className="card-body">
                <div className="table-responsive m-b-30">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Rozetin Adı</th>
                        <th scope="col">Rozetin İkonu</th>
                        <th scope="col">Rozetin Tipi</th>
                        <th scope="col">Rozetin Onaycıları</th>
                        <th scope="col">Rozetin Gereksinimleri</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Fighter</td>
                        <td>
                          <img src={img1} height="20" alt="" />
                        </td>
                        <td>Rare</td>
                        <td>Erbuğ Kaya, Hasan Taşdelen</td>
                        <td>
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                          </ul>
                        </td>
                        <td>
                          <div
                            className="btn-group btn-group-sm"
                            style={{ float: "none" }}
                          >
                            <button
                              type="button"
                              className="tabledit-edit-button btn btn-sm btn-info"
                              style={{ float: "none", margin: "5px" }}
                            >
                              <span className="ti-pencil"></span>
                            </button>
                            <button
                              type="button"
                              className="tabledit-delete-button btn btn-sm btn-info"
                              style={{ float: "none", margin: "5px" }}
                            >
                              <span className="ti-trash"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Ranger</td>
                        <td>
                          <img src={img1} height="20" alt="" />
                        </td>
                        <td>Rare</td>
                        <td>Erbuğ Kaya, Hasan Taşdelen</td>
                        <td>
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                          </ul>
                        </td>
                        <td>
                          <div
                            className="btn-group btn-group-sm"
                            style={{ float: "none" }}
                          >
                            <button
                              type="button"
                              className="tabledit-edit-button btn btn-sm btn-info"
                              style={{ float: "none", margin: "5px" }}
                            >
                              <span className="ti-pencil"></span>
                            </button>
                            <button
                              type="button"
                              className="tabledit-delete-button btn btn-sm btn-info"
                              style={{ float: "none", margin: "5px" }}
                            >
                              <span className="ti-trash"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Paladin</td>
                        <td>
                          <img src={img1} height="20" alt="" />
                        </td>
                        <td>Rare</td>
                        <td>Erbuğ Kaya, Hasan Taşdelen</td>
                        <td>
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                          </ul>
                        </td>
                        <td>
                          <div
                            className="btn-group btn-group-sm"
                            style={{ float: "none" }}
                          >
                            <button
                              type="button"
                              className="tabledit-edit-button btn btn-sm btn-info"
                              style={{ float: "none", margin: "5px" }}
                            >
                              <span className="ti-pencil"></span>
                            </button>
                            <button
                              type="button"
                              className="tabledit-delete-button btn btn-sm btn-info"
                              style={{ float: "none", margin: "5px" }}
                            >
                              <span className="ti-trash"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
