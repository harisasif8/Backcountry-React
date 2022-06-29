import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios'


// const products = [
//     {
//         "features": [
//             {
//                 "storecredits": "0.0"
//             }
//         ],
//         "isExclusive": false,
//         "customerReviews": {
//             "average": 5,
//             "count": 3
//         },
//         "notes": [],
//         "skus": [
//             {
//                 "image": {
//                     "url": "/images/items/medium/DMM/DMM0025/OF.jpg"
//                 },
//                 "discountPercent": 25,
//                 "color": {
//                     "name": "Offset",
//                     "family": "gray"
//                 },
//                 "salePrice": 56.21,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 114,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": null
//                 },
//                 "isRetail": true,
//                 "onSale": true,
//                 "id": "DMM0025-OF-NOS711",
//                 "isCloseout": false,
//                 "listPrice": 74.95
//             }
//         ],
//         "isGearheadPick": false,
//         "id": "DMM0025",
//         "availabilityStatus": "InStock",
//         "title": "Alloy Offset Set #7-11",
//         "activationDate": "2008-09-05 06:00:00",
//         "brand": {
//             "name": "DMM"
//         },
//         "url": "/dmm-offset-set-7-11",
//         "detailImages": [],
//         "breadcrumbs": [],
//         "bikeModel": null,
//         "geometryChartType": "",
//         "bottomLine": null,
//         "variationsOnSale": 1,
//         "totalVariations": 1,
//         "minListPrice": 74.95,
//         "maxListPrice": 74.95,
//         "minSalePrice": 56.21,
//         "maxSalePrice": 56.21,
//         "minDiscountPercent": 25,
//         "maxDiscountPercent": 25,
//         "isCombo": false,
//         "configurationOptions": null,
//         "isCustomizable": false,
//         "fastCash": 0,
//         "shouldShowFindYourSize": false,
//         "isGiftCert": false,
//         "isGiftCardOrGiftCertificate": false,
//         "legal": [],
//         "warningMessages": [],
//         "isBikeBuilder": false,
//         "isBike": false,
//         "detailImagesByColor": {},
//         "defaultDetailImagesColor": "",
//         "productMainImage": {
//             "id": "OF",
//             "name": "Offset",
//             "mediumImg": "/images/items/medium/DMM/DMM0025/OF.jpg",
//             "twelveHundredImg": "/images/items/1200/DMM/DMM0025/OF.jpg",
//             "nineHundredImg": "/images/items/900/DMM/DMM0025/OF.jpg",
//             "largeImg": "/images/items/large/DMM/DMM0025/OF.jpg",
//             "smallImg": "/images/items/small/DMM/DMM0025/OF.jpg",
//             "tinyImg": "/images/items/tiny/DMM/DMM0025/OF.jpg",
//             "enabled": true,
//             "sizes": {}
//         },
//         "selectedColor": "/images/items/tiny/DMM/DMM0025/OF.jpg",
//         "selectedSize": "",
//         "selectedSku": "DMM0025-OF-NOS711",
//         "selectedQuantity": 1,
//         "hasCompleteData": false,
//         "colorsCollection": {
//             "/images/items/tiny/DMM/DMM0025/OF.jpg": {
//                 "id": "OF",
//                 "name": "Offset",
//                 "mediumImg": "/images/items/medium/DMM/DMM0025/OF.jpg",
//                 "twelveHundredImg": "/images/items/1200/DMM/DMM0025/OF.jpg",
//                 "nineHundredImg": "/images/items/900/DMM/DMM0025/OF.jpg",
//                 "largeImg": "/images/items/large/DMM/DMM0025/OF.jpg",
//                 "smallImg": "/images/items/small/DMM/DMM0025/OF.jpg",
//                 "tinyImg": "/images/items/tiny/DMM/DMM0025/OF.jpg",
//                 "enabled": true,
//                 "sizes": {}
//             }
//         },
//         "sizesCollection": {},
//         "skusCollection": {
//             "DMM0025-OF-NOS711": {
//                 "color": {
//                     "id": "OF",
//                     "name": "Offset",
//                     "mediumImg": "/images/items/medium/DMM/DMM0025/OF.jpg",
//                     "twelveHundredImg": "/images/items/1200/DMM/DMM0025/OF.jpg",
//                     "nineHundredImg": "/images/items/900/DMM/DMM0025/OF.jpg",
//                     "largeImg": "/images/items/large/DMM/DMM0025/OF.jpg",
//                     "smallImg": "/images/items/small/DMM/DMM0025/OF.jpg",
//                     "tinyImg": "/images/items/tiny/DMM/DMM0025/OF.jpg"
//                 },
//                 "size": {
//                     "name": null
//                 },
//                 "title": "",
//                 "listPrice": 74.95,
//                 "onSale": true,
//                 "salePrice": 56.21,
//                 "discountPercent": 25,
//                 "inventory": 114,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             }
//         },
//         "activePrice": {
//             "variationsOnSale": 1,
//             "totalVariations": 1,
//             "minListPrice": 74.95,
//             "maxListPrice": 74.95,
//             "minSalePrice": 56.21,
//             "maxSalePrice": 56.21,
//             "minDiscountPercent": 25,
//             "maxDiscountPercent": 25
//         },
//         "availabilityMessage": "",
//         "colors": [
//             {
//                 "name": "Offset",
//                 "family": "gray",
//                 "image": "/images/items/900/DMM/DMM0025/OF.jpg",
//                 "thumbImage": "/images/items/tiny/DMM/DMM0025/OF.jpg",
//                 "smallImg": "/images/items/small/DMM/DMM0025/OF.jpg",
//                 "id": "OF"
//             }
//         ],
//         "hasFreeGift": false
//     },
//     {
//         "features": [
//             {
//                 "storecredits": "0.0"
//             }
//         ],
//         "isExclusive": false,
//         "customerReviews": {
//             "average": 4,
//             "count": 1
//         },
//         "notes": [],
//         "skus": [
//             {
//                 "image": {
//                     "url": "/images/items/medium/BLD/BLD00RJ/ONECOL.jpg"
//                 },
//                 "discountPercent": 25,
//                 "color": {
//                     "name": "One Color",
//                     "family": "gray"
//                 },
//                 "salePrice": 59.96,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 45,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "One Size"
//                 },
//                 "isRetail": true,
//                 "onSale": true,
//                 "id": "BLD00RJ-ONECOL-ONESIZ",
//                 "isCloseout": false,
//                 "listPrice": 79.95
//             }
//         ],
//         "isGearheadPick": false,
//         "id": "BLD00RJ",
//         "availabilityStatus": "InStock",
//         "title": "Offset Stopper Set #7-11",
//         "activationDate": "2018-04-18 06:00:00",
//         "brand": {
//             "name": "Black Diamond"
//         },
//         "url": "/black-diamond-offset-stopper-set-7-11",
//         "detailImages": [],
//         "breadcrumbs": [],
//         "bikeModel": null,
//         "geometryChartType": "",
//         "bottomLine": null,
//         "variationsOnSale": 1,
//         "totalVariations": 1,
//         "minListPrice": 79.95,
//         "maxListPrice": 79.95,
//         "minSalePrice": 59.96,
//         "maxSalePrice": 59.96,
//         "minDiscountPercent": 25,
//         "maxDiscountPercent": 25,
//         "isCombo": false,
//         "configurationOptions": null,
//         "isCustomizable": false,
//         "fastCash": 0,
//         "shouldShowFindYourSize": false,
//         "isGiftCert": false,
//         "isGiftCardOrGiftCertificate": false,
//         "legal": [],
//         "warningMessages": [],
//         "isBikeBuilder": false,
//         "isBike": false,
//         "detailImagesByColor": {},
//         "defaultDetailImagesColor": "",
//         "productMainImage": {
//             "id": "ONECOL",
//             "name": "One Color",
//             "mediumImg": "/images/items/medium/BLD/BLD00RJ/ONECOL.jpg",
//             "twelveHundredImg": "/images/items/1200/BLD/BLD00RJ/ONECOL.jpg",
//             "nineHundredImg": "/images/items/900/BLD/BLD00RJ/ONECOL.jpg",
//             "largeImg": "/images/items/large/BLD/BLD00RJ/ONECOL.jpg",
//             "smallImg": "/images/items/small/BLD/BLD00RJ/ONECOL.jpg",
//             "tinyImg": "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg",
//             "enabled": true,
//             "sizes": {
//                 "One Size": {
//                     "name": "One Size",
//                     "id": "ONESIZ",
//                     "sku": "BLD00RJ-ONECOL-ONESIZ"
//                 }
//             }
//         },
//         "selectedColor": "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg",
//         "selectedSize": "One Size",
//         "selectedSku": "BLD00RJ-ONECOL-ONESIZ",
//         "selectedQuantity": 1,
//         "hasCompleteData": true,
//         "colorsCollection": {
//             "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg": {
//                 "id": "ONECOL",
//                 "name": "One Color",
//                 "mediumImg": "/images/items/medium/BLD/BLD00RJ/ONECOL.jpg",
//                 "twelveHundredImg": "/images/items/1200/BLD/BLD00RJ/ONECOL.jpg",
//                 "nineHundredImg": "/images/items/900/BLD/BLD00RJ/ONECOL.jpg",
//                 "largeImg": "/images/items/large/BLD/BLD00RJ/ONECOL.jpg",
//                 "smallImg": "/images/items/small/BLD/BLD00RJ/ONECOL.jpg",
//                 "tinyImg": "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg",
//                 "enabled": true,
//                 "sizes": {
//                     "One Size": {
//                         "name": "One Size",
//                         "id": "ONESIZ",
//                         "sku": "BLD00RJ-ONECOL-ONESIZ"
//                     }
//                 }
//             }
//         },
//         "sizesCollection": {
//             "One Size": {
//                 "name": "One Size",
//                 "id": "ONESIZ",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg": {
//                         "id": "ONECOL",
//                         "name": "One Color",
//                         "mediumImg": "/images/items/medium/BLD/BLD00RJ/ONECOL.jpg",
//                         "twelveHundredImg": "/images/items/1200/BLD/BLD00RJ/ONECOL.jpg",
//                         "nineHundredImg": "/images/items/900/BLD/BLD00RJ/ONECOL.jpg",
//                         "largeImg": "/images/items/large/BLD/BLD00RJ/ONECOL.jpg",
//                         "smallImg": "/images/items/small/BLD/BLD00RJ/ONECOL.jpg",
//                         "tinyImg": "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg",
//                         "sku": "BLD00RJ-ONECOL-ONESIZ"
//                     }
//                 }
//             }
//         },
//         "skusCollection": {
//             "BLD00RJ-ONECOL-ONESIZ": {
//                 "color": {
//                     "id": "ONECOL",
//                     "name": "One Color",
//                     "mediumImg": "/images/items/medium/BLD/BLD00RJ/ONECOL.jpg",
//                     "twelveHundredImg": "/images/items/1200/BLD/BLD00RJ/ONECOL.jpg",
//                     "nineHundredImg": "/images/items/900/BLD/BLD00RJ/ONECOL.jpg",
//                     "largeImg": "/images/items/large/BLD/BLD00RJ/ONECOL.jpg",
//                     "smallImg": "/images/items/small/BLD/BLD00RJ/ONECOL.jpg",
//                     "tinyImg": "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg"
//                 },
//                 "size": {
//                     "name": "One Size"
//                 },
//                 "title": "",
//                 "listPrice": 79.95,
//                 "onSale": true,
//                 "salePrice": 59.96,
//                 "discountPercent": 25,
//                 "inventory": 45,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             }
//         },
//         "activePrice": {
//             "variationsOnSale": 1,
//             "totalVariations": 1,
//             "minListPrice": 79.95,
//             "maxListPrice": 79.95,
//             "minSalePrice": 59.96,
//             "maxSalePrice": 59.96,
//             "minDiscountPercent": 25,
//             "maxDiscountPercent": 25
//         },
//         "availabilityMessage": "",
//         "colors": [
//             {
//                 "name": "One Color",
//                 "family": "gray",
//                 "image": "/images/items/900/BLD/BLD00RJ/ONECOL.jpg",
//                 "thumbImage": "/images/items/tiny/BLD/BLD00RJ/ONECOL.jpg",
//                 "smallImg": "/images/items/small/BLD/BLD00RJ/ONECOL.jpg",
//                 "id": "ONECOL"
//             }
//         ],
//         "hasFreeGift": false
//     },
//     {
//         "features": [
//             {
//                 "storecredits": "0.0"
//             }
//         ],
//         "isExclusive": false,
//         "customerReviews": {
//             "average": 5,
//             "count": 1
//         },
//         "notes": [],
//         "skus": [
//             {
//                 "image": {
//                     "url": "/images/items/medium/CRA/CRA00GV/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 109.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 4,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "7"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "CRA00GV-BK-S",
//                 "isCloseout": false,
//                 "listPrice": 109.99
//             }
//         ],
//         "isGearheadPick": false,
//         "id": "CRA00GV",
//         "availabilityStatus": "InStock",
//         "title": "Essence Bib Short - Women's",
//         "activationDate": "2019-03-14 06:00:00",
//         "brand": {
//             "name": "Craft"
//         },
//         "url": "/craft-essence-bib-short-womens",
//         "detailImages": [],
//         "breadcrumbs": [],
//         "bikeModel": null,
//         "geometryChartType": "",
//         "bottomLine": null,
//         "variationsOnSale": 0,
//         "totalVariations": 1,
//         "minListPrice": 109.99,
//         "maxListPrice": 109.99,
//         "minSalePrice": 109.99,
//         "maxSalePrice": 109.99,
//         "minDiscountPercent": 0,
//         "maxDiscountPercent": 0,
//         "isCombo": false,
//         "configurationOptions": null,
//         "isCustomizable": false,
//         "fastCash": 0,
//         "shouldShowFindYourSize": false,
//         "isGiftCert": false,
//         "isGiftCardOrGiftCertificate": false,
//         "legal": [],
//         "warningMessages": [],
//         "isBikeBuilder": false,
//         "isBike": false,
//         "detailImagesByColor": {},
//         "defaultDetailImagesColor": "",
//         "productMainImage": {
//             "id": "BK",
//             "name": "Black",
//             "mediumImg": "/images/items/medium/CRA/CRA00GV/BK.jpg",
//             "twelveHundredImg": "/images/items/1200/CRA/CRA00GV/BK.jpg",
//             "nineHundredImg": "/images/items/900/CRA/CRA00GV/BK.jpg",
//             "largeImg": "/images/items/large/CRA/CRA00GV/BK.jpg",
//             "smallImg": "/images/items/small/CRA/CRA00GV/BK.jpg",
//             "tinyImg": "/images/items/tiny/CRA/CRA00GV/BK.jpg",
//             "enabled": true,
//             "sizes": {
//                 "7": {
//                     "name": "7",
//                     "id": "S",
//                     "sku": "CRA00GV-BK-S"
//                 }
//             }
//         },
//         "selectedColor": "/images/items/tiny/CRA/CRA00GV/BK.jpg",
//         "selectedSize": "7",
//         "selectedSku": "CRA00GV-BK-S",
//         "selectedQuantity": 1,
//         "hasCompleteData": true,
//         "colorsCollection": {
//             "/images/items/tiny/CRA/CRA00GV/BK.jpg": {
//                 "id": "BK",
//                 "name": "Black",
//                 "mediumImg": "/images/items/medium/CRA/CRA00GV/BK.jpg",
//                 "twelveHundredImg": "/images/items/1200/CRA/CRA00GV/BK.jpg",
//                 "nineHundredImg": "/images/items/900/CRA/CRA00GV/BK.jpg",
//                 "largeImg": "/images/items/large/CRA/CRA00GV/BK.jpg",
//                 "smallImg": "/images/items/small/CRA/CRA00GV/BK.jpg",
//                 "tinyImg": "/images/items/tiny/CRA/CRA00GV/BK.jpg",
//                 "enabled": true,
//                 "sizes": {
//                     "7": {
//                         "name": "7",
//                         "id": "S",
//                         "sku": "CRA00GV-BK-S"
//                     }
//                 }
//             }
//         },
//         "sizesCollection": {
//             "7": {
//                 "name": "7",
//                 "id": "S",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/CRA/CRA00GV/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/CRA/CRA00GV/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/CRA/CRA00GV/BK.jpg",
//                         "nineHundredImg": "/images/items/900/CRA/CRA00GV/BK.jpg",
//                         "largeImg": "/images/items/large/CRA/CRA00GV/BK.jpg",
//                         "smallImg": "/images/items/small/CRA/CRA00GV/BK.jpg",
//                         "tinyImg": "/images/items/tiny/CRA/CRA00GV/BK.jpg",
//                         "sku": "CRA00GV-BK-S"
//                     }
//                 }
//             }
//         },
//         "skusCollection": {
//             "CRA00GV-BK-S": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/CRA/CRA00GV/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/CRA/CRA00GV/BK.jpg",
//                     "nineHundredImg": "/images/items/900/CRA/CRA00GV/BK.jpg",
//                     "largeImg": "/images/items/large/CRA/CRA00GV/BK.jpg",
//                     "smallImg": "/images/items/small/CRA/CRA00GV/BK.jpg",
//                     "tinyImg": "/images/items/tiny/CRA/CRA00GV/BK.jpg"
//                 },
//                 "size": {
//                     "name": "7"
//                 },
//                 "title": "",
//                 "listPrice": 109.99,
//                 "onSale": false,
//                 "salePrice": 109.99,
//                 "discountPercent": 0,
//                 "inventory": 4,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             }
//         },
//         "activePrice": {
//             "variationsOnSale": 0,
//             "totalVariations": 1,
//             "minListPrice": 109.99,
//             "maxListPrice": 109.99,
//             "minSalePrice": 109.99,
//             "maxSalePrice": 109.99,
//             "minDiscountPercent": 0,
//             "maxDiscountPercent": 0
//         },
//         "availabilityMessage": "",
//         "colors": [
//             {
//                 "name": "Black",
//                 "family": "black",
//                 "image": "/images/items/900/CRA/CRA00GV/BK.jpg",
//                 "thumbImage": "/images/items/tiny/CRA/CRA00GV/BK.jpg",
//                 "smallImg": "/images/items/small/CRA/CRA00GV/BK.jpg",
//                 "id": "BK"
//             }
//         ],
//         "hasFreeGift": false
//     },
//     {
//         "features": [
//             {
//                 "storecredits": "0.0"
//             }
//         ],
//         "isExclusive": false,
//         "customerReviews": {
//             "average": 0,
//             "count": 0
//         },
//         "notes": [],
//         "skus": [
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000C/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 129.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 1,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "S"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000C-BK-S",
//                 "isCloseout": false,
//                 "listPrice": 129.99
//             },
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000C/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 129.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 17,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "M"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000C-BK-M",
//                 "isCloseout": false,
//                 "listPrice": 129.99
//             },
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000C/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 129.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 24,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "L"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000C-BK-L",
//                 "isCloseout": false,
//                 "listPrice": 129.99
//             },
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000C/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 129.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 2,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "XL"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000C-BK-XL",
//                 "isCloseout": false,
//                 "listPrice": 129.99
//             }
//         ],
//         "isGearheadPick": false,
//         "id": "SPU000C",
//         "availabilityStatus": "InStock",
//         "title": "Flex Body Protector",
//         "activationDate": "2016-06-21 06:00:00",
//         "brand": {
//             "name": "7 Protection"
//         },
//         "url": "/7-protection-flex-body-protector-short-sleeve",
//         "detailImages": [],
//         "breadcrumbs": [],
//         "bikeModel": null,
//         "geometryChartType": "",
//         "bottomLine": null,
//         "variationsOnSale": 0,
//         "totalVariations": 4,
//         "minListPrice": 129.99,
//         "maxListPrice": 129.99,
//         "minSalePrice": 129.99,
//         "maxSalePrice": 129.99,
//         "minDiscountPercent": 0,
//         "maxDiscountPercent": 0,
//         "isCombo": false,
//         "configurationOptions": null,
//         "isCustomizable": false,
//         "fastCash": 0,
//         "shouldShowFindYourSize": false,
//         "isGiftCert": false,
//         "isGiftCardOrGiftCertificate": false,
//         "legal": [],
//         "warningMessages": [],
//         "isBikeBuilder": false,
//         "isBike": false,
//         "detailImagesByColor": {},
//         "defaultDetailImagesColor": "",
//         "productMainImage": {
//             "id": "BK",
//             "name": "Black",
//             "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//             "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//             "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//             "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//             "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//             "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//             "enabled": true,
//             "sizes": {
//                 "S": {
//                     "name": "S",
//                     "id": "S",
//                     "sku": "SPU000C-BK-S"
//                 },
//                 "M": {
//                     "name": "M",
//                     "id": "M",
//                     "sku": "SPU000C-BK-M"
//                 },
//                 "L": {
//                     "name": "L",
//                     "id": "L",
//                     "sku": "SPU000C-BK-L"
//                 },
//                 "XL": {
//                     "name": "XL",
//                     "id": "XL",
//                     "sku": "SPU000C-BK-XL"
//                 }
//             }
//         },
//         "selectedColor": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//         "selectedSize": "",
//         "selectedSku": "",
//         "selectedQuantity": 1,
//         "hasCompleteData": true,
//         "colorsCollection": {
//             "/images/items/tiny/SPU/SPU000C/BK.jpg": {
//                 "id": "BK",
//                 "name": "Black",
//                 "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                 "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                 "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                 "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                 "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                 "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//                 "enabled": true,
//                 "sizes": {
//                     "S": {
//                         "name": "S",
//                         "id": "S",
//                         "sku": "SPU000C-BK-S"
//                     },
//                     "M": {
//                         "name": "M",
//                         "id": "M",
//                         "sku": "SPU000C-BK-M"
//                     },
//                     "L": {
//                         "name": "L",
//                         "id": "L",
//                         "sku": "SPU000C-BK-L"
//                     },
//                     "XL": {
//                         "name": "XL",
//                         "id": "XL",
//                         "sku": "SPU000C-BK-XL"
//                     }
//                 }
//             }
//         },
//         "sizesCollection": {
//             "S": {
//                 "name": "S",
//                 "id": "S",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000C/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//                         "sku": "SPU000C-BK-S"
//                     }
//                 }
//             },
//             "M": {
//                 "name": "M",
//                 "id": "M",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000C/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//                         "sku": "SPU000C-BK-M"
//                     }
//                 }
//             },
//             "L": {
//                 "name": "L",
//                 "id": "L",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000C/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//                         "sku": "SPU000C-BK-L"
//                     }
//                 }
//             },
//             "XL": {
//                 "name": "XL",
//                 "id": "XL",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000C/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//                         "sku": "SPU000C-BK-XL"
//                     }
//                 }
//             }
//         },
//         "skusCollection": {
//             "SPU000C-BK-S": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg"
//                 },
//                 "size": {
//                     "name": "S"
//                 },
//                 "title": "",
//                 "listPrice": 129.99,
//                 "onSale": false,
//                 "salePrice": 129.99,
//                 "discountPercent": 0,
//                 "inventory": 1,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             },
//             "SPU000C-BK-M": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg"
//                 },
//                 "size": {
//                     "name": "M"
//                 },
//                 "title": "",
//                 "listPrice": 129.99,
//                 "onSale": false,
//                 "salePrice": 129.99,
//                 "discountPercent": 0,
//                 "inventory": 17,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             },
//             "SPU000C-BK-L": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg"
//                 },
//                 "size": {
//                     "name": "L"
//                 },
//                 "title": "",
//                 "listPrice": 129.99,
//                 "onSale": false,
//                 "salePrice": 129.99,
//                 "discountPercent": 0,
//                 "inventory": 24,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             },
//             "SPU000C-BK-XL": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000C/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000C/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000C/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000C/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000C/BK.jpg"
//                 },
//                 "size": {
//                     "name": "XL"
//                 },
//                 "title": "",
//                 "listPrice": 129.99,
//                 "onSale": false,
//                 "salePrice": 129.99,
//                 "discountPercent": 0,
//                 "inventory": 2,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             }
//         },
//         "activePrice": {
//             "variationsOnSale": 0,
//             "totalVariations": 4,
//             "minListPrice": 129.99,
//             "maxListPrice": 129.99,
//             "minSalePrice": 129.99,
//             "maxSalePrice": 129.99,
//             "minDiscountPercent": 0,
//             "maxDiscountPercent": 0
//         },
//         "availabilityMessage": "",
//         "colors": [
//             {
//                 "name": "Black",
//                 "family": "black",
//                 "image": "/images/items/900/SPU/SPU000C/BK.jpg",
//                 "thumbImage": "/images/items/tiny/SPU/SPU000C/BK.jpg",
//                 "smallImg": "/images/items/small/SPU/SPU000C/BK.jpg",
//                 "id": "BK"
//             }
//         ],
//         "hasFreeGift": false
//     },
//     {
//         "features": [
//             {
//                 "storecredits": "0.0"
//             }
//         ],
//         "isExclusive": false,
//         "customerReviews": {
//             "average": 0,
//             "count": 0
//         },
//         "notes": [],
//         "skus": [
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000E/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 69.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 14,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "S"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000E-BK-S",
//                 "isCloseout": false,
//                 "listPrice": 69.99
//             },
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000E/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 69.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 15,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "XL"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000E-BK-XL",
//                 "isCloseout": false,
//                 "listPrice": 69.99
//             },
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000E/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 69.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 21,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "L"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000E-BK-L",
//                 "isCloseout": false,
//                 "listPrice": 69.99
//             },
//             {
//                 "image": {
//                     "url": "/images/items/medium/SPU/SPU000E/BK.jpg"
//                 },
//                 "discountPercent": 0,
//                 "color": {
//                     "name": "Black",
//                     "family": "black"
//                 },
//                 "salePrice": 69.99,
//                 "allowBackorder": false,
//                 "isOutlet": false,
//                 "availability": {
//                     "backorderLevel": 0,
//                     "stockLevel": 21,
//                     "status": "InStock"
//                 },
//                 "isPastSeason": false,
//                 "size": {
//                     "name": "M"
//                 },
//                 "isRetail": true,
//                 "onSale": false,
//                 "id": "SPU000E-BK-M",
//                 "isCloseout": false,
//                 "listPrice": 69.99
//             }
//         ],
//         "isGearheadPick": false,
//         "id": "SPU000E",
//         "availabilityStatus": "InStock",
//         "title": "Flex Elbow Guards",
//         "activationDate": "2018-01-18 07:00:00",
//         "brand": {
//             "name": "7 Protection"
//         },
//         "url": "/7-protection-flex-elbow-guards",
//         "detailImages": [],
//         "breadcrumbs": [],
//         "bikeModel": null,
//         "geometryChartType": "",
//         "bottomLine": null,
//         "variationsOnSale": 0,
//         "totalVariations": 4,
//         "minListPrice": 69.99,
//         "maxListPrice": 69.99,
//         "minSalePrice": 69.99,
//         "maxSalePrice": 69.99,
//         "minDiscountPercent": 0,
//         "maxDiscountPercent": 0,
//         "isCombo": false,
//         "configurationOptions": null,
//         "isCustomizable": false,
//         "fastCash": 0,
//         "shouldShowFindYourSize": false,
//         "isGiftCert": false,
//         "isGiftCardOrGiftCertificate": false,
//         "legal": [],
//         "warningMessages": [],
//         "isBikeBuilder": false,
//         "isBike": false,
//         "detailImagesByColor": {},
//         "defaultDetailImagesColor": "",
//         "productMainImage": {
//             "id": "BK",
//             "name": "Black",
//             "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//             "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//             "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//             "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//             "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//             "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//             "enabled": true,
//             "sizes": {
//                 "S": {
//                     "name": "S",
//                     "id": "S",
//                     "sku": "SPU000E-BK-S"
//                 },
//                 "XL": {
//                     "name": "XL",
//                     "id": "XL",
//                     "sku": "SPU000E-BK-XL"
//                 },
//                 "L": {
//                     "name": "L",
//                     "id": "L",
//                     "sku": "SPU000E-BK-L"
//                 },
//                 "M": {
//                     "name": "M",
//                     "id": "M",
//                     "sku": "SPU000E-BK-M"
//                 }
//             }
//         },
//         "selectedColor": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//         "selectedSize": "",
//         "selectedSku": "",
//         "selectedQuantity": 1,
//         "hasCompleteData": true,
//         "colorsCollection": {
//             "/images/items/tiny/SPU/SPU000E/BK.jpg": {
//                 "id": "BK",
//                 "name": "Black",
//                 "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                 "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                 "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                 "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                 "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                 "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//                 "enabled": true,
//                 "sizes": {
//                     "S": {
//                         "name": "S",
//                         "id": "S",
//                         "sku": "SPU000E-BK-S"
//                     },
//                     "XL": {
//                         "name": "XL",
//                         "id": "XL",
//                         "sku": "SPU000E-BK-XL"
//                     },
//                     "L": {
//                         "name": "L",
//                         "id": "L",
//                         "sku": "SPU000E-BK-L"
//                     },
//                     "M": {
//                         "name": "M",
//                         "id": "M",
//                         "sku": "SPU000E-BK-M"
//                     }
//                 }
//             }
//         },
//         "sizesCollection": {
//             "S": {
//                 "name": "S",
//                 "id": "S",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000E/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//                         "sku": "SPU000E-BK-S"
//                     }
//                 }
//             },
//             "XL": {
//                 "name": "XL",
//                 "id": "XL",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000E/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//                         "sku": "SPU000E-BK-XL"
//                     }
//                 }
//             },
//             "L": {
//                 "name": "L",
//                 "id": "L",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000E/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//                         "sku": "SPU000E-BK-L"
//                     }
//                 }
//             },
//             "M": {
//                 "name": "M",
//                 "id": "M",
//                 "enabled": true,
//                 "colors": {
//                     "/images/items/tiny/SPU/SPU000E/BK.jpg": {
//                         "id": "BK",
//                         "name": "Black",
//                         "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                         "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                         "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                         "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                         "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                         "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//                         "sku": "SPU000E-BK-M"
//                     }
//                 }
//             }
//         },
//         "skusCollection": {
//             "SPU000E-BK-S": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg"
//                 },
//                 "size": {
//                     "name": "S"
//                 },
//                 "title": "",
//                 "listPrice": 69.99,
//                 "onSale": false,
//                 "salePrice": 69.99,
//                 "discountPercent": 0,
//                 "inventory": 14,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             },
//             "SPU000E-BK-XL": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg"
//                 },
//                 "size": {
//                     "name": "XL"
//                 },
//                 "title": "",
//                 "listPrice": 69.99,
//                 "onSale": false,
//                 "salePrice": 69.99,
//                 "discountPercent": 0,
//                 "inventory": 15,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             },
//             "SPU000E-BK-L": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg"
//                 },
//                 "size": {
//                     "name": "L"
//                 },
//                 "title": "",
//                 "listPrice": 69.99,
//                 "onSale": false,
//                 "salePrice": 69.99,
//                 "discountPercent": 0,
//                 "inventory": 21,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             },
//             "SPU000E-BK-M": {
//                 "color": {
//                     "id": "BK",
//                     "name": "Black",
//                     "mediumImg": "/images/items/medium/SPU/SPU000E/BK.jpg",
//                     "twelveHundredImg": "/images/items/1200/SPU/SPU000E/BK.jpg",
//                     "nineHundredImg": "/images/items/900/SPU/SPU000E/BK.jpg",
//                     "largeImg": "/images/items/large/SPU/SPU000E/BK.jpg",
//                     "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                     "tinyImg": "/images/items/tiny/SPU/SPU000E/BK.jpg"
//                 },
//                 "size": {
//                     "name": "M"
//                 },
//                 "title": "",
//                 "listPrice": 69.99,
//                 "onSale": false,
//                 "salePrice": 69.99,
//                 "discountPercent": 0,
//                 "inventory": 21,
//                 "isBackorderable": false,
//                 "availabilityMessage": ""
//             }
//         },
//         "activePrice": {
//             "variationsOnSale": 0,
//             "totalVariations": 4,
//             "minListPrice": 69.99,
//             "maxListPrice": 69.99,
//             "minSalePrice": 69.99,
//             "maxSalePrice": 69.99,
//             "minDiscountPercent": 0,
//             "maxDiscountPercent": 0
//         },
//         "availabilityMessage": "",
//         "colors": [
//             {
//                 "name": "Black",
//                 "family": "black",
//                 "image": "/images/items/900/SPU/SPU000E/BK.jpg",
//                 "thumbImage": "/images/items/tiny/SPU/SPU000E/BK.jpg",
//                 "smallImg": "/images/items/small/SPU/SPU000E/BK.jpg",
//                 "id": "BK"
//             }
//         ],
//         "hasFreeGift": false
//     },


// ]

const bcUrl = 'https://www.backcountry.com/api/products/categories/bc-mens-shirts?categoryId=bc-mens-shirts&p=Brand%253A100000062&page=0&plpType=default&q=&sort='



const ProductListing = () => {

    const [bcData, setBcData] = useState([]);


    useEffect(() => {
        const getData = async (products) => {
            const response = await axios.get(bcUrl)
            // console.log(response.data.products);
            setBcData(response.data.products)
        }
        getData(bcData)
        // console.log(bcData);
    }, []);

    return (
        <div className="grid-container" id='productsListing'>
            {

                bcData.map((product) => (

                    <div className="grid-item" key={product.title}>
                        <div className="card">
                            <img src={`https://www.backcountry.com${product.productMainImage.mediumImg}`} alt="Avatar" className='product-images' />
                            <div className="container">
                                <h6 className='brand'>{product.title}</h6>
                                <p className='title'>{product.brand.name}</p>
                                <p className='price'>{`$${product.activePrice.maxListPrice}`}</p>
                                <p className='reviews'>

                                    {Array.apply(null, { length: product.customerReviews.average }).map((rating, ratingIndex) => (

                                        <i key={`${product.title}-rating-${ratingIndex}`} ><FontAwesomeIcon icon={faStar} /></i>)
                                    )}

                                </p>
                                <button className='cart-button button'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))

                // products.map((product) => (

                //     <div className="grid-item" key={product.title}>
                //         <div className="card">
                //             <img src={`https://www.backcountry.com${product.productMainImage.mediumImg}`} alt="Avatar" className='product-images' />
                //             <div className="container">
                //                 <h6>{product.title}</h6>
                //                 <p className='title'>{product.brand.name}</p>
                //                 <p className='price'>{`$${product.activePrice.maxListPrice}`}</p>
                //                 <p className='reviews'>

                //                     {Array.apply(null, { length: product.customerReviews.average }).map((rating, ratingIndex) => (

                //                         <i key={`${product.title}-rating-${ratingIndex}`} ><FontAwesomeIcon icon={faStar} /></i>)
                //                     )}

                //                 </p>
                //                 <button className='cart-button button'>Add To Cart</button>
                //             </div>
                //         </div>
                //     </div>
                // ))
            }

        </div>
    );
}

export default ProductListing;
