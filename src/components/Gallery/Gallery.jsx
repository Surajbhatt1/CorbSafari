import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Gallery</h2>
            <p className="lead">Glimpses of our amazing wildlife experiences</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 col-sm-6">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wildlife 1" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1533415648777-407b626eb0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wildlife 2" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1444464666168-49d633062d01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wildlife 3" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wildlife 4" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1504173010662-3eb195e3a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wildlife 5" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1452570053594-1d98587af03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Wildlife 6" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;