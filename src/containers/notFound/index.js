/**
 * notFound
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { StyledNotFound } from './style';

export default function NotFound() {
    return (
        <StyledNotFound>
            <h1>Page not found.</h1>
        </StyledNotFound>
    );
}
