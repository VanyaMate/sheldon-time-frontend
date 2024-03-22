import React from 'react';


export type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
    const {} = props;

    return (
        <div>
            Time Page
        </div>
    );
};

export default React.memo(Page);