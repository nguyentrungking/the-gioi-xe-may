const data = [
  { id: 1,  ten: "Lọc dầu Honda 15410-KYJ-901",       gia: 45000,  danhMuc: "Động cơ",    xe: ["Wave Alpha", "Wave RSX", "Future"] },
  { id: 2,  ten: "Bugi NGK CR6HSA",                    gia: 25000,  danhMuc: "Động cơ",    xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X"] },
  { id: 3,  ten: "Phanh đĩa Brembo 220mm",             gia: 185000, danhMuc: "Phanh",      xe: ["Winner X", "Exciter", "CB150R"] },
  { id: 4,  ten: "Xích líp DID 428",                   gia: 145000, danhMuc: "Động cơ",    xe: ["Wave Alpha", "Future", "Exciter"] },
  { id: 5,  ten: "Lốp trước IRC NR-77 70/90-17",       gia: 320000, danhMuc: "Lốp / vành", xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X"] },
  { id: 6,  ten: "Lốp sau IRC NR-77 80/90-17",         gia: 380000, danhMuc: "Lốp / vành", xe: ["Wave Alpha", "Wave RSX", "Future", "Exciter"] },
  { id: 7,  ten: "Đèn pha Honda Wave RSX 12V",         gia: 115000, danhMuc: "Điện",       xe: ["Wave Alpha", "Wave RSX"] },
  { id: 8,  ten: "Ắc quy GS GTZ5S 12V-3.5Ah",         gia: 480000, danhMuc: "Điện",       xe: ["Winner X", "Exciter", "CB150R", "SH"] },
  { id: 9,  ten: "Má phanh Nissin Wave Alpha",         gia: 75000,  danhMuc: "Phanh",      xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X", "Exciter"] },
  { id: 10, ten: "Vành bánh Exciter 150 17\"",         gia: 550000, danhMuc: "Lốp / vành", xe: ["Exciter", "Winner X", "CB150R"] },
  { id: 11, ten: "Nhớt động cơ Motul 3000 4T",         gia: 85000,  danhMuc: "Động cơ",    xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X", "Exciter", "SH"] },
  { id: 12, ten: "Dây côn Exciter 150",                gia: 42000,  danhMuc: "Động cơ",    xe: ["Exciter", "Winner X", "CB150R"] },
  { id: 13, ten: "Tay phanh Winner X trái",            gia: 65000,  danhMuc: "Phanh",      xe: ["Wave Alpha", "Future", "Exciter", "Winner X"] },
  { id: 14, ten: "Gương chiếu hậu Honda SH",           gia: 52000,  danhMuc: "Khác",       xe: ["Wave Alpha", "Wave RSX", "Future", "SH", "Exciter"] },
  { id: 15, ten: "Còi điện Denso 12V",                 gia: 38000,  danhMuc: "Điện",       xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X", "Exciter", "SH", "CB150R"] },
  { id: 16, ten: "Bình xăng Future FI 3.7L",           gia: 520000, danhMuc: "Động cơ",    xe: ["Wave Alpha", "Future"] },
  { id: 17, ten: "Lọc gió Honda Wave RSX",             gia: 55000,  danhMuc: "Động cơ",    xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X"] },
  { id: 18, ten: "Dây điện Honda Wave Alpha",          gia: 105000, danhMuc: "Điện",       xe: ["Wave Alpha", "Wave RSX", "SH"] },
  { id: 19, ten: "Khóa xe Honda Future FI",            gia: 175000, danhMuc: "Khác",       xe: ["Future", "Exciter", "SH"] },
  { id: 20, ten: "Yên xe Wave Alpha đen",              gia: 310000, danhMuc: "Khác",       xe: ["Wave Alpha", "Wave RSX", "Future"] },
  { id: 21, ten: "Bình ắc quy Yuasa YTZ7S",           gia: 620000, danhMuc: "Điện",       xe: ["SH", "CB150R", "Exciter"] },
  { id: 22, ten: "Đèn hậu Honda Future LED",           gia: 92000,  danhMuc: "Điện",       xe: ["Wave Alpha", "Wave RSX", "Future", "Winner X"] },
  { id: 23, ten: "Chân chống Winner X",                gia: 125000, danhMuc: "Khác",       xe: ["Wave Alpha", "Future", "Exciter", "Winner X"] },
  { id: 24, ten: "Piston Wiseco CB150R 57.3mm",        gia: 380000, danhMuc: "Động cơ",    xe: ["Winner X", "CB150R", "Exciter"] },
  { id: 25, ten: "Ống xả Akrapovic Exciter 150",       gia: 850000, danhMuc: "Động cơ",    xe: ["Winner X", "Exciter", "CB150R"] },
  { id: 26, ten: "Bạc đạn bánh sau NSK 6301",         gia: 72000,  danhMuc: "Lốp / vành", xe: ["Wave Alpha", "Wave RSX", "Future", "Exciter", "Winner X"] },
  { id: 27, ten: "Nhíp sau Wave Alpha",                gia: 270000, danhMuc: "Khác",       xe: ["Wave Alpha", "Future", "Wave RSX"] },
];

const danhMucList = [...new Set(data.map(pt => pt.danhMuc))];
const xeList = [...new Set(data.flatMap(pt => pt.xe))].sort((a, b) => a.localeCompare(b, 'vi'));

const MOI_TRANG = 9;
let trangHienTai = 1;
let dataHienTai = data;

let tuKhoa = '';
let giaMax = 900000;
let danhMucChon = new Set(danhMucList);
let xeChon = new Set(xeList);
let sapXep = 'mac-dinh';

function renderDanhMucFilter() {
  const container = document.getElementById('danh-muc-filter');
  container.innerHTML = danhMucList.map(dm => `
    <div class="form-check">
      <input
        class="form-check-input danh-muc-cb"
        type="checkbox"
        value="${dm}"
        id="dm-${dm}"
        ${danhMucChon.has(dm) ? 'checked' : ''}
      />
      <label class="form-check-label" for="dm-${dm}">${dm}</label>
    </div>
  `).join('');

  document.querySelectorAll('.danh-muc-cb').forEach(cb => {
    cb.addEventListener('change', function () {
      if (this.checked) danhMucChon.add(this.value);
      else danhMucChon.delete(this.value);
      applyFilter();
    });
  });
}

function renderXeFilter() {
  const container = document.getElementById('xe-filter');
  container.innerHTML = xeList.map(xe => `
    <div class="form-check">
      <input
        class="form-check-input xe-cb"
        type="checkbox"
        value="${xe}"
        id="xe-${xe}"
        ${xeChon.has(xe) ? 'checked' : ''}
      />
      <label class="form-check-label" for="xe-${xe}">${xe}</label>
    </div>
  `).join('');

  document.querySelectorAll('.xe-cb').forEach(cb => {
    cb.addEventListener('change', function () {
      if (this.checked) xeChon.add(this.value);
      else xeChon.delete(this.value);
      applyFilter();
    });
  });
}

function applyFilter() {
  let result = data.filter(pt => {
    const khopTen = pt.ten.toLowerCase().includes(tuKhoa);
    const khopGia = pt.gia <= giaMax;
    const khopDanhMuc = danhMucChon.has(pt.danhMuc);
    // Sản phẩm hợp lệ nếu có ít nhất 1 xe trong danh sách được chọn
    const khopXe = pt.xe.some(x => xeChon.has(x));
    return khopTen && khopGia && khopDanhMuc && khopXe;
  });

  if (sapXep === 'gia-tang') {
    result.sort((a, b) => a.gia - b.gia);
  } else if (sapXep === 'gia-giam') {
    result.sort((a, b) => b.gia - a.gia);
  } else if (sapXep === 'ten-az') {
    result.sort((a, b) => a.ten.localeCompare(b.ten, 'vi'));
  }

  dataHienTai = result;
  trangHienTai = 1;
  render(dataHienTai, trangHienTai);
}

function render(list, trang) {
  const danhSach = document.getElementById('danh-sach');
  const khongCo  = document.getElementById('khong-co');

  if (list.length === 0) {
    danhSach.innerHTML = '';
    khongCo.classList.remove('d-none');
    renderPhanTrang(0, trang);
    return;
  }

  khongCo.classList.add('d-none');

  const start = (trang - 1) * MOI_TRANG;
  const slice = list.slice(start, start + MOI_TRANG);

  danhSach.innerHTML = slice.map(pt => {
    // Render tag xe tương thích
    const tagXe = pt.xe.map(x =>
      `<span class="badge bg-light text-secondary border me-1 mb-1">${x}</span>`
    ).join('');

    return `
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <span class="badge bg-secondary mb-2">${pt.danhMuc}</span>
            <h5 class="card-title">${pt.ten}</h5>
            <p class="card-text text-danger fw-bold">${pt.gia.toLocaleString('vi-VN')} đ</p>
            <div class="mt-2">
              <small class="text-muted d-block mb-1">Tương thích:</small>
              ${tagXe}
            </div>
          </div>
          <div class="card-footer">
            <a href="hoa-don.html?id=${pt.id}" class="btn btn-primary w-100">Đặt mua</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  renderPhanTrang(list.length, trang);
}

function renderPhanTrang(tongSanPham, trangDangChon) {
  const tongTrang = Math.ceil(tongSanPham / MOI_TRANG);
  const phanTrang = document.getElementById('phan-trang');

  if (tongTrang <= 1) {
    phanTrang.innerHTML = '';
    return;
  }

  let html = '';
  for (let i = 1; i <= tongTrang; i++) {
    html += `
      <li class="page-item ${i === trangDangChon ? 'active' : ''}">
        <button class="page-link" onclick="chuyenTrang(${i})">${i}</button>
      </li>
    `;
  }

  phanTrang.innerHTML = `
    <li class="page-item ${trangDangChon === 1 ? 'disabled' : ''}">
      <button class="page-link" onclick="chuyenTrang(${trangDangChon - 1})">«</button>
    </li>
    ${html}
    <li class="page-item ${trangDangChon === tongTrang ? 'disabled' : ''}">
      <button class="page-link" onclick="chuyenTrang(${trangDangChon + 1})">»</button>
    </li>
  `;
}

function chuyenTrang(trang) {
  const tongTrang = Math.ceil(dataHienTai.length / MOI_TRANG);
  if (trang < 1 || trang > tongTrang) return;
  trangHienTai = trang;
  render(dataHienTai, trangHienTai);
}

document.getElementById('search').addEventListener('input', function () {
  tuKhoa = this.value.toLowerCase().trim();
  applyFilter();
});

document.getElementById('range-gia').addEventListener('input', function () {
  giaMax = +this.value;
  document.getElementById('hien-thi-gia').textContent =
    giaMax.toLocaleString('vi-VN') + ' đ';
  applyFilter();
});

document.getElementById('sap-xep').addEventListener('change', function () {
  sapXep = this.value;
  applyFilter();
});

document.getElementById('xoa-loc').addEventListener('click', function () {
  tuKhoa = '';
  giaMax = 900000;
  danhMucChon = new Set(danhMucList);
  xeChon = new Set(xeList);
  sapXep = 'mac-dinh';

  document.getElementById('search').value = '';
  document.getElementById('range-gia').value = 900000;
  document.getElementById('hien-thi-gia').textContent = '900.000 đ';
  document.getElementById('sap-xep').value = 'mac-dinh';
  document.querySelectorAll('.danh-muc-cb').forEach(cb => cb.checked = true);
  document.querySelectorAll('.xe-cb').forEach(cb => cb.checked = true);

  applyFilter();
});

renderDanhMucFilter();
renderXeFilter();
render(data, trangHienTai);
