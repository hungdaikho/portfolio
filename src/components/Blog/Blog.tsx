import React from "react";
import styles from "./Blog.module.scss";
type Props = {};

const Blog = ({}: Props) => {
  return (
    <div className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.title}>Blog</div>
      </div>
    </div>
  );
};

export default Blog;
