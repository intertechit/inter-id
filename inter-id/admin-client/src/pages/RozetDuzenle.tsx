import Layout from "../components/layout";

export default function RozetDuzenle() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          <div className="card m-b-30">
            <div className="card-header bg-white">
              <h5 className="card-title text-black mb-0">Rozet Düzenleme</h5>
            </div>
            <div className="card-body">
              <div className="form-row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label>Rozetin Adı</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Rozetin Adı"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label>Rozetin Sahibi Ekip</label>
                    <input type="text" className="form-control" id="ekip" />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label>Rozetin Adı</label>

                    <select
                      className="nx-select2-single form-control select2-hidden-accessible"
                      name="state"
                      data-select2-id="1"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option data-select2-id="3">Select</option>

                      <option value="CO" data-select2-id="1">
                        Common
                      </option>
                      <option value="UC" data-select2-id="2">
                        Uncommon
                      </option>
                      <option value="RA" data-select2-id="3">
                        Rare
                      </option>
                      <option value="UQ" data-select2-id="4">
                        Unique
                      </option>
                      <option value="LE" data-select2-id="5">
                        Legendary
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <label>Rozetin İkonu</label>

                    <div className="fallback">
                      <input name="file" type="file" multiple />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-12 col-lg-12 col-xl-12">
                  <div className="form-group">
                    <label>Rozetin Onaycıları</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      name="xp-maxlength-textarea"
                      id="oanycılar"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-12 col-lg-12 col-xl-12">
                  <div className="form-group">
                    <label>Rozetin Gereksinimleri</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      name="xp-maxlength-textarea"
                      id="gereklilikler"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="form-group">
                    <button type="button" className="btn btn-primary btn-lg">
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
