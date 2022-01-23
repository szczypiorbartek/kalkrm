
import React from 'react';
import {PageHeading} from './PageHeading';

export default function Heading(props) {
    return (
        <PageHeading variant={props.variant}>
            {props.title}
        </PageHeading>
    );
}