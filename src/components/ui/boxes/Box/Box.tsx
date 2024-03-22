import React from 'react';


export type BoxProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const Box: React.FC<BoxProps> = (props) => {
    const {} = props;

    return (
        <div>
            BoxComponent
        </div>
    );
};

export default React.memo(Box);