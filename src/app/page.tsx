import React from 'react';


export type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
    const {} = props;

    return (
        <div style={ { fontSize: 100, fontWeight: 900 } }>
            На русском 999./
        </div>
    );
};

export default React.memo(Page);