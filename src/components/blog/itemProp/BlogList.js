import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const BlogList = ({ data, StyleVar }) => {
   

    
    return (
        <div className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image">
                        <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt="Blog" />
                    </Link>
                </div>
                <div className="content">
                    <ul className="rn-meta-list">
                        <li><Link to={process.env.PUBLIC_URL + `/archive/${slugify(data.author)}`}>{data.author}</Link></li>
                        <li className="separator">/</li>
                        <li>{data.date}</li>
                    </ul>
                    <h4 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                            {data.title}
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;
