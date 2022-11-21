import Modal from 'react-modal'
// import { GiCancel } from 'react-icons/gi'

import Login from '../components/userAuth/Login'
import Signup from '../components/userAuth/Signup'

Modal.setAppElement('#root')

const Authmodal = ({ Comp, Open, onClose }) => {
  return (
    <div className="modal">
      <Modal isOpen={Open} onRequestClose={onClose} style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)'
        },
        content: {
          backgroundColor: '#fefefe',
          borderRadius: '10px',
          border: '1px solid #888',
          padding: '10px',
          top: '80px',
          left: '400px',
          right: '400px',
          bottom: '80px',
        }
      }}>
        {/* <span className='close' onClick={onClose}><GiCancel size='30px' /></span> */}
        {Comp ? <Login /> : <Signup />}
      </Modal>
    </div>
  )
}

export default Authmodal