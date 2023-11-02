import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveSuccess = () => {
  toast.success('저장이 완료되었습니다', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    });
}

export const editSuccess = () => {
  toast.success('수정이 완료되었습니다', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    });
}

export const addFriendSuccess = () => {
  toast.success('친구 요청을 완료했습니다', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    });
}