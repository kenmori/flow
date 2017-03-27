/*@flow*/
import React from 'react';

import classNames from 'classnames';

//https://github.com/facebook/flow/issues/869

type Props = {
    href: ?string,
    className: ?string
}

const Button = (props : Props) =>
    props.href
        ? <a {...props} className={classNames('Button', props.className)} />
        : <button {...props} className={classNames('Button', props.className)} />


export default Button;
