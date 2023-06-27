import { AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const connectToGoogleAnalytics = (googleAnalyticId: string) => {
    const mainScript = document.createElement('script');
    mainScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticId;
    mainScript.async = true;
    document.head.appendChild(mainScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', googleAnalyticId);
  }

  const googleAnalyticId = props.config.googleAnalyticId;
  connectToGoogleAnalytics(googleAnalyticId);

  return false
}

export default Widget
