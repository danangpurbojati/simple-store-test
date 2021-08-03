import beras from '../../assets/images/beras.jpg';
import garam from '../../assets/images/garam.jpg';
import gula from '../../assets/images/gula.jpg';
import minyak from '../../assets/images/minyak.jpg';
import susu from '../../assets/images/susu.jpg';
import telur from '../../assets/images/telur.jpg';

const products = [
    {
        id: '1',
        name: 'beras pandan wangi',
        description: 'beras cap bmw dengan berat 10 kg',
        price: 125000,
        stock: 100,
        image: beras
    },
    {
        id: '2',
        name: 'garam dolphin',
        description: 'garam konsumsi beryodium 500 gr',
        price: 9000,
        stock: 100,
        image: garam
    },
    {
        id: '3',
        name: 'gulaku',
        description: 'gula dari tebu segar terbaik 1 kg',
        price: 16000,
        stock: 100,
        image: gula
    },
    {
        id: '4',
        name: 'tropical minyak goreng',
        description: 'minyak goreng kualitas terbaik 1000 ml',
        price: 16500,
        stock: 100,
        image: minyak
    },
    {
        id: '5',
        name: 'susu dancow',
        description: 'susu bubuk dancow 400 gr',
        price: 62000,
        stock: 100,
        image: susu
    },
    {
        id: '6',
        name: 'telur ayam negeri',
        description: 'telur ayam negeri 1 pack 10 butir telur',
        price: 26300,
        stock: 100,
        image: telur
    },
];

export default products;