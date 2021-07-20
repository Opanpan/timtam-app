import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";
import "../../css/Home.css";
import NavigationLogin from "../../components/Navbar-Login";
// import Table from "../../components/Table";
import axios from "axios";

class Dashboard_User extends Component {
    state = {
        published: false,
        news: [],
    };

    componentDidMount() {
        axios.get("/api/news/list-news").then((res) => {
            if (res.status === 200) {
                this.setState({
                    news: res.data.news,
                });
            }
        });
    }

    // handleDetail = async (event) => {
    //     // event.preventDefault();
    //     const data = {
    //         id: event.target.value,
    //     };
    //     await axios
    //         .post("/api/news/detail-news", data, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //         .then(() => {
    //             return <Link to="/dashboard-user/detail-news" />;
    //         });
    // };

    handlePublish = async (event) => {
        // event.preventDefault();
        const data = {
            id: event.target.value,
        };
        await axios
            .post("/api/news/publish-news", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                window.location.reload(false);
            });
    };

    render() {
        return (
            <>
                <NavigationLogin />
                <Container>
                    <div className="news-container">
                        <div className="news-content">
                            <h1>List News</h1>
                            <Link to="/dashboard-user/add-news">
                                <button className="btn btn-primary">
                                    Add News
                                </button>
                            </Link>
                        </div>
                        <div className="news-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>News</th>
                                        <th>Body</th>
                                        <th>Viewer</th>
                                        <th>Like</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.news.map((news, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{news.headline}</td>
                                                <td>{news.body}</td>
                                                <td>{news.viewer}</td>
                                                <td>{news.like}</td>
                                                <td>
                                                    {news.status === "0" && (
                                                        <Link
                                                            to={`/dashboard-user/edit-news/${news.id}`}
                                                            data={news}
                                                        >
                                                            <button
                                                                className="btn btn-primary"
                                                                value={news.id}
                                                            >
                                                                Edit
                                                            </button>
                                                        </Link>
                                                    )}
                                                    {news.status === "1" && (
                                                        <button
                                                            className="btn btn-primary"
                                                            onClick={
                                                                this
                                                                    .handlePublish
                                                            }
                                                            value={news.id}
                                                        >
                                                            Publish
                                                        </button>
                                                    )}
                                                    {news.status === "2" && (
                                                        <p>Published</p>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Dashboard_User;
