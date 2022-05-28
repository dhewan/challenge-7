import React from 'react'
import { useNavigate } from "react-router-dom";

export default function HomeBody() {
  let navigate = useNavigate();

  function searchPage() {
    navigate('/search');
  }
    return (
        <div>
            <head>
              <link rel="stylesheet" href="css/style-search.css"/>
              </head>
             <div class="header  ">
        <div class="header-kiri">
            <h1 class=" fw-bold lh-base mt-header-kiri1">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p >Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button onClick={searchPage} type="button" >Mulai Sewa Mobil</button>
        </div>
        <div class="header-kanan">
            <img src="assets/car.png" alt=''/>
        </div>
        
    </div>
    
    <div class="body1" id="os">
        <div class="body1-kiri">
            <img src="assets/services.png" alt=""/>
        </div>
        <div class=" body1-kanan">
            <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p class="typotext">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <p><img src="assets/ctg.png" alt=""/>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            <p><img src="assets/ctg.png" alt=""/>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            <p><img src="assets/ctg.png" alt=""/>Sewa Mobil Jangka Panjang Bulanan</p>
            <p><img src="assets/ctg.png" alt=""/>Gratis Antar - Jemput Mobil di Bandara</p>
            <p><img src="assets/ctg.png" alt=""/>Layanan Airport Transfer / Drop In Out</p>
        </div>
    </div>
    <div class="body2" id="wu">
        <h3>Why Us?</h3>
        <p class="pt-2">Mengapa harus pilih Binar Car Rental?</p>
        <div class="why pt-4">
            <div class="card-item ">
                <img src="assets/icon_1.png" alt='' class="icon"/>
                <h5>Mobil Lengkap</h5>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
            <div class="card-item ">
                <img src="assets/icon_2.png" alt='' class="icon"/>
                <h5>Harga Murah</h5>
                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
            <div class="card-item ">
                <img src="assets/icon_3.png" alt='' class="icon"/>
                <h5>Layanan 24 Jam</h5>
                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
            <div class="card-item ">
                <img src="assets/icon_4.png" alt='' class="icon"/>
                <h5>Sopir Profesional</h5>
                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
        </div>
    </div>

    <div class="body3 " id="t">
        <h3 class="text-center">Testimonial</h3>
        <p  class="review-text text-center mt-3">Berbagai review positif dari para pelanggan kami</p>
        <div id="testimonial" class="carousel slide show-neighbors" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="item__third">
                <div class="card mb-3 card-testimonial ">
                  <div class="testi-kiri">
                      <img src="assets/photo1.png" class="img-fluid rounded-start user-image" alt="..."/>
                  </div>
                      <div class="testi-kanan ">
                        <img src="assets/Rate.png" alt=""/>
                        <p class="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod”</p>
                        <p class="fw-bold ">John Dee 32, Bromo</p>
                      </div>
                  

                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="item__third">
                <div class="card mb-3 card-testimonial ">
                   <div class="testi-kiri">
                     <img src="assets/photo2.png"  alt="..."/>
                   </div>
                    <div class="testi-kanan ">
                      <img src="assets/Rate.png" alt=""/>
                      <p class="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod”</p>
                      <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                     
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="item__third">
                <div class="card mb-3 card-testimonial ">
                    <div class="testi-kiri">
                      <img src="assets/services.png" class="img-fluid rounded-start user-image" alt="..."/>
                    </div>
                    <div class="testi-kanan ">
                        <img src="assets/Rate.png" alt=""/>
                        <p class="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod”</p>
                        <p class=" fw-bold ">John Dee 32, Bromo</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
 
            <div class="ctrl-carousel ">
              <button class="carousel-control circle" type="button" data-bs-target="#testimonial" data-bs-slide="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </button>
              <button class="carousel-control circle" type="button" data-bs-target="#testimonial" data-bs-slide="next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
        </div>
    </div>
    
    
    <div class="body4  ">
        <div class="banner ">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button  onClick={searchPage}>Mulai Sewa Mobil</button>
        </div>
    </div>

    <div class="body5" id="faq">
        <div class="body5-kiri">
            <h3>Frequently Asked Question</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="body5-kanan">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
              </div>
        </div>
    </div>
    
        </div>
    )
}