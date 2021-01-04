import React, { createContext } from 'react'
import Header from '../../components/header';
import Content from '../../components/content';

export const TestContext = createContext();

export default function index() {

    return (
        <>
            <Header />
            <Content />

        </>
    )
}
