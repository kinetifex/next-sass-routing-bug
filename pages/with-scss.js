import React from 'react';
import Link from 'next/link';
import '../styles/style.scss';

export default () => (
  <div className='example'>
    <h4>Example with SCSS import</h4>
    <ul>
      <li>
        <Link href='/'><a>Index</a></Link>
      </li>
    </ul>
  </div>
);
