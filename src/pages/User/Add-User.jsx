import React, { Component } from "react";
import { Alert, Container } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/Home.css";
import NavigationLogin from "../../components/Navbar-Login";
import TextField from "../../components/input/TextField";

class Add_User extends Component {
    state = {
        headline: "",
        body: "",
        categories_id: 0,
        categories: [],
        selectedImage: null,
        infoAlert: false,
        variant: "",
        messageAlert: "",
    };

    componentDidMount() {
        axios.get("/api/category/list-category").then((res) => {
            if (res.status === 200) {
                this.setState({
                    categories: res.data.categories,
                });
            }
        });
    }

    handleFieldOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleFileOnChange = (event) => {
        this.setState({
            selectedImage: event.target.files[0],
        });
    };

    handleDraft = async () => {
        if (
            this.state.headline !== "" ||
            this.state.body !== "" ||
            this.state.categories_id !== ""
        ) {
            const data = {
                headline:
                    this.state.headline !== "" ? this.state.headline : null,
                body: this.state.body !== "" ? this.state.body : null,
                categories_id:
                    this.state.categories_id !== 0
                        ? this.state.categories_id
                        : null,
            };

            await axios
                .post("/api/news/draft-news", data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    this.setState({
                        infoAlert: true,
                        variant: "info",
                        messageAlert: "Save to draft success!",
                    });

                    setTimeout(() => {
                        this.setState({
                            infoAlert: false,
                            variant: "",
                            messageAlert: "",
                        });
                    }, 3000);

                    return <Redirect to={{ pathname: "/home" }} />;
                });
        } else {
            this.setState({
                infoAlert: true,
                variant: "danger",
                messageAlert: "Input must be filled!",
            });

            setTimeout(() => {
                this.setState({
                    infoAlert: false,
                    variant: "",
                    messageAlert: "",
                });
            }, 3000);
        }
    };

    handleOnSubmit = async () => {
        const data = {
            headline: this.state.headline,
            body: this.state.body,
            categories_id: this.state.categories_id,
        };
        await axios
            .post("/api/news/create-news", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                return <Redirect to={{ pathname: "/dashboard-user" }} />;
            });
    };

    render() {
        return (
            <>
                <NavigationLogin />
                <Container>
                    <div className="news-container">
                        {this.state.infoAlert && (
                            <Alert variant={this.state.variant}>
                                {this.state.messageAlert}
                            </Alert>
                        )}
                        <div className="news-content">
                            <h1>Add News</h1>
                            <Link to="/dashboard-user">
                                <button className="btn btn-secondary">
                                    Back
                                </button>
                            </Link>
                            <button
                                className="btn btn-secondary"
                                onClick={this.handleDraft}
                            >
                                Save draft
                            </button>
                        </div>
                        <div className="news-body">
                            <form onSubmit={this.handleOnSubmit}>
                                <TextField
                                    name="headline"
                                    onChange={this.handleFieldOnChange}
                                    placeholder="Headline"
                                    value={this.state.headline}
                                />
                                <TextField
                                    name="body"
                                    onChange={this.handleFieldOnChange}
                                    placeholder="Body"
                                    value={this.state.body}
                                />
                                <select
                                    className="form-control"
                                    name="categories_id"
                                    onChange={this.handleFieldOnChange}
                                    options={this.state.categories}
                                    value={this.state.categories_id}
                                >
                                    <option value="">Pilih Kategori</option>
                                    {this.state.categories.map((category) => {
                                        return (
                                            <option value={category.id}>
                                                {category.category_name}
                                            </option>
                                        );
                                    })}
                                </select>
                                {/* <input
                                    type="file"
                                    onChange={this.handleFileOnChange}
                                /> */}
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="Submit"
                                />
                            </form>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Add_User;
