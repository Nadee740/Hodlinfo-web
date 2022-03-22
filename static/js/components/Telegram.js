import React, {
    Component
} from 'react';
import {
    Header
} from "./Header";
import {
    Footer
} from "./Footer";
import cookie from 'react-cookies';
import TelegramLogo from '../assets/images/telegram.png'

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(TRACKING_ID);

ReactGA.pageview(window.location.pathname + window.location.search);

export class Telegram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightTheme: parseInt(cookie.load('isLightTheme')),
            data: null,
        };
    }

    onThemeButtonClick = () => {
        this.setState((oldState) => {
            return {
                isLightTheme: !oldState.isLightTheme
            }
        }, () => {
            let val = this.state.isLightTheme ? 1 : 0;
            cookie.save('isLightTheme', val, {
                path: '/'
            })
        })
    };

    render() {
        return ( <
            div className = {
                ("theme-") + (this.state.isLightTheme ? "light" : "dark")
            } >
            <
            Header isLightTheme = {
                this.state.isLightTheme
            }
            onThemeButtonClick = {
                this.onThemeButtonClick
            }
            hideAssetCurrencyButtons isTelegramPage /
            >
            <
            div className = "padding-bottom-50" >
            <
            div className = "telegram-page text-center"
            style = {
                {
                    paddingBottom: "20px"
                }
            } >
            <
            div className = "header-telegram" >
            Connect <
            img src = {
                TelegramLogo
            }
            className = "telegram-logo-tg " / >
            Telegram <
            /div>

            <
            div className = "header-telegram-heading" >
            Add bot to your group <
            /div> <
            div className = "sub-heading-telegram" > Manual: < /div> <
            div > 1. Open the telegram app. < /div> <
            div > 2. Open the group you want to add the bot to. < /div> <
            div > 3. Click on add members in group settings. < /div> <
            div > 4. Search @HodlInfoBot and click it. < /div> <
            div className = "sub-heading-telegram" > < br / > Automatic: < /div> <
            div >
            Go to: < a className = "tg-link"
            href = "https://t.me/HodlInfoBot?startgroup=true" > https: //t.me/HodlInfoBot?startgroup=true</a>
            <
            /div> <
            br / >
            <
            div className = "header-telegram-heading" >
            Chat with the bot <
            /div> <
            div className = "sub-heading-telegram" > Manual: < /div> <
            div > 1. Open the telegram app. < /div> <
            div > 2. Click on new message button. < /div> <
            div > 3. In search bar type HodlInfoBot. < /div> <
            div > 4. Click on @HodlInfoBot. < /div> <
            div className = "sub-heading-telegram" > < br / > Automatic: < /div> <
            div >
            Go to: < a className = "tg-link"
            href = "https://t.me/HodlInfoBot" > https: //t.me/HodlInfoBot</a>
            <
            /div>

            <
            /div> <
            /div>

            <
            div className = "footer" >
            <
            Footer / >
            <
            /div> <
            /div>
        )
    }
}