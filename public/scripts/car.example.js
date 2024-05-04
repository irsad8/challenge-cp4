class Car {
  static list = [];

  static init(cars) {
    // let car = cars.filter(i => i.available == true)
    this.list = cars.map((i) => new this(i));
    // console.log(cars)
    // console.log(this.list)
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card">
          <div style="background-image:url(${this.image}); background-size: cover; background-position: center; width: 100%; height: 300px; object-fit: cover;"
              class="card-img-top"></div>
          <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">${this.manufacture} / ${this.type}</h6>
              <h5 class="card-title">Rp.${Number(this.rentPerDay).toLocaleString('id-ID')}/Hari</h5>
              <p class="card-text">${this.description}</p>
              <ul class="list-unstyled">
                  <li class="py-1"><i class="bi bi-people"></i> ${this.capacity} orang</li>
                  <li class="py-1"><i class="bi bi-gear"></i> ${this.transmission}</li>
                  <li class="py-1"><i class="bi bi-calendar4"></i> tahun ${this.year}</li>
              </ul>
              <div class="d-grid">
                  <button class="btn btn-primary" type="button">pilih mobil</button>
              </div>
          </div>
      </div>
    `;
  }
}
