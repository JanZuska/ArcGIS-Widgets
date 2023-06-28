import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'

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

  return false
}

export default Widget
