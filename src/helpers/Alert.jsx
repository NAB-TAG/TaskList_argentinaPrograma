
import Swal from "sweetalert2"
// import useStorage from "../hooks/useStorage"

const AlertInput = () => {
    
    // const [ storage, setStorage ] = useStorage('tasklist', localStorage.getItem('tasklist')?localStorage.getItem('tasklist'):'')
    let storage = localStorage.getItem('tasklist')?JSON.parse(localStorage.getItem('tasklist')):[];
    // storage = JSON.parse(storage);
    console.log(storage)
    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {

            storage.push({id:Math.random() * 1000000000000000000,text: login})
            localStorage.setItem('tasklist', JSON.stringify(storage))
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
}
export default AlertInput;