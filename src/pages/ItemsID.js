import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/rendang.jpg'
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import axios from 'axios'

class ItemsID extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                    data_items: null,
                    data_review: []
                }
                // this.getDataItems = this.getDataItems.bind(this)
        }

        componentDidMount() {
            console.log(this.props.match.params.id)
            this.getDataItems(this.props.match.params.id)
        }

        async getDataItems(id) {
            // await axios.get("http://localhost:3000/detail-items/" + this.props.match.params.id)
            await axios.get(`http://localhost:3000/detail-items/${id}`)
                .then(res => {
                    console.log(res)
                    console.log('berhasil')
                    console.log(res.data.review.name_user)
                    let dataArr = res.data.data
                    let dataArr2 = res.data.review
                    this.setState({
                        data_items: dataArr,
                        data_review: dataArr2
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }

        render() {

                return ( <
                        div >
                        <
                        Navbarsubuser / >
                        <
                        div className = 'container' >
                        <
                        h4 className = " bold mt-5 mb-5 text-center" > Items < /h4>

                        {
                            this.state.data_items && ( <
                                div className = "card-body-link" >
                                <
                                div className = "card mb-5 card-profil" >
                                <
                                div className = "row no-gutters" >
                                <
                                div className = "row no-gutters" >
                                <
                                img src = { process.env.REACT_APP_API_URL + this.state.data_items.images }
                                className = "card-img card-img-detail"
                                alt = "..." / >
                                <
                                /div> <
                                div className = "col-md-6" >
                                <
                                div className = "card-body" >
                                <
                                h5 className = "cart-titles" > { this.state.data_items.name_restaurant } < /h5> <
                                hr / >
                                <
                                h6 className = "cart-resto" > { this.state.data_items.name_item } - { this.state.data_items.location } < /h6> <
                                h6 className = "cart-price" > Rp. { this.state.data_items.price } < /h6> <
                                /div> <
                                /div> <
                                /div> <
                                /div> <
                                /div>
                            )
                        } <
                        button className = "btn btn-warning block marginbuy" > Buy < /button> <
                        button className = "btn btn-warning plus marginplus" > + < /button> <
                        /div>

                        <
                        div className = "container mt-5" >
                        <
                        Tabs defaultIndex = { 1 }
                        onSelect = { index => console.log(index) } >
                        <
                        TabList >
                        <
                        Tab className = "btn btn-danger mr-2" > Hide < /Tab> <
                        Tab className = "btn btn-danger" > See Review < /Tab> <
                        /TabList> <
                        hr / >
                        <
                        TabContent >
                        <
                        TabPanel > < /TabPanel>    <
                        /TabContent>  <
                        TabPanel > {
                            this.state.data_review.map((val, idx) => ( <
                                    Reviews name = { val.name_user }
                                    review = { val.review }
                                    date = { val.date_created }
                                    />))}

                                    <
                                    div className = "col-lg-5 justify-content-center text-center" >
                                    <
                                    button className = "btn btn-danger" > Comment < /button> <
                                    /div>

                                    <
                                    /TabPanel> <
                                    /Tabs>

                                    <
                                    /div>




                                    <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }

                        export default ItemsID;