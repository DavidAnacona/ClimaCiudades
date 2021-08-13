import { IMG_URL } from "Components/settings";

import React from 'react';

const Picture = ({url, id}) => {

    return (
        <img src={`${IMG_URL}${url}@2x.png`} alt={id} />
    )
};

export default Picture;