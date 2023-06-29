/** @jsx jsx */
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { jsx } from 'jimu-core'
import { TextInput } from 'jimu-ui'
import { IMConfig } from '../config'

export default function (props: AllWidgetSettingProps<IMConfig>) {
  // Funkce onChange na TextInput
  const googleAnalyticsIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Získání hodnoty z TextInput
    const inputValue = event.target.value;
    // Uložení Google Analytics ID do props
    props.onSettingChange({id: props.id, config: props.config.set('googleAnalyticsId', inputValue)})
  }

  return (
    // Vrácení TextInputu Google Analytics ID
    <div>
      <div className='widget-setting'>

        <TextInput
          type='text'
          defaultValue={props.config.googleAnalyticsId}
          className='mx-auto p-2'
          placeholder='Google analytics ID'
          onChange={googleAnalyticsIdChange}
          >
        </TextInput>
      </div>
    </div>
  )
}
