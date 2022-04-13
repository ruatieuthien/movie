const data = [];

const films = [
	{
		value: "IronMan",
        label: "Iron Man",
        image: 'https://afamilycdn.com/k:thumb_w/600/Tnk9vRlUgEMOa9xiFyoQdi0bvg9Omj/Image/2013/05/iron-man-3-poster-364ac/iron-man-3-cau-chuyen-dang-sau-bo-giap-sat-.jpg',
		canWatch: true,
		loaiGhe: 'THUONG',
		trangThai: false,
		khachDatGhe: null,
		price: 200000,
		timeShow: "25/03/2022 09:00PM"
	},
	{
		value: "SpiderMan",
        label: "Spider Man",
        image: 'https://static1.dienanh.net/upload/2015/03/11/spider-man-21928.jpg',
		canWatch: true,
		loaiGhe: 'THUONG',
		trangThai: false,
		khachDatGhe: null,
		price: 250000,
		timeShow: "20/11/2022 06:30PM"
	},
	{
		value: "Hulk",
        label: "Hulk",
        image: 'https://ss-images.saostar.vn/2020/03/02/7083861/5.jpg',
		canWatch: true,
		loaiGhe: 'THUONG',
		trangThai: false,
		khachDatGhe: null,
		price: 245000,
		timeShow: "14/02/2022 11:20AM"
	},
	{
		value: "TheGrimms",
        label: "The Grimms",
        image: 'https://m.media-amazon.com/images/I/81prLwwjPHL._SL1500_.jpg',
		canWatch: true,
		loaiGhe: 'THUONG',
		trangThai: false,
		khachDatGhe: null,
		price: 200000,
		timeShow: "14/02/2022 12:20AM"
	},
	{
		value: "BongĐe",
        label: "Bóng Đè",
        image: 'https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_b_ng_.jpg',
		canWatch: true,
		loaiGhe: 'THUONG',
		trangThai: false,
		khachDatGhe: null,
		price: 200000,
		timeShow: "25/04/2022 20:00PM"
	}
];

//khai báo giá trị 
var mySelect = document.getElementById("contentSelect");
const container = document.querySelector(".containers");
const count = document.getElementById('count');
const total = document.getElementById('total');
const text = document.querySelector('.text');

let ticketPrice = +contentSelect.value;
// update total and count
function updateCount() {
    const selectSeats =
        document.querySelectorAll('.cinema-seat.has-seat');
    const selectSeatsCount = selectSeats.length;
    count.innerText = selectSeatsCount;
    console.log(count);
    total.innerText = selectSeatsCount * ticketPrice;
}

//Movie chọn 
mySelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateCount();
});
//hàm click Seat
container.addEventListener('click', e => {
  if (e.target.classList.contains('cinema-seat') &&
     !e.target.classList.contains('no-seat')) {
    e.target.classList.toggle('has-seat');
  }
    updateCount();
});



films.forEach(go => {
    text.innerHTML = `Bạn đã mua <span id="count">0</span> ghế ngồi với giá <span id="total">0</span> 
            cho bộ phim 
            `
});
//Khởi tạo option

films.forEach(item => {
    contentSelect.innerHTML += `<option value="${item.id}">${item.label}
    </option>`;
});


for (let i = 1; i < 31; i++) {
	var form = {
		id: i,
		name: null,
		hasSeat: false,
		tickets: []
	};
	data.push(form);
}
//render ghế ngồi 
function renderSeat() {
    container.innerHTML = "";
    for (var i = 0; i < data.length; i++){
        const item = data[i];
        const row = String.fromCharCode(65 + (item.id - 1) / 10);
        let HTML = "";
        if (item.hasSeat) {
            HTML =
                '<div class="cinema-seat has-seat"' +
                "id=" + item.id + "><h4>" + row + item.id +
                "</h4></div>";
        } else {
            HTML =
                '<div class="cinema-seat no-seat"' +
                " id=" + item.id + "><h4>" + row + item.id +
                "</h4></div>";
        }
        container.innerHTML += HTML;
    }
    
}
renderSeat();

container.addEventListener('click', e => {
    if (e.target.classList.contains('cinema-seat') &&
        !e.target.classList.contains('no-seat')) {
        e.target.classList.toggle('has-seat');
    } 
    updateCount();
});