import React, { Component } from "react";
import "./App.css";
import Pagination from "./common/pagination";

class App extends Component {
  state = {
    posts: [],
    pageSize: 10,
  };

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(posts => {
              this.setState({ posts }); console.log(this.state.posts);
          });
  }

  handleAdd = () => {
    console.log("Add");
  };

  handleUpdate = post => {
    console.log("Update", post);
  };

  handleDelete = post => {
    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <Pagination
          pageSize={this.state.pageSize}
          itemsCount={this.state.posts.length}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
