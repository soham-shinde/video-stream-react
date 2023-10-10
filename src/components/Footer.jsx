import React from 'react'

export default function Footer() {
    return (
        <> <div className="footer">
            <div className="logo-1">
                <img src="img/logo.svg" alt="" />
                Video Stream
            </div>
            <div className="s-icons">
                <img className="s-icon" src="/img/facebook-round-color-icon.svg" alt="" />
                <img className="s-icon" src="/img/instagram-round-color-icon.svg" alt="" />
                <img className="s-icon" src="/img/twitter-round-color-icon.svg" alt="" />
                <img className="s-icon" src="/img/youtube-round-color-icon.svg" alt="" />
            </div>
            <div className="c-f-name">
                &copy; 2023 Video Stream.com . All Rights Reserved.

            </div>
            <div className="p-t-con">
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </div>
        </div></>
    )
}
