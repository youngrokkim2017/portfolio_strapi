import React from 'react';
import Query from '../Query';
import { Link } from 'react-router-dom';

import CATEGORIES_QUERY from '../../queries/category/categories';

const Nav = () => {
    return (
        <div>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (
                        <div>
                            <nav className="uk-navbar-container" data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link to="/">Strapi Blog</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                        {categories.map((category, i) => {
                                            return (
                                                <li key={category.id}>
                                                    <Link
                                                        to={`/category/${category.id}`}
                                                        className="uk-link-reset"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default Nav;

// Note: The current code is not suited to display a lot of categories as you 
// may encounter a UI issue. Since this blog post is supposed to be short, you 
// could improve the code by adding a lazy load or something like that.