import './Form.css'
import React, { PropsWithChildren } from 'react'

interface FormProps{
    children: React.ReactNode;
    action: (formData: FormData) => Promise<void>;
}

const Form: React.FC<FormProps> = ({ children, action }) => {
  return (
    <form action={action}>
        {children}
    </form>
  )
}

export default Form