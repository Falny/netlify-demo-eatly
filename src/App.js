import React, {lazy} from 'react'
import './style/style.css'

import {Routes, Route, useLocation} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

import Chicken from './images/main/restaurants/chicken1.png'
import Burger from './images/main/restaurants/burger1.png'
import Pizza from './images/main/restaurants/pizza.png'
import IceCream from './images/main/restaurants/icecream.png'
import Donut from './images/main/restaurants/donut.png'

import Dish1 from './images/main/dishes/dish1.png'
import Dish2 from './images/main/dishes/dish2.png'
import Dish3 from './images/main/dishes/dish3.png'
import Dish4 from './images/main/dishes/dish4.png'

import Strawberry from './images/main/dishes/strwberri_ice.png'
import Chocolate from './images/main/dishes/choclate-ice.png'
import Vanile from './images/main/dishes/valile-ice.png'
import Peperoni from './images/main/dishes/peperoni.png'
import Shrimp from './images/main/dishes/shrimp.png'
import Ham from './images/main/dishes/ham-pizza.png'
import Mushrooms from './images/main/dishes/mushrooms.png'
import ChocolateDonut from './images/main/dishes/chocolate-donut.png'
import VanileDonut from './images/main/dishes/vanile-donut.png'

import IconArticle from './images/blog/icon.png'
import ImgArticle1 from './images/blog/img-article1.png'
import ImgArticle2 from './images/blog/img-article2.png'
import ImgArticle3 from './images/blog/img-article3.png'
import ImgArticle4 from './images/blog/img-article4.png'
import ImgArticle5 from './images/blog/img-article5.png'
import ImgArticle6 from './images/blog/img-article6.png'

const Cart = lazy(() => import('./components/Cart/cart'))
const CommonFormIn = lazy(() => import('./components/Navbar/Register/CommonRegister/CommonFormIn'))
const Register = lazy(() => import('./components/Location/location'))
const Contact = lazy(() => import('./components/Contact/contact'))
const InsideArticle = lazy(() => import('./components/Blog/InsideArticles/insideArticle'))
const InsideRest = lazy(() => import('./components/Menu/Inside_restaurants/insideRest'))
const ListRestaurants = lazy(() => import('./components/Common/LisrRestaurants/listRestaurants'))
const Display_blog = lazy(() => import('./components/Display/blog_display'))
const Display_pricing = lazy(() => import('./components/Display/pricing_display'))
const Display_menu = lazy(() => import('./components/Display/menu_display'))
const Display_main = lazy(() => import('./components/Display/main_display'))
const Loyaut = lazy(() => import('./components/Loyaut'))

export const contextCart = React.createContext(null)

function App() {


  const isRegister = ['/signup', '/login', '/forgetpas'].includes(useLocation().pathname)

  const restaurantsArr = [
    {id: uuidv4(), name: 'The Chicken King', status: 'Healthy', time: '24min', score: '4.8', isSave: true, img: Chicken, category: 'asian', sortby: 'recomended', goods: [
      {id: uuidv4(), img: Dish1, name: 'Chicken Hell1', price: '12.99', score: '4.8', status: 'Healthy', time: '24min', count: 0, isLike: false, category: 'asian', sortby: 'recomended', count: {value: 0}},
      {id: uuidv4(), img: Dish2, name: 'Swe Dish1', price: '19.99', score: '4.9', status: 'Trending', time: '34min', count: 0, isLike: false, category: 'asian', sortby: ['recomended', 'most popular'], count: {value: 0}},
      {id: uuidv4(), img: Dish3, name: 'Swe Dish2', price: '19.99', score: '4.9', status: 'Supreme', time: '34min', count: 0, isLike: false, category: 'asian', sortby: ['recomended', 'most popular'], count: {value: 0}},
    ]},
    {id: uuidv4(), name: 'The Burger King', status: 'Trending', time: '22min', score: '4.9', isSave: true, img: Burger, category: 'asian', sortby: ['most popular', 'fast delivery'], goods: [
      {id: uuidv4(), img: Dish2, name: 'Burger', price: '19.99', score: '4.9', status: 'Trending', time: '34min', count: 0, isLike: false, category: 'asian', sortby: ['recomended', 'most popular'], count: {value: 0}},
      {id: uuidv4(), img: Dish3, name: 'Fish Burger', price: '19.99', score: '4.9', status: 'Supreme', time: '34min', count: 0, isLike: false, category: 'asian', sortby: 'recomended', count: {value: 0}},
      {id: uuidv4(), img: Dish4, name: 'Nagets', price: '12.99', score: '5.0', status: 'Healthy', time: '24min', count: 0, isLike: true, category: 'asian', sortby: ['recomended', 'most popular'], count: {value: 0}},
      {id: uuidv4(), img: Dish2, name: 'Fri', price: '19.99', score: '4.7', status: 'Trending', time: '34min', count: 0, isLike: true, category: 'asian', sortby: 'recomended', count: {value: 0}},
    ]},
    {id: uuidv4(), name: 'The Rolyal King', status: 'Supreme', time: '27min', score: '4.7', isSave: false, img: Chicken, category: 'pizza', sortby: 'most popular', goods: [
      {id: uuidv4(), img: Dish3, name: 'Fish Burger', price: '19.99', score: '4.9', status: 'Supreme', time: '34min', count: 0, isLike: false, category: 'asian', sortby: 'recomended', count: {value: 0}},
      {id: uuidv4(), img: Dish4, name: 'Nagets', price: '12.99', score: '5.0', status: 'Healthy', time: '24min', count: 0, isLike: true, category: 'asian', sortby: ['recomended', 'most popular'], count: {value: 0}},
    ]},
    {id: uuidv4(), name: 'The Ice Queen', status: 'Trending', time: '11min', score: '5.0', isSave: false, img: IceCream, category: 'ice', sortby: 'fast delivery', goods: [
      {id: uuidv4(), img: Strawberry, name: 'Strawberri', price: '12.99', score: '5.0', status: 'Healthy', time: '24min', count: 0, isLike: true, category: 'ice', sortby: ['recomended', 'most popular'], count: {value: 0}},
      {id: uuidv4(), img: Chocolate, name: 'Chocolate', price: '12.99', score: '4.9', status: 'Trending', time: '23min', count: 0, isLike: false, category: 'ice', sortby: ['recomended', 'most popular'], count: {value: 0}},
      {id: uuidv4(), img: Vanile, name: 'Valile', price: '12.99', score: '4.8', status: 'Supreme', time: '25min', count: 0, isLike: false, category: 'ice', sortby: 'recomended', count: {value: 0}},
    ]},
    {id: uuidv4(), name: 'The Pizza Men', status: 'Supreme', time: '36min', score: '4.9', isSave: false, img: Pizza, category: 'pizza', sortby: 'most popular', goods: [
      {id: uuidv4(), img: Peperoni, name: 'Peperoni Pizza', price: '12.99', score: '5.0', status: 'Supreme', time: '29min', count: 0, isLike: false, category: 'pizza', sortby: 'recomended', count: {value: 0}},
      {id: uuidv4(), img: Ham, name: 'Ham2X Pizza', price: '17.99', score: '4.4', status: 'Healthy', time: '35min', count: 0, isLike: false, category: 'pizza', sortby: '', count: {value: 0}},
      {id: uuidv4(), img: Mushrooms, name: 'Mushrooms', price: '15.99', score: '4.5', status: 'Healthy', time: '30min', count: 0, isLike: false, category: 'pizza', sortby: '', count: {value: 0}},
      {id: uuidv4(), img: Shrimp, name: 'Shrimp Pizza', price: '13.99', score: '4.9', status: 'Trending', time: '30min', count: 0, isLike: false, category: 'pizza', sortby: 'most popular', count: {value: 0}},
    ]},
    {id: uuidv4(), name: 'Donut Magazin', status: 'Trending', time: '16min', score: '4.8', isSave: true, img: Donut, category: 'donut', sortby: ['recommended', 'fast delivery'], goods: [
      {id: uuidv4(), img: ChocolateDonut, name: 'Chocolate Donut', price: '13.99', score: '4.9', status: 'Supreme', time: '10min', count: 0, isLike: false, category: 'donut', sortby: ['recomended', 'most popular'], count: {value: 0}},
      {id: uuidv4(), img: VanileDonut, name: 'Vanile Donut', price: '13.99', score: '4.9', status: 'Supreme', time: '10min', count: 0, isLike: false, category: 'donut', sortby: ['recomended', 'most popular'], count: {value: 0}},
    ]},
  ]

  const articlesArr = [
    { id: uuidv4(), title: 'How To Order Food ?', name: 'Perperzon', img: IconArticle, data: '15 DEC, 2022', mainImg: ImgArticle1, article: 'Sdwhuh fwhbe Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem? tenetur ab? Iusto vit' },
    { id: uuidv4(), title: 'Tips & Tricks For Business', name: 'Lilli', img: IconArticle, data: '12 APR, 2021', mainImg: ImgArticle2, article: 'ANnjve jfoeLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem?  modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae' },
    { id: uuidv4(), title: 'How To Control Money ?', name: 'Andersen', img: IconArticle, data: '26 JUL, 2021', mainImg: ImgArticle3, article: 'Amopor kfrer Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem? esse, tenetur ab? Iusto vitae suscipit ut beatae rem? tenet' },
    { id: uuidv4(), title: 'Top 5 Business Ideas', name: 'Alina', img: IconArticle, data: '04 SEP, 2021', mainImg: ImgArticle4, article: 'Qwoir odlsmc Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem?deserunt, natus esse, tenetur ab? Iu' },
    { id: uuidv4(), title: 'How To Manage Cards ?', name: 'Mila', img: IconArticle, data: '17 MAR, 2021', mainImg: ImgArticle5, article: 'Zcaef Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem? pedit optio alias culpa quo fugit laborum totam blanditiis minus' },
    { id: uuidv4(), title: 'How To Track The Order ?', name: 'Josh', img: IconArticle, data: '31 AUT, 2021', mainImg: ImgArticle6, article: 'Kkfiiejfas Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem? lpa quo fugit laborum totam blanditi' },
    { id: uuidv4(), title: 'Tips & Tricks For Business', name: 'Lilli', img: IconArticle, data: '12 APR, 2021', mainImg: ImgArticle2, article: 'ANnjve jfoeLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem?  quo fugit laborum totam blanditiis minus modi deserunt, natus esse' },
    { id: uuidv4(), title: 'How To Control Money ?', name: 'Andersen', img: IconArticle, data: '26 JUL, 2021', mainImg: ImgArticle3, article: 'Amopor kfrer Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem? ugit laborum totam blanditiis minus modi de' },
    { id: uuidv4(), title: 'How To Track The Order ?', name: 'Josh', img: IconArticle, data: '31 AUT, 2021', mainImg: ImgArticle6, article: 'Kkfiiejfas Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores repellat eum optio perferendis! Aspernatur ab sint dolore! Fugiat quas architecto dolor id fuga illum esse, excepturi veritatis error qui ad repellat voluptatum. Tempora quaerat exercitationem saepe molestiae animi laudantium iusto delectus dolores itaque rem assumenda fugit porro tempore, fuga iure odit quos, numquam natus a corporis? Vitae quae at non assumenda, necessitatibus corrupti dolores molestias pariatur itaque laudantium soluta illum, debitis distinctio tempore suscipit magnam est et voluptatibus voluptatum. Ut, cum. Consectetur commodi, veritatis quisquam tempore placeat numquam et, quaerat voluptates blanditiis nulla quos dignissimos! Dolorem saepe explicabo aspernatur fuga quas blanditiis aperiam fugiat veniam sequi consectetur incidunt repellendus tempore nihil non excepturi nemo mollitia molestiae quod, iste similique facilis voluptates ut sint. Nulla odio autem ex, ab dolor quos laboriosam distinctio cupiditate nostrum, amet sapiente vero aperiam, minima cum! Vel et distinctio labore, nulla iste minus molestias? Numquam excepturi tenetur quo mollitia eius illum at, eveniet animi officia, magnam possimus harum impedit nulla error labore corrupti voluptas qui natus architecto quidem? Sunt quasi dignissimos dolorem dolore impedit optio alias culpa quo fugit laborum totam blanditiis minus modi deserunt, natus esse, tenetur ab? Iusto vitae suscipit ut beatae rem? dolorem dolore impedit optio alias culpa quo fugit laborum' },
]

  const Status = {
    Healthy: 'healthy',
    Trending: 'trending',
    Supreme: 'supreme'
  }

  const [restaurants, setRestaurants] = React.useState(restaurantsArr)
  const [articles, setArticle] = React.useState(articlesArr)

  const [cart, setCart] = React.useState(() => {
    const getItem = localStorage.getItem('cart')
    const parseItem = JSON.parse(getItem)
    return parseItem !== undefined ? parseItem : []
  })



  // React.useEffect(() => {
  //   const restaurantsArr = [
  //     {id: uuidv4(), name: 'The Chicken King', status: 'Healthy', time: '24min', score: '4.8', isSave: true, img: Chicken, category: 'asian', sortby: 'recomended', goods: [
  //       {id: uuidv4(), img: Dish1, name: 'Chicken Hell1', price: '12.99', score: '4.8', status: 'Healthy', time: '24min', count: 0, isLike: false, category: 'asian', sortby: 'recomended'},
  //       {id: uuidv4(), img: Dish2, name: 'Swe Dish1', price: '19.99', score: '4.9', status: 'Trending', time: '34min', count: 0, isLike: false, category: 'asian', sortby: ['recomended', 'most popular']},
  //       {id: uuidv4(), img: Dish3, name: 'Swe Dish2', price: '19.99', score: '4.9', status: 'Supreme', time: '34min', count: 0, isLike: false, category: 'asian', sortby: ['recomended', 'most popular']},
  //     ]},
  //     {id: uuidv4(), name: 'The Burger King', status: 'Trending', time: '22min', score: '4.9', isSave: true, img: Burger, category: 'asian', sortby: ['most popular', 'fast delivery'], goods: [
  //       {id: uuidv4(), img: Dish2, name: 'Burger', price: '19.99', score: '4.9', status: 'Trending', time: '34min', count: 0, isLike: false, category: 'asian', sortby: ['recomended', 'most popular']},
  //       {id: uuidv4(), img: Dish3, name: 'Fish Burger', price: '19.99', score: '4.9', status: 'Supreme', time: '34min', count: 0, isLike: false, category: 'asian', sortby: 'recomended'},
  //       {id: uuidv4(), img: Dish4, name: 'Nagets', price: '12.99', score: '5.0', status: 'Healthy', time: '24min', count: 0, isLike: true, category: 'asian', sortby: ['recomended', 'most popular']},
  //       {id: uuidv4(), img: Dish2, name: 'Fri', price: '19.99', score: '4.7', status: 'Trending', time: '34min', count: 0, isLike: true, category: 'asian', sortby: 'recomended'},
  //     ]},
  //     {id: uuidv4(), name: 'The Rolyal King', status: 'Supreme', time: '27min', score: '4.7', isSave: false, img: Chicken, category: 'pizza', sortby: 'most popular', goods: [
  //       {id: uuidv4(), img: Dish3, name: 'Fish Burger', price: '19.99', score: '4.9', status: 'Supreme', time: '34min', count: 0, isLike: false, category: 'asian', sortby: 'recomended'},
  //       {id: uuidv4(), img: Dish4, name: 'Nagets', price: '12.99', score: '5.0', status: 'Healthy', time: '24min', count: 0, isLike: true, category: 'asian', sortby: ['recomended', 'most popular']},
  //     ]},
  //     {id: uuidv4(), name: 'The Ice Queen', status: 'Trending', time: '11min', score: '5.0', isSave: false, img: IceCream, category: 'ice', sortby: 'fast delivery', goods: [
  //       {id: uuidv4(), img: Strawberry, name: 'Strawberri', price: '12.99', score: '5.0', status: 'Healthy', time: '24min', count: 0, isLike: true, category: 'ice', sortby: ['recomended', 'most popular']},
  //       {id: uuidv4(), img: Chocolate, name: 'Chocolate', price: '12.99', score: '4.9', status: 'Trending', time: '23min', count: 0, isLike: false, category: 'ice', sortby: ['recomended', 'most popular']},
  //       {id: uuidv4(), img: Vanile, name: 'Valile', price: '12.99', score: '4.8', status: 'Supreme', time: '25min', count: 0, isLike: false, category: 'ice', sortby: 'recomended'},
  //     ]},
  //     {id: uuidv4(), name: 'The Pizza Men', status: 'Supreme', time: '36min', score: '4.9', isSave: false, img: Pizza, category: 'pizza', sortby: 'most popular', goods: [
  //       {id: uuidv4(), img: Peperoni, name: 'Peperoni Pizza', price: '12.99', score: '5.0', status: 'Supreme', time: '29min', count: 0, isLike: false, category: 'pizza', sortby: 'recomended'},
  //       {id: uuidv4(), img: Ham, name: 'Ham2X Pizza', price: '17.99', score: '4.4', status: 'Healthy', time: '35min', count: 0, isLike: false, category: 'pizza', sortby: ''},
  //       {id: uuidv4(), img: Mushrooms, name: 'Mushrooms', price: '15.99', score: '4.5', status: 'Healthy', time: '30min', count: 0, isLike: false, category: 'pizza', sortby: ''},
  //       {id: uuidv4(), img: Shrimp, name: 'Shrimp Pizza', price: '13.99', score: '4.9', status: 'Trending', time: '30min', count: 0, isLike: false, category: 'pizza', sortby: 'most popular'},
  //     ]},
  //     {id: uuidv4(), name: 'Donut Magazin', status: 'Trending', time: '16min', score: '4.8', isSave: true, img: Donut, category: 'donut', sortby: ['recommended', 'fast delivery'], goods: [
  //       {id: uuidv4(), img: ChocolateDonut, name: 'Chocolate Donut', price: '13.99', score: '4.9', status: 'Supreme', time: '10min', count: 0, isLike: false, category: 'donut', sortby: ['recomended', 'most popular']},
  //       {id: uuidv4(), img: VanileDonut, name: 'Vanile Donut', price: '13.99', score: '4.9', status: 'Supreme', time: '10min', count: 0, isLike: false, category: 'donut', sortby: ['recomended', 'most popular']},
  //     ]},
  //   ]

  //   setRestaurants(restaurantsArr)

  // }, [])


  return (
    <div className="App">
      <contextCart.Provider value={{cart, setCart}}>
        <Routes>
          {isRegister && (<Route path='/signup' element={<CommonFormIn><Register type='signup' /></CommonFormIn>} />) }
          {isRegister && (<Route path='/login' element={<CommonFormIn><Register type='login' /></CommonFormIn>} />) }
          {isRegister && (<Route path='/forgetpas' element={<CommonFormIn><Register type='forgetpas' /></CommonFormIn>} />) }
          
        
          <Route path='/' element={<Loyaut />}>
            <Route index element={<Display_main restaurants={restaurants}/>}/>
            <Route path='/menu' element={<Display_menu restaurants={restaurants} />}/>
            <Route path='/restaurants' element={<ListRestaurants Status={Status} restaurants={restaurants}/>}/>
            <Route path='/restaurants/goods/:id' element={<InsideRest Status={Status} restaurants={restaurants}/>}/>
            <Route path='/price' element={<Display_pricing />}/>
            <Route path='/blog' element={<Display_blog articles={articles}/>} />
            <Route path='/blog/article/:id' element={<InsideArticle articles={articles}/>}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />}/>
          </Route>
          

        </Routes>
      </contextCart.Provider>
    </div>
  );
}

export default App;
