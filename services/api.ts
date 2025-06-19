import axios from 'axios';

export const getMenu = (category: number) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://warung.houselab.my.id/api/menu/items/?category=${category}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const getCategory = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://warung.houselab.my.id/api/menu/categories`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};