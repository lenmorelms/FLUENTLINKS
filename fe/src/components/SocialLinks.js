import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
import Image from "./reusables/Image";
import { Link } from "react-router-dom";

const SocialLinks = () => {
    const [socialLink, setSocialLink] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [facebook, setFacebook] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [telegram, setTelegram] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [saveContact, setSaveContact] = useState("");

    const [url, setUrl] = useState(null);

    const options = [
        { value: 'instagram', label: 'Instagram' },
        { value: 'twitter', label: 'Twitter' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'tiktok', label: 'Tiktok' },
        { value: 'whatsapp', label: 'Whatsapp' },
        { value: 'telegram', label: 'Telegram' },
        { value: 'email', label: 'Email' },
        { value: 'website', label: 'Website' },
        { value: 'saveContact', label: 'Phone' }
    ];

    const changeHandler = (option) => {
        setUrl(option);
    }

    const socialLinksHandler = (e) => {
        e.preventDefault();
        const linkType = url.value;
        switch (linkType) {
            case "email":
                setEmail(socialLink);
                break;
            case "instagram":
                setInstagram(socialLink);
                break;
            case "twitter":
                setTwitter(socialLink);
                break;
            case "facebook":
                setFacebook(socialLink);
                break;
            case "whatsapp":
                setWhatsapp(socialLink);
                break;
            case "telegram":
                setTelegram(socialLink);
                break;
            case "website":
                setWebsite(socialLink);
                break;
            case "saveContact":
                setSaveContact(socialLink);
                break;        
            default:
                break;
        }
        alert(email);

    }
    return (
        <>
        <div className="grey-font p-lg-3">
            <div className="links-form p-3">
            <form onSubmit={socialLinksHandler}>
                <Container>
                    <Row>
                        <Col md={4} className="grey-font p-1">
                            <Select
                                value={url}
                                onChange={changeHandler}
                                options={options}
                                required
                            />
                        </Col>
                        <Col md={4} className="grey-font p-1">
                            <input
                                type={url && (url.label === "Email" ? "email" : (url.label === "Phone" || url.label === "Whatsapp" || url.label === "Telegram") ? "tel" : "url")}
                                className="form-control"
                                id="url" 
                                name="url"
                                value={socialLink}
                                // onFocus={() => setInputError("")}
                                onChange={(e) => setSocialLink(e.target.value)}
                                placeholder={url && (url.label === "Email" ? `your@example.com` : (url.label === "Phone" || url.label === "Whatsapp" || url.label === "Telegram") ? "+00000000" : `${url.label} URL`)}
                                required 
                            />
                        </Col>
                        <Col md={4} className="grey-font p-1">
                            <button type="submit" class="btn btn-primary light-strong">
                                <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;
                                {url ? `Add ${url.label}` : `Add Social Link`}
                            </button>
                        </Col>
                    </Row>
                </Container>
            </form>
            </div>
            <div className="links-image block-center">
                <div class="custom-file-input">
                <input type="file" id="fileInput" hidden />
                <button id="customButton">
                <i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;
                    Upload Links Image
                </button>
                <span id="fileName">No file chosen</span>
                </div>
            </div>

            <div className="dispaly-links">
                <h3 className="strong grey-font">Social Links</h3>

                <div className="links-container">
                    <Container>
                        <Row className="p-4 m-2 links-row">
                            <Col md={1} className="grey-font">
                                Up
                            </Col>
                            <Col md={1} className="grey-font">
                                Down
                            </Col>
                            <Col md={4} className="grey-font">
                                My Instagram
                            </Col>
                            <Col md={4} className="grey-font">
                                https://instagram.com/instagram.com
                            </Col>
                            <Col md={1} className="grey-font">
                                Edit
                            </Col>
                            <Col md={1} className="grey-font">
                                Delete
                            </Col>
                        </Row>
                        <Row className="p-4 m-2 links-row">
                            <Col md={1} className="grey-font">
                                Up
                            </Col>
                            <Col md={1} className="grey-font">
                                Down
                            </Col>
                            <Col md={4} className="grey-font">
                                My Instagram
                            </Col>
                            <Col md={4} className="grey-font">
                                <input
                                    className="form-control bg-light App-link link-input"
                                    type="text"
                                    name="instagram"
                                    id="instagram"
                                    value="https://instagram.com/instagram.com"
                                    // disabled={true}
                                    onBlur={(e) => alert(e.target.value)}
                                />    
                            </Col>
                            <Col md={1} className="grey-font">
                                <button type="submit" onClick="">Edit</button>
                            </Col>
                            <Col md={1} className="grey-font">
                                Delete
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="display-preview">
                {/*  */}
            </div>
        </div>
        </>
  
    )
  
};

export default SocialLinks;