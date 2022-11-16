import React from 'react';
import { Card } from "react-bootstrap";
import { BoxArrowInUpRight, Clock, Folder2Open } from "react-bootstrap-icons";
import './BlogCard.scss';

const BlogCard = (props) => {
  return (
    <Card className="hsr-blog-card">
        <div className="hsr-blog-image">
            <a  href={props.data.url}><img src={props.data.image} alt={props.data.alt} /></a>
        </div>
        <div className="hsr-time-area">
            <span>
            <Folder2Open className="icons" /> <span className="ms-3 text-uppercase me-4">{props.data.author}</span>
            </span>
            <span>
            <Clock className="icons"  />
            <span className="ms-3  me-5">{props.data.datetime}</span>
            </span>
        </div>
        <div className="main-title-blog mt-3">
        <h3><a href={props.data.url}>{props.data.title}</a></h3>
        </div>
        <div className="hsr-read-more">
            <a href={props.data.url}>READ MORE <BoxArrowInUpRight /></a>
        </div>
    </Card>
  )
}

export default BlogCard