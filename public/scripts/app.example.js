class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    this.search = document.getElementById("search");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    console.log("ini init cars")

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.search.addEventListener("click", function () {
      let driver = document.getElementById("driver").value;
      let amount = document.getElementById("amount").value;

      app.run(driver, amount)
    })
  }

  run = (driver, amount) => {
    app.clear()
    let drive = driver == 1 ? true : false
    let result = Car.list.filter((i => i.available === drive)).filter((i => i.capacity >= amount))
    if (result) {
      result.forEach((car) => {
        const node = document.createElement("div");
        node.classList.add('col-4', 'mb-4')
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    } else {
      const node = document.createElement("div");
      node.innerHTML = "tidak ada mobil yang sesuai"
      this.carContainerElement.appendChild(node);
    }
  };

  async load() {
    console.log("ini load cars")
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    console.log("ini clear cars")
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
