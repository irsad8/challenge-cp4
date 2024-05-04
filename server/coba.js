let array = ["makana", "minuman", "snack", "buku"]
class benda {
    constructor() {
        this.jumlah = 8,
            this.bentuk = "padat",
            this.harapan = "mati"
    }

    lipatkan() {
        return this.jumlah * 3
    }
}
let arr = array.map((i) => new benda)
let ini = new benda;
console.log(JSON.stringify(arr))
console.log(ini)
console.table(array)
console.table(arr[0] instanceof benda)