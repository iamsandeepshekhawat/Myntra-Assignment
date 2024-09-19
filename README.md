
# Myntra project - Frontend

## Description

Myntra is a e-commerce website where you can buy clothes, shoes etc. This project is a clone of Myntra website. This project is built using Next.js, React, Hooks, Context API, CSS, HTML.

### Note: This page was made as a personal project in connection with an educational exercise. This is NOT the official site of the company or brand identified on the page. The creator of this page is NOT affiliated with the company or brand in any way.


## Demo
### https://myyntra-gocommett.vercel.app/

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Context API](https://reactjs.org/docs/context.html)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Features

- [x] Header
- [x] Search
- [x] Sort ❌
- [x] Filter ❌
- [x] Filter (show more)
- [x] Wishlist ❌
- [x] Bag ❌
- [x] Product Details ❌
- [x] Footer
- [x] Responsive ❌

## Screenshots

![image](https://user-images.githubusercontent.com/61316762/232858752-d11e95c6-54cc-41fb-a3d2-3be99797a9c6.png)

### Header
![image](https://user-images.githubusercontent.com/61316762/232858851-adcc0f24-43bd-4ce4-b90a-0a9e5ade4c7a.png)

### Search Bash
![image](https://user-images.githubusercontent.com/61316762/232858947-36135d04-8de8-4333-8331-1ba66cae24dd.png)

### Stock
so here under this stock is bacially having two categories, first one is "only few left" and another one is "in stock" which has been implemented in the code as if the product is less than 5 then it will show "only few left" and if more than that then it will show "in stock". 
![image](https://user-images.githubusercontent.com/61316762/232864526-a0568c03-88dd-4158-a59b-eaaa6846cbdb.png)

## Filter
### Gender
![image](https://user-images.githubusercontent.com/61316762/232859109-082b1239-9b2a-4b33-b5d0-3a82b8b86f3b.png)

### Brand
![image](https://user-images.githubusercontent.com/61316762/232859154-da67ddd4-0f47-4b19-b03b-3f12bf983242.png)

### Price
![image](https://user-images.githubusercontent.com/61316762/232859229-8f8ee403-8b30-4817-af07-86b02e9fc390.png)

### Color
![image](https://user-images.githubusercontent.com/61316762/232859315-69811f9c-42a7-42e0-aefd-932fb10b4354.png)

### Discount
![image](https://user-images.githubusercontent.com/61316762/232859401-b83023a0-2afe-4da2-8bf5-6e53bb3b6a15.png)

## Show more button
![image](https://user-images.githubusercontent.com/61316762/232859581-5a457eb2-8f46-472a-9786-b0d3c24c8db2.png)

## Search

![image](https://user-images.githubusercontent.com/61316762/232859689-5fc41033-e409-48a5-8f4a-b3367aad5ab1.png)

## Product Card

![image](https://user-images.githubusercontent.com/61316762/232859891-75d1e784-84e6-43cd-9dcc-b8d1ae2b1c83.png)

## Project Structure

```
myntra/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Product/
│   │   ├── Products.js
│   │   ├── Product.container.js
│   │   ├── ProductCard.js
│   |   └── ProductDetails.js
│   ├── Search/
│   │   ├── Search.js
│   │   ├── Search.bash.js
│   │   ├── AppContext.js
│   ├── Sort.js
│   ├── Main.js
│   ├── Wishlist.js
│   ├── Bag.js
├── pages/
│   ├── index.js
│   ├── products/
│   │   ├── index.js
│   │   ├── [id].js
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   └── ...
│   ├── css/
│   │   ├── global.css
│   │   └── ...
│   └── ...
├── lib/
│   ├── api.js
│   └── ...
├── utils/
│   ├── constants.js
│   └── ...
├── next.config.js
└── package.json
```

## Project setup

```bash
npm install
```

## Compiles and hot-reloads for development

```
npm run dev
```

## Compiles and minifies for production

```
npm run build
```

## Run your tests

```
npm run test
```

## Author

[Saurav Hathi](https://github.com/sauravhathi)
