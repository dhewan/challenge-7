import React from 'react'

export default function SearchBody() {
    return (
<div>
<div class="header d-flex ">
        <div class="header-kiri">
            <h1 class="fs-2 fw-bold lh-base mt-header-kiri">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p >Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </div>
        <div class="header-kanan">
            <img src="assets/car.png" />
        </div>
        
    </div>
    <div class="search-box">
      <div class="search-content">
        <div class="dropdown">
          <p>Pilih Tipe Driver</p>
          <select class="form-select dropbtn" id="input1" aria-label="Default select example">
            <option selected>Pilih Tipe Driver</option>
            <option value="true">Dengan Sopir</option>
            <option value="false">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>
        <div class="dropdown">
          <p>Tanggal</p>
          <input type="date" class="dropbtn" id="input2" placeholder="Pilih Tanggal "/>
        </div>
        <div class="dropdown">
          <p>Waktu Jemput</p>
          <select id="input3" class="form-select dropbtn" aria-label="Default select example">
            <option selected>Pilih Waktu</option>
            <option value="8">08.00 <p>WIB</p></option>
            <option value="9">09.00 <p>WIB</p></option>
            <option value="10">10.00 <p>WIB</p></option>
            <option value="11">11.00 <p>WIB</p></option>
            <option value="12">12.00 <p>WIB</p></option>
            <option value="12">13.00 <p>WIB</p></option>
            <option value="12">14.00 <p>WIB</p></option>
            <option value="12">15.00 <p>WIB</p></option>
          </select>
          
          
          
          
          
        </div>
        <div class="dropdown">
          <p>Jumlah Penumpang(Opsional)</p>
          {/* <!-- <input class="dropbtn" id="input4" type="number" placeholder="Jumlah Penumpang"> --> */}
          <select class="dropbtn" name="" id="input4">
            <option value="0">Jumlah Penumpang</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      <button type="submit" class="button-search" id="submit">Cari Mobil</button>
      </div>
     
    </div>

    <div class="result-container">
      <div id="card-car" class="result">
      </div>
    </div>
</div>
    )
    }