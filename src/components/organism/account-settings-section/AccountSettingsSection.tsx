import { InputTextLabel, SwitchLabel } from "@/components/molecules"

const AccountSettingsSection = () => {
  return (
    <div className="p-3 flex flex-col gap-3 bg-background-secondary-customized mt-1">

      <p className="text-xl font-semibold">Account Settings</p>

      <InputTextLabel
        id={'email'}
        label={'E-mail address'}
        placeHolder={'Yourmail@gmail.com'}
        type={'email'}
      />
      <InputTextLabel
        id={'change-password'}
        label={'Change Passwork'}
        placeHolder={'***'}
        type={'password'}
      />
      <InputTextLabel
        id={'time-zone'}
        label={'Time Zone'}
        placeHolder={'English'}
        type={'text'}
      />
      <InputTextLabel
        id={'language'}
        label={'Language'}
        placeHolder={'AX'}
        type={'text'}
      />

      <SwitchLabel
        id={'auth'}
        label={'Two factor Authentication:'}
      />
    </div>
  )
}

export default AccountSettingsSection