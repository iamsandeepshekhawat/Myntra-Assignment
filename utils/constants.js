import { CiSearch, CiUser, CiHeart } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const menuItems = [
    {
        title: 'Men',
        slug: 'shop/men'
    },
    {
        title: 'Women',
        slug: 'shop/women',
    },
    {
        title: 'Kids',
        slug: 'shop/kids',
    },
    {
        title: 'Home & Living',
        slug: 'shop/home-living',
    },
    {
        title: 'Beauty',
        slug: 'shop/beauty',
    },
    {
        title: 'Studio',
        slug: 'shop/studio',
    }
];

export const rightMenuItems = [
    {
        title: 'Profile',
        icon: <CiUser />,
    },
    {
        title: 'Wishlist',
        icon: <CiHeart />,
    },
    {
        title: 'Cart',
        icon: <HiOutlineShoppingBag />,
    },
]

export const logoItems = [
    '/images/logo.png',
    'Logo',
    100,
    100
]

export const searchItems = [
    <CiSearch />,
    "Search for products, brands and more"
]