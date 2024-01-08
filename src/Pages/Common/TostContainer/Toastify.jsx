import React from 'react'
import { ToastContainer } from 'react-toastify'

function Toastify() {
  return (
    <div>
        <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  )
}

export default Toastify