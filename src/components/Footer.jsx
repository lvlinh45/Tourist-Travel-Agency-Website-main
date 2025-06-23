import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Điều khoản</h4>
              <a className="btn btn-link" href="/">
                Chính sách bảo mật
              </a>
              <a className="btn btn-link" href="/">
                Điều khoản
              </a>
              <a className="btn btn-link" href="/">
                Câu hỏi thường gặp
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Liên hệ</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                02 Nguyễn Đình Chiểu, Thành phố Nha Trang
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                (+84) 865720906
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/ECOGUIDEDULICHXANH/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="assets/img/package-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}
