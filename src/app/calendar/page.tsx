import React from 'react';


export type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
    const {} = props;

    return (
        <div>
            Calendar
        </div>
    );
};

export default React.memo(Page);