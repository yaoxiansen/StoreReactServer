import React from 'react';
import include from './include';
import cache from '../lib/cache';
import _ from 'lodash';

export default props => {

    const staticHostUrl = cache.get('siteAppConf', 'staticHostUrl');
    const storeHostUrl = cache.get('siteAppConf', 'storeHostUrl');
    const siteAppConf = cache.get('siteAppConf');

    return <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta content="yes" name="apple-mobile-web-app-capable"/>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport"/>
        <meta name="format-detection" content="telephone=no"/>
        <title>{props.title}</title>
        <meta name="description" content={props.metaDescription}/>
        <meta name="keywords" content={props.metaKeywords}/>
        <base href="/"/>
        <link rel="icon" href={`${staticHostUrl}/ico/favicon-32x32.png`}
              type="image/x-icon" sizes="32x32"/>
        <link rel="apple-touch-icon-precomposed"
              href={`${staticHostUrl}/ico/apple-touch-icon-precomposed.png`}/>
        <link rel="stylesheet" href={`${staticHostUrl}/styles/all.min.css`}/>
        <link rel="stylesheet" href={`${staticHostUrl}/styles/font.css`}/>
        <script>dataLayer=[];</script>
        {_.map(_.split(props.cssName, ','), ele => {
            return <link rel="stylesheet"
                href={`${staticHostUrl}/styles/page/${ele}.css`} />
        })}
    </head>
    <body>
    <div id="clickToCall"></div>
    <var id="storeHostUrl" className="hidden">{storeHostUrl}</var>
    <var id="staticHostUrl" className="hidden">{staticHostUrl}</var>
    <var id="siteAppConfig" className="hidden" dangerouslySetInnerHTML={{__html:JSON.stringify(siteAppConf)}}></var>
    <var id="profileInfo_header" className="hidden">{}</var>
    {include(props)}
    <script src={`${staticHostUrl }/scripts/lib.js`}></script>
    <script defer="defer" src={`${staticHostUrl }/scripts/deferlib.js`}></script>
    {_.map(_.split(props.jsName, ','), ele => {
        return <script defer="defer" src={`${staticHostUrl }/scripts/page/${ele}.js`}></script>
    })}
    </body>
    </html>
}



