/** @jsx jsx */
import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
import { jsx } from 'jimu-core'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const connectToGoogleAnalytics = (googleAnalyticsId: string) => {
    const mainScript = document.createElement('script');
    mainScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticsId;
    mainScript.async = true;
    document.head.appendChild(mainScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', googleAnalyticsId);
  }

  const googleAnalyticsId = props.config.googleAnalyticId;
  connectToGoogleAnalytics(googleAnalyticsId);
  
  return (
    <img src={ require('../google-analytics.png') } style={{ width: 120, height: 41.3}}/>
  )
}

export default Widget
