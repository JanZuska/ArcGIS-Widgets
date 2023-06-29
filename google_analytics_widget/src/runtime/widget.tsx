/** @jsx jsx */
import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
import { jsx } from 'jimu-core'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // Funkce k připojení ke Google Analytics
  const connectToGoogleAnalytics = (googleAnalyticsId: string) => {
    // Vložení externího scriptu Google Analytics do head
    const mainScript = document.createElement('script');
    mainScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticsId;
    mainScript.async = true;
    document.head.appendChild(mainScript);
    // Zbytek scriptu Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', googleAnalyticsId);
  }
  // Načtení Google Analytics ID z props a připojení
  const googleAnalyticsId = props.config.googleAnalyticId;
  connectToGoogleAnalytics(googleAnalyticsId);
  
  return (
    // Vrácení obrázku Google Analytics logo umístěného ve složce src
    <img src={ require('../google-analytics.png') } style={{ width: 120, height: 41.3}}/>
  )
}

export default Widget
