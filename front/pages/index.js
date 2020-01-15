import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div>Hello, Next!
            <ul>
                <li>
                    <Link href="/about"><a>about</a></Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;