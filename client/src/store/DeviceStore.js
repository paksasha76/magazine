import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
         this._devices = [
            {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://twigo.ru/center/iblock/900/lkuzbkxywkoydphgw2jya5p8q816351x/iphone_16_128_gb_ultramarin.jpg'},
            {id: 2, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://twigo.ru/center/iblock/900/lkuzbkxywkoydphgw2jya5p8q816351x/iphone_16_128_gb_ultramarin.jpg'},
            {id: 3, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://twigo.ru/center/iblock/900/lkuzbkxywkoydphgw2jya5p8q816351x/iphone_16_128_gb_ultramarin.jpg'},
            {id: 4, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: 'https://twigo.ru/center/iblock/900/lkuzbkxywkoydphgw2jya5p8q816351x/iphone_16_128_gb_ultramarin.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    getBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
    this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
     get selectedBrand() {
        return this._selectedBrand
    }
}