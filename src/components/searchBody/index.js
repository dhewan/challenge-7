import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { importCar, carsFilter } from "../../slicer";
import Card from "../card"

export default function SearchBody() {
  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
      .then((res) => {
        dispatch(importCar(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const initialValue = {
    driver: "",
    date: "",
    time: "",
    capacity: 0,
  };

  const [inputs, setInputs] = useState(initialValue);

  const handleSubmit = () => {
    if(JSON.stringify(inputs) === JSON.stringify(initialValue)) {
      getData();
    } else {
      dispatch(carsFilter(inputs));
    }
  };

  const handleChange = (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
  };
  const cars = useSelector((state) => state.sliceReducer.data);
    return (
<div>
<div class="header d-flex ">
        <div class="header-kiri">
            <h1 class="fs-2 fw-bold lh-base mt-header-kiri">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p >Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </div>
        <div class="header-kanan">
            <img src="assets/car.png" alt=''/>
        </div>
        
    </div>
    <div class="search-box">
      <div class="search-content">
        <div class="dropdown">
          <p>Pilih Tipe Driver</p>
          <select onChange={handleChange} class="form-select dropbtn" name="driver" placeholder="Pilih Tanggal ">
            <option selected>Pilih Tipe Driver</option>
            <option value="true">Dengan Sopir</option>
            <option value="false">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>
        <div class="dropdown">
          <p>Tanggal</p>
          <input type="date" class="dropbtn" id="input2" onChange={handleChange}  name="date"placeholder="Pilih Tanggal " value={inputs.date}/>
        </div>
        <div class="dropdown">
          <p>Waktu Jemput</p>
          <select id="input3" class="form-select dropbtn" onChange={handleChange} name="time" value={inputs.time} placeholder="Pilih waktu ">
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

          <select class="dropbtn" onChange={handleChange} name="capacity" value={inputs.capacity}>
            <option value="0">Jumlah Penumpang</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      <button type="submit" class="button-search" onClick={handleSubmit}>Cari Mobil</button>
      </div>
     
    </div>

    <div class="result-container">
      <div id="card-car" class="result">
      {
                   cars.map((item, index) => <Card key={index} product={item} />)
               }
      </div>
    </div>
</div>
    )
    }