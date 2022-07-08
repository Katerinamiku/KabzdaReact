import React, {useState} from 'react';

import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating, //важно указать ЧТО тестируем
};

export const EmptyRating = () => <Rating value={0} onClick={a=>a} />
export const Rating1 = () => <Rating value={1} onClick={a=>a} />
export const Rating2 = () => <Rating value={2} onClick={a=>a} />
export const Rating3 = () => <Rating value={3} onClick={a=>a} />
export const Rating4 = () => <Rating value={4} onClick={a=>a} />

export const ChangingRating = () => {
    const [rating, setRating] = useState<RatingValueType>(2);
    return <Rating value={rating} onClick={setRating}/>
};
