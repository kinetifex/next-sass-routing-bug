import React, { Fragment } from 'react';
import Link from 'next/link';

export default () => (
  <Fragment>
    <h4>Index Page</h4>
    <p>
      This example demonstrates a bug with client-routing to pages that import
      or have components that import scss files. If SSR occurs on a page with
      scss imports, client-side routing works fine. If the SSR page does not
      include any scss import, client-side routing then does not take place.
    </p>
    <ul>
      <li><Link href='/no-scss'><a>Without SCSS import</a></Link></li>
      <li><Link href='/with-scss'><a>With SCSS import</a></Link></li>
      <li><a href='/with-scss'>SSR with SCSS import</a></li>
    </ul>
  </Fragment>
);
