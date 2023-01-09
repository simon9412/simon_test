let kuaizhao = [
    {
        "canisterId": "slzze-ciaaa-aaaah-aa7ra-cai",
        "floorPrice": 450000000,
        "items": 1604,
        "owners": 903,
        "volume": 321753000000,
        "rate": -18.0327868852459,
        "logo": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1655436026603-4collection_logo2_mora.png",
        "featured": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1655436026603-6market_cover_mora.png",
        "name": "Mora Planet"
    },
    {
        "canisterId": "m7vrl-xaaaa-aaaap-aah3a-cai",
        "floorPrice": 26000000,
        "items": 20000,
        "owners": 236,
        "volume": 1262000000,
        "rate": -67.08860759493672,
        "logo": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1656648148364-6Collection Logo - Diksha Yadav.png",
        "featured": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1656648148364-8Home image - Diksha Yadav.png",
        "name": "Gob-Gob"
    },]

let now = [
    {
        "canisterId": "slzze-ciaaa-aaaah-aa7ra-cai",
        "floorPrice": 450000000,
        "items": 1604,
        "owners": 903,
        "volume": 321753000000,
        "rate": -18.0327868852459,
        "logo": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1655436026603-4collection_logo2_mora.png",
        "featured": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1655436026603-6market_cover_mora.png",
        "name": "Mora Planet"
    },
    {
        "canisterId": "m7vrl-xaaaa-aaaap-aah3a-cai",
        "floorPrice": 26000000,
        "items": 20000,
        "owners": 236,
        "volume": 1262000000,
        "rate": -67.08860759493672,
        "logo": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1656648148364-6Collection Logo - Diksha Yadav.png",
        "featured": "https://storageapi.fleek.co/486b5a47-9186-4ffa-96ca-13fc31e44ce5-bucket/BatchMint/rc-upload-1656648148364-8Home image - Diksha Yadav.png",
        "name": "Gob-Gob1"
    },]


// const filterArr = kuaizhao.filter((item, index) => {
//     if (
//         item.canisterId !== now[index].canisterId ||
//         item.floorPrice !== now[index].floorPrice ||
//         item.items !== now[index].items ||
//         item.owners !== now[index].owners ||
//         item.volume !== now[index].volume ||
//         item.rate !== now[index].rate ||
//         item.logo !== now[index].logo ||
//         item.featured !== now[index].featured ||
//         item.name !== now[index].name
//     ) {
//         return item;
//     }
// });
// console.log(filterArr);
// console.log(filterArr.length);

const filterArr = kuaizhao.filter((item, index) => {
    if (
        item.canisterId !== now[index].canisterId ||
        item.floorPrice !== now[index].floorPrice ||
        item.items !== now[index].items ||
        item.owners !== now[index].owners ||
        item.volume !== now[index].volume ||
        item.rate !== now[index].rate ||
        item.logo !== now[index].logo ||
        item.featured !== now[index].featured ||
        item.name !== now[index].name
    ) {
        return item;
    }
});
console.log(filterArr);
console.log(filterArr.length);

