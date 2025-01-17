import React from 'react';

const BrandList = [
    {
        image: './images/brand/brand-01.png'
    },
    {
        image: './images/brand/brand-02.png'
    },
    {
        image: './images/brand/brand-03.png'
    },
    {
        image: './images/brand/brand-04.png'
    },
    {
        image: './images/brand/brand-05.png'
    },
    {
        image: './images/brand/brand-06.png'
    },
    {
        image: './images/brand/brand-07.png'
    },
    {
        image: './images/brand/brand-08.png'
    },
    {
        image: './images/brand/brand-01.png'
    },
    {
        image: './images/brand/brand-02.png'
    },
    {
        image: './images/brand/brand-03.png'
    },
    {
        image: './images/brand/brand-04.png'
    },
    {
        image: './images/brand/brand-05.png'
    },
    {
        image: './images/brand/brand-06.png'
    },
    {
        image: './images/brand/brand-07.png'
    },
    {
        image: './images/brand/brand-08.png'
    },
    {
        image: './images/brand/brand-07.png'
    },
    {
        image: './images/brand/brand-08.png'
    },
]

const BrandTwo = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <img src={`${data.image}`} alt="Brand Image" />
                </li>
            ))}
        </ul>
    )
}

export default BrandTwo;
