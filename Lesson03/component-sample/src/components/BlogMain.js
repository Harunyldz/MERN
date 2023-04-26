import React, { Component } from "react";
import BlogItem from "./BlogItem";
import BlogTest from "./BlogTest";

export class BlogMain extends Component {
  render() {
    const title = "ReactJS From app.js";
    let blogInfo = [
      { textHeader: "Blog Header 1", textBody: "Blog Body 1" },
      { textHeader: "Blog Header 2", textBody: "Blog Body 2" },
      { textHeader: "Blog Header 3", textBody: "Blog Body 3" },
      { textHeader: "Blog Header 4", textBody: "Blog Body 4" },
    ];
    return (
      <div>
       <h1> BlogMain Component</h1>
        <BlogTest
          blogArray={[1, 2, 3]}
          blogtitle={title}
          age={99}
          name="Firstname Lastname"
          blogObject={{
            id: 1,
            title: "Blog Title",
            description: "blog Description",
          }}
        />
        {/* Array Map kullanımı */}
        {blogInfo.map(function (item, index) {
          return (
            <BlogItem
              title={item.textHeader}
              description={item.textBody}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogMain;
